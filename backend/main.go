package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strings"

	websocket "github.com/pranayjoshi/go-react-chatapp/pkg/WebSocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request, user string) {
	fmt.Println("websocket endpoint reached")

	conn, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
		User: user,
	}
	pool.Register <- client
	client.Read()
}

func setupRoutes() {

	type User struct {
		Username string `json:"username"`
	}
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		username := &User{}
		w.Header().Set("Access-Control-Allow-Origin", "*")
		username.Username = strings.TrimPrefix(r.URL.Path, "/")
		if username.Username != "" {
			user := &User{Username: username.Username}
			w.Header().Set("Content-Type", "application/json")
			err := json.NewEncoder(w).Encode(user)
			if err != nil {
				http.Error(w, err.Error(), http.StatusInternalServerError)
				return
			}
		}

	})
	pool := websocket.NewPool()
	go pool.Start()
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		user := &User{}
		if user != nil {
			serveWS(pool, w, r, user.Username)
		} else {
			// Handle the case where user is nil
			http.Error(w, "User is not set", http.StatusBadRequest)
			return
		}
	})
}

func main() {
	fmt.Println("Server running on port 9000")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}
