package main

import (
	"fmt"
	"math/big"
)

/*

Hoang Truong Pham - 2130169

	Question #3 (75 Points):
		Implement a code to read an array of integers and detect if they are prime or not. Remember that a prime
		number is only divisible by itself and one. If the input is [2, 4, 29, 8, 32] then the output should be [true,
		false, true, false, false].
*/

func main() {
	listOfIntegers := []int{2, 4, 29, 8, 32}
	filteredArray := detectPrime(listOfIntegers)
	fmt.Println(filteredArray)
}
func detectPrime(listOfIntegers []int) []bool {
	var filteredArray []bool
	for _, num := range listOfIntegers {
		if big.NewInt(int64(num)).ProbablyPrime(0) {
			filteredArray = append(filteredArray, true)
		} else {
			filteredArray = append(filteredArray, false)
		}
	}
	return filteredArray
}
