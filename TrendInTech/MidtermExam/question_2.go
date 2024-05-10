package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strconv"
)

/*
Hoang Truong Pham - 2130169

	Question #2 (75 Points):
		Write a function to print the following pattern:
		1, 2, 4, 8, 16, 32, 64, 128, 256, 512, ...
		(Hint: if 𝑛𝑛 is the input, then the output sequence is 2𝑛𝑛)
		At the very beginning, you should ask the user about how many terms should be printed. For example, if
		the user enters 4 then you should print: 1, 2, 4, 8
*/

func main() {
	fmt.Print("Enter amount of term you want: ")
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	input := scanner.Text()
	num, err := strconv.Atoi(input)
	if err != nil {
		fmt.Println("The error is: ", err)
		return
	}
	printingSequence(num - 1)
}

func printingSequence(x int) {
	if x > 0 {
		printingSequence(x - 1)
	}
	fmt.Printf("%.0f, ", math.Pow(2, float64(x)))
}
