/*
In this example we learn that it is possible to define a struct without using type
*/

package main

import "fmt"

func main() {
	persson := struct {
		Name string
		Age  int
		// we can define struct in another struct
		Address struct {
			City    string
			Country string
		}
	}{
		Name: "Truong",
		Age:  21,
		Address: struct {
			City    string
			Country string
		}{City: "Montreal", Country: "Canada"},
	}
	fmt.Printf("Name : %s\t", persson.Name)
	fmt.Printf("Age : %d\t", persson.Age)
	fmt.Printf("City : %s\t", persson.Address.City)
	fmt.Printf("Country : %s\t", persson.Address.Country)
}
