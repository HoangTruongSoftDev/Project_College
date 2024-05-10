/*
We want to write a simple code for sorting an array in GoLang
*/

package main

import (
	"fmt"
	"sort"
)

func main() {
	numbers := []int{4, 15, -6, 8, 0, 10} // this is how we define array in GoLang
	// as you can see it is unique since no other programming language define array like above
	sort.Ints(numbers)
	fmt.Println(numbers)

	/*
		Four notes for GoLang:
			- If you define a variable and do not use it, you will get an error.
				In fact, you cannot define a useless array
			- Similar to Python there is no semicolon (;) at the end of your code
			- You do not need to manually enter the packages, just use the method you want and the SDK will automatically import the package for you
			- In GoLang, we do not have the = operator, we have := instead
	*/

	words := []string{"Apple", "Orange", "Banana", "Grape", "Kiwi"}
	sort.Strings(words)
	fmt.Println(words)
}
