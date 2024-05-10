/*
In this example, we've developed an API that connects to Bing and performs searches. This API can be integrated into any application, enabling searches without opening a browser. Our emphasis is on building real-time APIs for diverse projects.

Before running this code, ensure you've executed the following command to install the required package:
go get -u github.com/PuerkitoBio/goquery
*/

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

// SearchResult struct represents a single search result
type SearchResult1 struct {
	Title       string `json:"title"`
	Description string `json:"description"`
	URL         string `json:"URL"`
}

// SearchResponse struct represents the response containing search results
type SearchResponse1 struct {
	Results []SearchResult1 `json:"results"`
}

// searchBing function performs a search on Bing using the Bing Search API
func searchBing(query string, apiKey string) ([]SearchResult1, error) {
	// Construct the Bing Search API URL
	searchURL := fmt.Sprintf("https://api.cognitive.microsoft.com/bing/v7.0/search?q=%s", strings.ReplaceAll(query, " ", "+"))

	// Fetch the Bing Search API results
	req, err := http.NewRequest("GET", searchURL, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Ocp-Apim-Subscription-Key", apiKey)
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Extract search results
	var results []SearchResult1
	doc, err := goquery.NewDocumentFromReader(resp.Body)
	if err != nil {
		return nil, err
	}

	doc.Find(".b_algo").Each(func(i int, s *goquery.Selection) {
		title := s.Find("h2").Text()
		description := s.Find(".b_caption p").Text()
		url, _ := s.Find("a").Attr("href")

		result := SearchResult1{
			Title:       title,
			Description: description,
			URL:         url,
		}
		results = append(results, result)
	})

	return results, nil
}

// searchHandler method processes search requests
func searchHandler1(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")
	if query == "" {
		http.Error(w, "Missing 'q' parameter", http.StatusBadRequest)
		return
	}

	apiKey := "AnBOUffbNo8hAXcu-AuNoVeJzXsyD6FQg7qkEhf5CNVVHSnTaDi1ztPD0jT1ZFMVUH3xwxyCzPHTzZxt5" // Replace with your Bing Search API key

	results, err := searchBing(query, apiKey)
	if err != nil {
		log.Printf("Error searching Bing: %v", err)
		http.Error(w, "Internal server error", http.StatusInternalServerError)
		return
	}

	response := SearchResponse1{Results: results}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/search", searchHandler1).Methods("GET")
	log.Fatal(http.ListenAndServe(":8080", router))
}
