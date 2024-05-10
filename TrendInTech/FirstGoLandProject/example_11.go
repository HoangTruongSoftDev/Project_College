/*
	In this example, we want to sort an array with pointers
*/

package main

import (
	"fmt"
	"sort"
)

// define a method for sort
func sortMyArray(array *[]int) {
	sort.Ints(*array)
}

func main() {
	array := []int{24, -9, 19, 0, 5, 18, 7}
	fmt.Println("Before sorting: ", array)
	//sortMyArray(&array)
	bubbleSort(&array)
	fmt.Println("After sorting: ", array)
}

/*
	Pointers are the most efficient component in all the programming languages which support it
	such as C, C++, GoLang. Unfortunately, C#, Java, Python, etc. Do not support it.
	This is because programmer often get confused with * and & operators, so they took pointer out of
	popular languages mentioned above

	It is impossible to develop an efficient code without pointers. In other words, no code
	is optimal if they do not use pointer
*/

// BubbleSort
func bubbleSort(array *[]int) {
	length := len(*array)
	for i := 0; i < length-1; i++ {
		for j := 0; j < length-i-1; j++ {
			if (*array)[j] > (*array)[j+1] {
				(*array)[j], (*array)[j+1] = (*array)[j+1], (*array)[j]
			}
		}
	}
}
