package main

import (
	"bufio"
	"fmt"
	"github.com/gorilla/websocket"
	"html/template"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"sync"
)

/*

Hoang Truong Pham - 2130169

Question #4 (80 Points):
Implement a simple API which reads text contents from the console and displays them over the browser.
Additionally, it should read from the browser and save into a text file
*/

var upgraderWebsocket = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}
var mx sync.Mutex
var message string
var clients = make(map[*websocket.Conn]bool)

func serveIndexPage(w http.ResponseWriter, r *http.Request) {
	templ, err := template.ParseFiles("index.html")
	if err != nil {
		http.Error(w, "Internal Server Error. Please check again!", http.StatusInternalServerError)
		return
	}
	err = templ.Execute(w, nil)
	if err != nil {
		log.Fatal(err)
		return
	}
}

func handleConnections(w http.ResponseWriter, r *http.Request) {
	upgraderWebsocket.CheckOrigin = func(r *http.Request) bool { return true }
	connection, err := upgraderWebsocket.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
		return
	}
	clients[connection] = true

	for {
		messageType, p, err := connection.ReadMessage()
		if err != nil {
			delete(clients, connection)
			connection.Close()
			break
		}
		message = string(p)
		for client := range clients {
			if err := client.WriteMessage(messageType, p); err != nil {
				delete(clients, connection)
				err := connection.Close()
				if err != nil {
					return
				}
				break
			}
		}
	}
}

func handleMessages(msg string) {
	for client := range clients {
		if err := client.WriteMessage(websocket.TextMessage, []byte(msg)); err != nil {
			log.Println(err)
			err := client.Close()
			if err != nil {
				return
			}
			delete(clients, client)
		}
	}
}

func savingTextHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "Must be POST method to save text", http.StatusMethodNotAllowed)
		return
	}
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "There is some error with reading request body", http.StatusInternalServerError)
		return
	}
	defer r.Body.Close()

	filename := "resultText.txt"
	err = ioutil.WriteFile(filename, body, 0644)
	if err != nil {
		http.Error(w, "There is some error with reading request body writing to file", http.StatusInternalServerError)
		return
	}
}

func main() {
	http.HandleFunc("/", serveIndexPage)
	http.HandleFunc("/ws", handleConnections)
	http.HandleFunc("/saveText", savingTextHandler)
	go func() {
		fmt.Println("The server address: http://localhost:8080")
		if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Println("There is some error with starting server", err)
		}
	}()

	scanner := bufio.NewScanner(os.Stdin)
	for scanner.Scan() {
		mx.Lock()
		message += scanner.Text() + "\n"
		mx.Unlock()
		handleMessages(message)
	}
}
