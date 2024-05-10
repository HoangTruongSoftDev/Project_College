/*
	here, we want to see examples about using type in method definition
*/

package main

import "fmt"

type Circle struct { // this is our custom type
	Radius float64
}

// in below we define a value receiver method which calculate the area of a circle

func (c Circle) Area(value1 string) float64 {
	return 3.14 * c.Radius * c.Radius
}

func main() {
	myCircle := Circle{Radius: 4}
	area := myCircle.Area("Truong")
	fmt.Printf("Area of the circle is %.2f \n", area) // %.2f means having two digits after the floating point

	// %.2f means having two digits after the floating point
	// %d is a digit
	// %s is a string
	fmt.Printf("PI number is: %.2f and my favorite number is: %d and my name is: %s", 3.1415, 16, "Truong")
}
