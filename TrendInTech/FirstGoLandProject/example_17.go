package main

import (
	"html/template"
	"io/ioutil"
	"net/http"
)

/*
	In this example, we want to read text from a text file and display it over the browser. Toward this
end,  we can modify the previous program to read the content of the file and pass it to the template.
See below
*/

// firstly, we define a PageData struct for representing data to be displayed in the template
type PageData1 struct {
	FileContent string
}

func main() {
	// read the context of the text file
	fileContent, err := ioutil.ReadFile("example.txt")
	if err != nil {
		panic(err)
	}
	//define the template content
	templateContent := `
	<!DOCTYPE html>
		<head>
			<title> File Content </title> 
		</head>
		<body>
			<h1>File Content</h1>
			<p>{{.FileContent}}</p>
		</body>
	</html>
`
	// create a new template and parse the template content
	templ, err := template.New("fileContent").Parse(templateContent)
	if err != nil {
		panic(err)
	}
	// handle requests to the root
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := templ.Execute(w, PageData1{FileContent: string(fileContent)})
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}
	})
	// start the http server on port 8080
	// if your code does not run on this port change another port
	http.ListenAndServe(":8080", nil)
}
