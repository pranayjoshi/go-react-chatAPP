package websocket

import (
	"encoding/json"
	"fmt"
	"log"
	"sync"

	"github.com/gorilla/websocket"
)

type Client struct {
	ID   string
	Conn *websocket.Conn
	Pool *Pool
	User string
	mu   sync.Mutex
}

type Message struct {
	Type string `json:"type"`
	Body string `json:"body"`
	User string `json:"user"`
}

func (c *Client) Read() {
	defer func() {
		c.Pool.Unregister <- c
		c.Conn.Close()
	}()

	for {
		messageType, p, err := c.Conn.ReadMessage()
		fmt.Println("Message Received: ", string(messageType))
		if err != nil {
			log.Println(err)
			return
		}

		var message Message
		err = json.Unmarshal(p, &message)
		if err != nil {
			log.Println("Error decoding JSON: ", err)
			return
		}
		c.Pool.Broadcast <- message
		fmt.Printf("Message Received: %+v\n", message)
	}
}
