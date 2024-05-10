package main

import (
	"html/template"
	"net/http"
)

// update example_16.go and make it possible to define multiple users and display them in table over the browser
type UserDB struct {
	UserName string
	Email    string
}

func main() {
	// define the template content
	templateContent := `
	<!DOCTYPE html>
	<head>
		<Title> User Profile with table</Title>
		<style>
			table {
				margin: 0 auto
			}
		</style>
	</head>
	<body>
		<h1> User Profile</h1>
		<table border="1">
			<tr>
				<th> Username</th>
				<th> Email</th>
			</tr>
			{{range .Users}}
			<tr>
				<td>{{.UserName}}</td>
				<td>{{.Email}}</td>
			</tr>
			{{end}}
			</table>
		</body>
	</html>
`
	// create a new template and parse the template content
	templ, err := template.New("UserProfile").Parse(templateContent)
	if err != nil {
		panic(err)
	}
	// create user data with multiple users
	users := []UserDB{
		{
			UserName: "Truong",
			Email:    "truong@gmail.com",
		},
		{
			UserName: "Thien",
			Email:    "thien@gmail.com",
		},
		{
			UserName: "Khoa",
			Email:    "khoa@gmail.com",
		},
		// we can add more objects here
	}
	// handle requests to the root path
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// pass the user slice to the template
		err := templ.Execute(w, struct{ Users []UserDB }{Users: users})
		if err != nil {
			http.Error(w, "Internal Server Error:", http.StatusInternalServerError)
			return
		}

	})
	// start the http server on port 8080 or any available port on your machine
	http.ListenAndServe(":8080", nil)
}
