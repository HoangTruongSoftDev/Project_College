/* (Make sure to check the example_8, example_7, example_9)
Here we practise some examples about pointers
*/

package main

import "fmt"

func modifyPointerValue() {
	var x int = 10
	var ptr *int = &x
	fmt.Println("Original value of x: ", x)
	*ptr = 46 // Here we copy x into the location where ptr is referring to
	fmt.Println("Modified value of x through pointer: ", x)
}
func newPointerValue() {
	ptr := new(int)
	*ptr = 25
	fmt.Println("Value stored at the pointer: ", *ptr)
	fmt.Println("Address of the pointer: ", ptr)
}
func main() {
	var x int = 59
	var ptr *int = &x
	/*
		The above code copies the address of x into ptr. Thus, ptr itself does not have 59, but
		the physical address of 59. Therefore, for getting the value which reside in the ptr, we
		should write *ptr
	*/
	fmt.Println("Value of x: ", x)
	fmt.Println("Address of x: ", &x)
	fmt.Println("Value stored at the pointer: ", *ptr)

	newPointerValue()
}
