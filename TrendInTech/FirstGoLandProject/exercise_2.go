package main

import "fmt"

/*
Your task: define two variables with pointers and swap their values.
For example if you have save 10 into the first variable and 48 into second,
finally, 48 should be the value of your first variable
and 10 be the second.
*/

func swapValues(x, y *int) {
	temp := *x
	*x = *y
	*y = temp
}

func main() {
	//var x int = 10
	//var y int = 48
	//ptr := new(int)
	//fmt.Println("Before Swap:")
	//fmt.Println("X: ", x)
	//fmt.Println("Y: ", y)
	//
	//*ptr = x
	//x = y
	//y = *ptr
	//
	//fmt.Println("After Swap:")
	//fmt.Println("X: ", x)
	//fmt.Println("Y: ", y)

	var x, y int
	x = 10
	y = 48
	fmt.Printf("Before Swap: x and y are %d, %d", x, y)
	swapValues(&x, &y)
	fmt.Printf("\nAfter Swap: x and y are %d, %d", x, y)

}
