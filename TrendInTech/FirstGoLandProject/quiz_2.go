package main

import "fmt"

/*
	You should implement a stack with pointers and one array in golang. Toward this end, you should

define a struct for the stack that includes an array to store the elements and an integer to track
the top of the stack. Additionally, implement functions for stack operators, such as push and pop which
modify the stack's array and top pointer accordingly. The push operation increments the top pointer
and adds an element to the array, while the pop operation retrieves the element at the top and
decrements the top pointer. Ensure proper error handling to avoid stack overflow. The stack can then
be initialized, and operations can be performed to manage elements on the stack
*/
type Stack struct {
	Top *int
	//StackArray [100]int
	StackArray []int
	Max        int
}

func NewStack(max int) Stack {
	defaultTop := 0
	return Stack{
		Top:        &defaultTop,
		StackArray: make([]int, max),
		Max:        100,
	}
}
func (s Stack) Length() int {
	return *s.Top
}
func (s Stack) Push(number int) bool {
	if *s.Top > s.Max {
		fmt.Println("Stack Overflow")
		return false
	} else {
		s.StackArray[*s.Top] = number
		*s.Top += 1
		return true
	}

}
func (s Stack) Pop() int {
	if *s.Top <= 0 {
		fmt.Println("Stack Underflow")
		return -1
	}
	temp := s.StackArray[*s.Top-1]
	*s.Top -= 1
	return temp
}
func main() {
	var stackArray Stack = NewStack(10)
	stackArray.Push(10)
	stackArray.Length()
	stackArray.Push(11)
	stackArray.Push(12)
	stackArray.Push(13)
	fmt.Println(stackArray.StackArray)
	num1 := stackArray.Pop()
	fmt.Println(num1)
	num2 := stackArray.Pop()
	fmt.Println(num2)
	fmt.Println(stackArray.Length())
}
