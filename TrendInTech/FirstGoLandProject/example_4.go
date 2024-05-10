/*
	Here we want to see the different types of methods (functions) in GoLang
*/

package main

import "fmt"

// We can place the parameters before or after the function name. However, it is an advice to place parameters before the function name (Not sure check again???)

// Method with no arguments and no return (void)
func SayHello() {
	fmt.Println("Hellow, Lasalle")
}

// Method with arguments and return
func addition(value1, value2 int) int {
	result := value1 + value2 // := is used for defining and initializing the variable as the same time
	return result
}

// method with float arguments and multiple returns
func divide(nom, denom float64) (result float64, err error) {
	if denom == 0 {
		return 0, fmt.Errorf("Cannot divide by zero")
	}
	result = nom / denom // because result is already defined so we don't use ":" colon after =
	return result, nil   // nil means null or nothing
}

/*func main() {
	//SayHello()
	sum := addition(4, 2)
	fmt.Println("The sum is: ", sum)
	quotient, err := divide(10, 3)
	if err != nil {
		fmt.Println("Error: ", err)
	} else {
		fmt.Println("Quotient: ", quotient)
	}
}*/
