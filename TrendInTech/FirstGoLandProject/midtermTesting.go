package main

import (
	"fmt"
	"math"
	"math/big"
	"strings"
)

func main() {
	// question 1
	/*fmt.Print("Enter something: ")
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	input := new(string)
	*input = scanner.Text()
	reverseString(input)
	fmt.Print("\nThe reverse string from your input: ", *input)*/

	// Question 2
	/*fmt.Print("Enter how many term you want: ")
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	input := scanner.Text()
	num, err := strconv.Atoi(input)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	printingSequence(num - 1)*/

	// Question 3
	//rawArray := []int{2, 4, 29, 8, 32}
	//filterArray := detectPrime(rawArray)
	//fmt.Println(filterArray)

	//Question 5
	myQueue := NewQueue()
	myQueue.Enqueue(5)
	myQueue.Enqueue(6)
	myQueue.Enqueue(7)
	fmt.Println(myQueue)
	num := myQueue.Dequeue()
	fmt.Println(num)
	fmt.Println(myQueue)
	num = myQueue.Dequeue()
	fmt.Println(num)
	fmt.Println(myQueue)
	myQueue.Enqueue(10)
	myQueue.Enqueue(70)
	fmt.Println(myQueue)
}

func reverseString(str *string) {
	reversedString := ""
	for i := len(*str) - 1; i >= 0; i-- {
		reversedString += string((*str)[i])
	}
	*str = strings.ToLower(reversedString)
}
func printingSequence(x int) {
	if x > 0 {
		printingSequence(x - 1)
	}
	fmt.Printf("%.0f, ", math.Pow(2, float64(x)))
}

func detectPrime(rawArray []int) []bool {
	var arr []bool
	for _, num := range rawArray {
		if big.NewInt(int64(num)).ProbablyPrime(0) {
			// num is Prime
			arr = append(arr, true)
		} else {
			// not prime
			arr = append(arr, false)
		}
	}
	return arr
}

func isPrime(num int) {
	if num < 2 {
		fmt.Println("Number must be greater than 2.")
		return
	}
	sq_root := int(math.Sqrt(float64(num)))
	for i := 2; i <= sq_root; i++ {
		if num%i == 0 {
			fmt.Println("Non Prime Number")
			return
		}
	}
	fmt.Println("Prime Number")
	return
}

type MyQueue struct {
	Array []int
	Front int
	Rear  int
}

func NewQueue() *MyQueue {
	return &MyQueue{
		Array: []int{},
		Front: -1,
		Rear:  -1,
	}
}

func (myQueue *MyQueue) Enqueue(number int) {
	if myQueue.Rear == -1 && myQueue.Front == -1 {
		myQueue.Front++
	}
	myQueue.Rear++
	myQueue.Array = append(myQueue.Array, number)
}
func (myQueue *MyQueue) Dequeue() int {
	if len(myQueue.Array) == 0 {
		fmt.Println("Empty")
		return -1
	}
	item := myQueue.Array[myQueue.Front]
	myQueue.Array = myQueue.Array[1:]
	myQueue.Rear--
	if len(myQueue.Array) == 0 {
		myQueue.Front = -1
		myQueue.Rear = -1
	}
	return item
}
