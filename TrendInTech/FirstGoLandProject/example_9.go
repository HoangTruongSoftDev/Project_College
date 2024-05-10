/* (Make sure to check the example_8, example_7, example_10)
In the previous example, we talked about waitGroup, concurrency, and channel but it is
not finished. So in this examplem we'll review the concept of pointers in golang, then we'll
revisit the previous concepts about concurrency and waitGroup

The concept of pointer in GoLang is exactly the same as C++ . In fact, pointers in GO are
inherited from C++ compilers (such as gcc and g++).
*/

package main

import "fmt"

/*
	In golang, a pointer is a variable that stored a memory address of another variable. It points
	to the memory location where the actual value is stored. Pointers allow us to indirectly access
	and modify the value of a variable by referring to its memory address. Here are some key concepts related to pointers:

	1. Declaring pointer:
		To declare a pointer, we use * symbol followed by the type of the variable it will point to
	2. Referencing pointers:
		The & operator is used to get the memory address of a variable
		Quick note:
			2a. * for getting or setting the value of a pointer
			2b. & for getting or setting the address of a pointer
	3. Dereferencing (getting the value):
		The * operator is used to dereference a pointer which means obtaining the value stored at the
		memory address pointed to by the pointer
	4. Null pointers:
		GoLang has a nil value (the same as null in Java) that represents a null pointer.
		A pointer is nil if it does not poiint to any memory address
	5. new() Function:
		The new function allocates memory for a variable and returns a pointer to that memory.
		The allocated memory is initialized to zero
	6. Pointers as function parameters:
		Pointers are often used as parameters to functions to allow the function to modify the original value
*/

func main() {
	var x int = 1 // This is declaring an integer variable without pointer. This is example for Declaring pointers
	var ptr *int  // declaring a pointer to an integer
	ptr = &x      // Assign the address of x to pointer ptr. This is example for Referencing pointers

	//fmt.Println(*ptr)
	//pointerANdFuncParam(ptr)

	*ptr = 100
	fmt.Println(*ptr)
	changingPointerValue(ptr)
	fmt.Println(*ptr)
}

// Example for Dereferencing
func dereferencingFunc() {
	var x int
	var ptr *int
	ptr = &x
	*ptr = 42 // set the value at the memory address pointed by ptr to 42
	fmt.Println(*ptr)
}

// Example for Null pointers:
func nullPointer() {
	var ptr *int
	if ptr == nil {
		fmt.Println("Pointer is nil")
	}
}

// Example for new() Function
func newFunc() {
	ptr := new(int) // this allocates memory for int, ptr points to it
	*ptr = 10
	fmt.Println(ptr)
}

// Example for Pointers as function parameters:
func pointerANdFuncParam(x *int) {
	*x /= 2

	// how to use (place the line 72 and 73 below in main() function to use it)
	var num = 5
	pointerANdFuncParam(&num)

}

func changingPointerValue(x *int) {
	*x = 10
}
