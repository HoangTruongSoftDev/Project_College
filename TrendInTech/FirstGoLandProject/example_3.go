/*
	In this example we will implement the sorting function without using built-in sort method
	We want to use func and struct
*/

package main

import (
	"fmt"
	"sort"
)

// Person below is the struct definition
type Person struct {
	Name string
	Age  int
}

// below we implement an array of struct

type ByAge []Person

// This function returns an integer value, note that return type is added after the name of the method not before it
// In Java, C#, and others languages we always mention the return type before the name of the method

func (a ByAge) Len() int {
	return len(a)
}

// This method is void and it does not return anything. However, no need to mention "void"
// (i, j int) parameter after the function named Swap is the index of the array.
// (a ByAge) parameter before the function named Swap is the arguments to pass into the function as an input to process function

func (a ByAge) Swap(i, j int) {
	a[i], a[j] = a[j], a[i]
}

// This method returns a boolean value

func (a ByAge) Less(i, j int) bool {
	return a[i].Age < a[j].Age
}

/*
Note about func (a ByAge) Len() int:
  - Here, ByAge is a custom type defined as a slice of the Person struct.
    In GoLang you can define such a type for any list, array, dictionary, tree, etc.
    This gives us a huge flexibility to define any types we want.
  - Len method is a part of the sort. Interface and it's used to specify the length of the slice when sorting
  - (a ByAge) part is a receiver in a method declaration for the custom type.
    In Go,  a receiver is a parameter of a method that is declared with specific type.
    The receiver syntax allows us to associate a method with particular type.
    If you look at above in line 14 of my code, you will notice that ByAGe is defined over there and of course you can change the name to anything you want
*/

type StringType string

func main() {
	// here we define a slice of Person
	people := []Person{
		{"Alexandros", 24},
		{"Truong", 21},
		{"Thien", 23},
	}
	// now we use the sort.Sort function with custom sorting logic implemented above.
	// there is a built-in method named Sort and this function combines some functions like Less, Swap, Len (Those are built-in functions also).
	//However, we also define those function above, so in this case our code has higher priority than the built-in functions
	sort.Sort(ByAge(people))
	fmt.Println(people)

	var num1 int
	var num2 int

	num1 = 1
	num2 = 2
	fmt.Println("num1: ", num1)
	fmt.Println("num2: ", num2)
	num1, num2 = swap2Nums(num1, num2)
	fmt.Println("num1: ", num1)
	fmt.Println("num2: ", num2)

	fmt.Println("===========================")
	var truong ByAge
	truong = people
	fmt.Println(truong)
	truong.Swap(0, 1)
	fmt.Println(truong)
	fmt.Println("===========================")
	var customTypeString StringType = "Truong"
	fmt.Println(customTypeString)
	fmt.Println("===========================")
	var customTypeEmployee MyEmployee = MyEmployee{
		1, "Truong",
	}
	fmt.Println(customTypeEmployee)

	var emp Employee = Employee{
		1,
		"Truong",
	}
	fmt.Println(emp)
}

/*
	In above code we had a minor problem so we made a correction to the 'sort.Sort' line, passing 'ByAge(people)' instead of 'ByAge{people}'. This ensures that the people slice is converted to 'ByAge' type for sorting
*/

type Employee struct {
	Id   int
	Name string
}
type MyEmployee Employee

func (emp Employee) getName() string {
	return emp.Name
}

func (emp Employee) searchEmployee(searchId int, listEmp []Employee) *Employee {
	for i := 0; i < len(listEmp); i++ {
		if listEmp[i].Id == searchId {
			return &listEmp[i]
		}
	}
	return nil
}

func swap2Nums(a, b int) (x, y int) {
	x = b
	y = a
	return
}

func displayName(myName string) {
	fmt.Println(myName)
}
