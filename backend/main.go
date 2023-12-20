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
	pool := websocket.NewPool()
	go pool.Start()
	type User struct {
		Username string `json:"username"`
	}
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		username := strings.TrimPrefix(r.URL.Path, "/")
		if username != "" {
			// Now you can use `username` to set the user
			fmt.Fprintf(w, "Username: %s\n", username)
		}
	})
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		var user User
		err := json.NewDecoder(r.Body).Decode(&user)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		// Now you can use `user.Username` to get the username
		serveWS(pool, w, r, user.Username)
	})
}

func main() {
	fmt.Println("Server running on port 9000")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}
