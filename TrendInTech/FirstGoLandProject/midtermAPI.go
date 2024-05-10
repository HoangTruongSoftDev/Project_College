package main

import (
	"bufio"
	"fmt"
	"html/template"
	"io/ioutil"
	"net/http"
	"os"
	"sync"

	"github.com/gorilla/websocket"
)

var (
	upgrader = websocket.Upgrader{
		ReadBufferSize:  1024,
		WriteBufferSize: 1024,
	}
	mutex   sync.Mutex
	message string
	clients = make(map[*websocket.Conn]bool) // connected clients
)

// servePage serves the HTML page
func servePage(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("index.html")
	if err != nil {
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	tmpl.Execute(w, nil)
}

// handleWebSocket handles our WebSocket endpoint
func handleWebSocket(w http.ResponseWriter, r *http.Request) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true }
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Println("Failed to set websocket upgrade:", err)
		return
	}
	clients[conn] = true

	for {
		messageType, p, err := conn.ReadMessage()
		if err != nil {
			delete(clients, conn)
			conn.Close()
			break
		}
		message = string(p)
		for client := range clients {
			if err := client.WriteMessage(messageType, p); err != nil {
				delete(clients, conn)
				conn.Close()
				break
			}
		}
	}
}

func broadcastMessage(msg string) {
	for client := range clients {
		if err := client.WriteMessage(websocket.TextMessage, []byte(msg)); err != nil {
			client.Close()
			delete(clients, client)
		}
	}
}

// Add this function to your existing Go code
func saveTextHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Only POST method is allowed", http.StatusMethodNotAllowed)
		return
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "Error reading request body", http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()

	filename := "combined_text.txt"
	err = ioutil.WriteFile(filename, body, 0644)
	if err != nil {
		http.Error(w, "Error writing to file", http.StatusInternalServerError)
		return
	}
	fmt.Fprintf(w, "Text saved successfully")
}

// Inside your main function, register the new handler

func main() {
	http.HandleFunc("/", servePage)
	http.HandleFunc("/ws", handleWebSocket)
	http.HandleFunc("/save", saveTextHandler)
	go func() {
		fmt.Println("Server started on http://localhost:8080")
		if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Println("Failed to start server:", err)
		}
	}()

	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		mutex.Lock()
		message += scanner.Text() + "\n"
		mutex.Unlock()
		broadcastMessage(message)
	}
}
