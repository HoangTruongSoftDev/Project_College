package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

/*

Hoang Truong Pham - 2130169

	Question #1 (60 Points):
	Implement a code to reverse a string. For example, if the input is “King” then the output should be “gnik”.
	Moreover, you should read the input string from console. Use pointers.
*/

func main() {
	fmt.Print("Enter a string: ")
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	input := new(string)
	*input = scanner.Text()
	reverseString(input)
	fmt.Print("\nThe reverse string from your input: ", *input)
}

func reverseString(str *string) {
	reversedString := ""
	for i := len(*str) - 1; i >= 0; i-- {
		reversedString += string((*str)[i])
	}
	*str = strings.ToLower(reversedString)
}
