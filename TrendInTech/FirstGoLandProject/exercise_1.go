package main

import "fmt"

/*
Implement a method which detects the even numbers from an array of numbers.
please note that in this array there are all sorts of even and odd numbers,
but your task is to find even numbers...use struct
*/

type EvenNumber struct {
	Value int
}

func filterEvenNumber(array []int) []EvenNumber {
	var result []EvenNumber
	for i := 0; i < len(array); i++ {
		if array[i]%2 == 0 {
			result = append(result, EvenNumber{Value: array[i]})
		}
	}
	return result
}

func main() {
	evenArray := filterEvenNumber([]int{1, 2, 3, 4, 5, 6, 7, 8, 9})
	fmt.Print(evenArray)
}
