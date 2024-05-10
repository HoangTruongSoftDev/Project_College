package main

import (
	"html/template"
	"io"
	"net/http"
	"os"
)

type PageData2 struct {
	Message string
}

func main() {
	templateContent := `
    <!DOCTYPE html>
    <html>
    <head>
       <title>Save Text to File</title>
    </head>
    <body>
       <h1>Save REserve Text to File</h1>
       <form action="/" method="post">
          <textarea name="text" rows="10" cols="50"></textarea><br>
          <input type="submit" value="Save">
          <p>{{.Message}}</p>
       </form>
    </body>
    </html>
    `

	tmpl1, err := template.New("FileContent").Parse(templateContent)
	if err != nil {
		panic(err)
	}

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {

			body, err := io.ReadAll(r.Body)
			if err != nil {
				http.Error(w, "Failed to read request body", http.StatusInternalServerError)
				return
			}

			err = os.WriteFile("testing.txt", body, 0644)
			if err != nil {
				http.Error(w, "Failed to write to file", http.StatusInternalServerError)
				return
			}

			data := PageData2{Message: "Text data saved successfully!"}

			err = tmpl1.Execute(w, data)
			if err != nil {
				http.Error(w, "Failed to execute template", http.StatusInternalServerError)
				return
			}
			return
		}

		w.Header().Set("Content-Type", "text/html")
		err := tmpl1.Execute(w, PageData2{})
		if err != nil {
			http.Error(w, "Failed to execute template", http.StatusInternalServerError)
			return
		}
	})

	http.ListenAndServe(":8080", nil)
}
