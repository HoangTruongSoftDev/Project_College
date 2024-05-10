package main

import (
	"bufio"
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"os"
	"strings"
)

/*
	Last week we started to work on API development in order to make it possible to

let 2 or more applications communicate together. Today we are going to expand it further and understand
how it can be implemented

we continue the concept of API development with implementing a simple chat app which one of them
types in the we browser and the other one types in the console of Goland

# Please note that teacher will intentionally include a bug which it will be our homework to fix it

run in terminal "go get github.com/gorilla/websocket"
*/

// this is for setting the size of the send/receive buffer
var upgrader1 = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

// clients stores all connected Websocket clients
var clients1 = make(map[*websocket.Conn]bool)

// broadcast is a channel for broadcasting messages to all connected clients
var broadcast = make(chan string)

// the below function upgrades HTTP connections to WebSocket and manages client connections
func handleConnections(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
		return
	}
	defer conn.Close()
	// add the new client to the clients map
	clients[conn] = true
	for {
		// Read a message from the WebSocket client
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			// Remove the client from the clients map if there is an error
			delete(clients, conn)
			return
		}
		//Convert the received messages to a string
		message := string(p)
		fmt.Printf("Received message: %s\n", message)
		// here we should mention that if the message is not an echoed message, broadcast it
		if !strings.HasPrefix(message, "Sent: ") {
			broadcast <- message
		}
		// Echo the message back to the client
		if err := conn.WriteMessage(messageType, p); err != nil {
			log.Println(err)
			return
		}
	}
}

// The below function reads messages from the console and broadcasts them to all WebSocket clients
func handleConsoleInput() {
	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		// Read a message from the console
		message := scanner.Text()
		// Broadcast the message to all WebSocket clients
		broadcast <- message
		/*
					The above line is using the channel operator which has the symbol <- to send the value
				of the message variable to the broadcast channel. In GoLang, channels are used to communicate
			between goroutines(concurrent threads of execution). The <- operator is used for both sending and receiving
			values from the channel
		*/
	} // Log any errors that occur during scanning
	if err := scanner.Err(); err != nil {
		log.Println(err)
	}
}

// The below function broadcasts messages from the broadcast channel to all WebSocket clients
func handleMessages() {
	for {
		//Receive a message from the broadcast channel
		message := <-broadcast
		// In below for loop we also broadcast the message to all WebSocket clients
		for client := range clients {
			err := client.WriteMessage(websocket.TextMessage, []byte(message))
			if err != nil {
				log.Println(err)
				client.Close()
				delete(clients, client)
			}
		}
	}
}
func main() {
	//Start the Console input and message broadcasting goroutines
	go handleConsoleInput()
	go handleMessages()
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})
	http.HandleFunc("/ws", handleConnections)
	fmt.Println("Server is running on http://localhost:8088")
	log.Fatal(http.ListenAndServe(":8088", nil))
}

// 2 two browser
//package main
//
//import (
//	"fmt"
//	"github.com/gorilla/websocket"
//	"log"
//	"net/http"
//)
//
//var upgrader = websocket.Upgrader{
//	CheckOrigin: func(r *http.Request) bool {
//		return true
//	},
//}
//
//var clients = make(map[*websocket.Conn]bool)
//var broadcast = make(chan string)
//
//func handleConnections(w http.ResponseWriter, r *http.Request) {
//	conn, err := upgrader.Upgrade(w, r, nil)
//	if err != nil {
//		log.Fatal(err)
//		return
//	}
//	defer conn.Close()
//
//	clients[conn] = true
//
//	for {
//		message, err := readMessage(conn)
//		if err != nil {
//			delete(clients, conn)
//			break
//		}
//
//		fmt.Printf("Received message: %s\n", message)
//
//		broadcast <- message
//	}
//}
//
//func handleMessages() {
//	for {
//		message := <-broadcast
//
//		for client := range clients {
//			err := writeMessage(client, message)
//			if err != nil {
//				log.Println(err)
//				client.Close()
//				delete(clients, client)
//			}
//		}
//	}
//}
//
//func readMessage(conn *websocket.Conn) (string, error) {
//	_, p, err := conn.ReadMessage()
//	if err != nil {
//		return "", err
//	}
//	return string(p), nil
//}
//
//func writeMessage(conn *websocket.Conn, message string) error {
//	err := conn.WriteMessage(websocket.TextMessage, []byte(message))
//	return err
//}
//
//func main() {
//	go handleMessages()
//
//	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
//		http.ServeFile(w, r, "index.html")
//	})
//	http.HandleFunc("/ws", handleConnections)
//
//	fmt.Println("Server is running on http://localhost:8088")
//	log.Fatal(http.ListenAndServe(":8088", nil))
//}

//package main
//
//import (
//	"bufio"
//	"fmt"
//	"os"
//	"sync"
//)
//
//var messages = make(chan string)
//
//// we create a wait group for communication in order to avoid channel jam
//var wg sync.WaitGroup
//
//func main() {
//	wg.Add(1)
//	go receiveMessage()
//	fmt.Println("Chat application - Type Exist to end the chat")
//	scanner := bufio.NewScanner(os.Stdin)
//	for {
//		fmt.Print("You: ")
//		scanner.Scan()
//		message := scanner.Text()
//		if message == "exit" {
//			break
//		}
//		messages <- message
//	}
//	close(messages)
//	wg.Wait()
//}
//func receiveMessage() {
//	defer wg.Done()
//	for message := range messages {
//		fmt.Println("Friend: ", message)
//	}
//}
