package main

import (
	"encoding/json"
	"fmt"
	"github.com/PuerkitoBio/goquery"
	"github.com/gorilla/mux"
	"log"
	"net/http"
	"strings"
)

/*
	In this example, we'll develop an API enables us to connect to google and search through it

Therefore you can integrate this API into any of your applications and make it possible to do some
search without opening any browser (it is possible to run it with/without browser) Our focus here is
running with or without browser, but it is learning to develop such APIs which can work in real time
and for any projects
*/

// Writing in the terminal "go get -u github.com/PuerkitoBio/goquery" to download

// here we implement a struct for SearchResult that represents a single search result
type SearchResult struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	URL         string `json:"URL"`
}
type SearchResponse struct {
	Results []SearchResult `json:"results"`
}

// here we define a function for search in google
func searchGoogle(query string) ([]SearchResult, error) {
	// construct the google URL
	searchURL := fmt.Sprintf("https://www.google.com/search?q=%s", strings.ReplaceAll(query, " ", "+"))
	// fetch the google page
	doc, err := goquery.NewDocument(searchURL)
	if err != nil {
		return nil, err
	}
	// here we extract search results
	var results []SearchResult
	doc.Find(".tF2Cxc").Each(func(i int, s *goquery.Selection) {
		title := s.Find(".BVGONb").Text()
		description := s.Find(".ac0pRe").Text()
		url, _ := s.Find(".BVGONb a").Attr("href")
		result := SearchResult{
			Title:       title,
			Description: description,
			URL:         url,
		}
		results = append(results, result)
	})
	return results, nil
}

// here we write a method called SearchHandler
func searchHandler(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	if query == "" {
		http.Error(w, "Missing 'q' parameter", http.StatusBadRequest)
		return
	}
	apiKey := "Ao5w1lRzTyuTQMAYQxetAe0x5xubl7S802BWRkJwR5JrSytV_0w_9akpaS5qlJcY"
	results, err := searchGoogle(query)
	if err != nil {
		log.Printf("Error searching Google: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}
	response := SearchResponse{Results: results}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}
func main() {
	router := mux.NewRouter()
	router.HandleFunc("/search", searchHandler).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}

// run and open the address: "http://localhost:8080/search?q=tell+me+about+Montreal"
