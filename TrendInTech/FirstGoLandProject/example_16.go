package main

import (
	"html/template"
	"net/http"
)

/*
	We are going to implement a simple similar to example_15, and define a struct with the name

UserData and it should include Username and email. We implement this task with opening the template
on the browser

Please recall that, to run this program on the browser, we need to create a simple HTM: server using
the package net/http
*/
type UserData struct {
	UserName string
	Email    string
}

func main() {
	// define the template content
	templateContent := `
	<!DOCTYPE html>
	<head>
		<Title> User Profile</Title>
	</head>
	<body>
		<h1> User Profile</h1>
		<p> Username: {{.UserName}}</p>
		<p> Email: {{.Email}}</p>
		</body>
	</html>
`
	// create a new template and parse the template content
	templ, err := template.New("userProfile").Parse(templateContent)
	if err != nil {
		panic(err)
	}
	// create user data tp be passed to the template
	user := UserData{
		UserName: "Truong",
		Email:    "hoangtruong@gmail.com",
	}
	// here we are going to deal with this package net/http to open the code over browser
	// Handle requests to the root URL ("/") and execute the template.
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := templ.Execute(w, user)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
	})
	// start the http server on port 8080
	// if your code does not run on this port change another port
	http.ListenAndServe(":8080", nil)
}
