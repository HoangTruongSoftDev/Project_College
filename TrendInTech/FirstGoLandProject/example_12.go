package main

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"net/http"
)

/*
We have learned principle of GoLang including method, struct, instantiation, pointer. (recall than Golang does not have class)
Now we will do one of the important application of this language, which is API development

Step 1: Install a web platform for GoLang

Put in the terminal: "go get github.com/gorilla/mux"

Step 2: is writing the below code for API dev
*/
type Task struct {
	ID    string `json:"id"`
	Title string `json:"Title"` // the format of json is used mainly for avoiding compatibility issues
	// in web. All the web plugins correspond to this format and it is safe
}

// in-memory store for tasks (we might want to use database in a real-world scenario)
// often database which are compatible with golang are non-relational such as MongoDB
// we will cover it in the upcoming weeks
// for now a simple array
var tasks []Task

// now we define a GetTaskHandler function to return the list of the tasks
func GetTasksHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

// here we define another function as CreateTaskHandler to add a new task to the list
func CreateTaskHandler(w http.ResponseWriter, r *http.Request) {
	var newTask Task
	_ = json.NewDecoder(r.Body).Decode(&newTask)
	tasks = append(tasks, newTask)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(newTask)
}
func main() {
	tasks = append(tasks, Task{ID: "1", Title: "Task 1"})
	tasks = append(tasks, Task{ID: "2", Title: "Task 2"})
	// we create a new router
	router := mux.NewRouter()
	//defining routes
	router.HandleFunc("/tasks", GetTasksHandler).Methods("GET")
	router.HandleFunc("/tasks", CreateTaskHandler).Methods("POST")

	http.ListenAndServe(":8080", router) // can be used port 8888
}

// open web browser and search : "http://localhost:8080/tasks"

/*
	In the above code we have defined the task but have not assigned any value to it.
So when we run it on the localhost, it shows null. The fact is that the "tasks" slice is initially empty
and when we access http://localhost:8080/tasks, it returns an empty JSON array ([]). To verify that
our API is working correctly, we can use a tool like "curl" or postman to make a POST request to add
a task and then check for tasks again.

here's how we use curl in golang (the same thing in all other web dev tools)
 Type in terminal:

curl -x POST -H "Content-Type: application/json" -d '{"id": "1", "title": "Simple Task"}' http://localhost:8080/tasks


*/
