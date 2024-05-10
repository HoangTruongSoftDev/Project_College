package main

import (
	"html/template"
	"os"
)

/*
	In GoLang similar to JavaScript and other web development tools, we have an interesting package

called html/template which provides a way to generate HTML files by embedding dynamic data into
HTML templates. Templates helps separate the HTML layout from the code that generates dynamic content,
prompting cleaner code and better maintainability. Here's a brief overview of how to use
templates in GoLang

we are going to create a simple HTML template using html/template package. Please note that unlike
previous sessions, today we will integrate html code right inside the main method
*/

// we create a simple data structure to pass data to template
type PageData struct {
	Title   string
	Message string
}

func main() {
	// here we define the template content
	templateContent := `
	<!DOCTYPE html>
	<head>
		<title>{{.Title}}</title>	
	</head>
	<body>
		<h1>{{.Title}}</h1>
		<p>{{.Message}}</p>
	</body>
`
	// here we create a new template and parse the template content
	templ, err := template.New("example").Parse(templateContent)
	if err != nil {
		panic(err)
	}
	// create data to be passed to the template
	data := PageData{
		Title:   "Truong",
		Message: "Hello, I am Truong",
	}
	// Now we execute the template with the provided data and write the output
	err = templ.Execute(os.Stdout, data)
	if err != nil {
		panic(err)
	}
}

/*
	In the context of GoLang templates, {{.Title}} is a template action that represents the value
	of the Title field of the data structure passed to the template during execution. Let's break this down

the curly braces {} are used to denote the beginning and the end of the template action. Everything
inside these braces is considered part of a template action.

the dot represents the current data context. It refers to the data structure passed to the template
during execution

Title itself is the name of the field within the data structure. In above example, the data structure
is a PageData type which we defined above

When the template is executed, the template engine replaces {{.Title}} with the actual value of the
Title field from the provided data structure. For example, if we have a PageData instance with Title
set to "Truong",  the template engine will substitute {{.Title}} with "Truong" when
generating the HTML output
*/
