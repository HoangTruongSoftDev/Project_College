// Implement a code in GoLang and make two browsers communicate together using nt/http protocol. Please
// note that we have implemented similar thing before.
// Also communication between browsers means they can send message to each other.

//package main
//
//import (
//	"github.com/gorilla/websocket"
//	"log"
//	"net/http"
//)
//
//var websocketUpgrader = websocket.Upgrader{
//	CheckOrigin: func(request *http.Request) bool {
//		return true
//	},
//}
//
//var listOfClients = make(map[*websocket.Conn]bool)
//var broadcast = make(chan string)
//
//func handleConnections(w http.ResponseWriter, r *http.Request) {
//	connection, errorOccur := websocketUpgrader.Upgrade(w, r, nil)
//	if errorOccur != nil {
//		log.Fatal(errorOccur)
//		return
//	}
//	defer connection.Close()
//
//	listOfClients[connection] = true
//
//	for {
//		message, errorOccur := readMessage(connection)
//		if errorOccur != nil {
//			delete(listOfClients, connection)
//			break
//		}
//		broadcast <- message
//	}
//}
//
//func handleMessages() {
//	for {
//		message := <-broadcast
//
//		for currentClient := range listOfClients {
//			errorOccur := writeMessage(currentClient, message)
//			if errorOccur != nil {
//				currentClient.Close()
//				delete(listOfClients, currentClient)
//			}
//		}
//	}
//}
//
//func readMessage(conn *websocket.Conn) (string, error) {
//	_, p, errorOccur := conn.ReadMessage()
//	if errorOccur != nil {
//		return "", errorOccur
//	}
//	return string(p), nil
//}
//
//func writeMessage(connection *websocket.Conn, message string) error {
//	errorOccur := connection.WriteMessage(websocket.TextMessage, []byte(message))
//	return errorOccur
//}
//
//func main() {
//	go handleMessages()
//
//	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
//		http.ServeFile(writer, request, "index.html")
//	})
//	http.HandleFunc("/ws", handleConnections)
//	log.Fatal(http.ListenAndServe(":8080", nil))
//}
