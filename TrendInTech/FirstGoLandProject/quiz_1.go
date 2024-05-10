package main

import (
	"fmt"
)

/*
You are tasked with implementing a program that manages a list of students and their grades.
Each student entry in the list should include their name, student ID, and a pointer to their grade.
The grades should be stored as integers, and the program should allow users to add new students,
update their grades, and display the list of students along with their corresponding grades.
Additionally, implement a function that calculates and displays the average grade of all students
in the list. Ensure that the program utilizes pointers for storing and updating grades to demonstrate
understanding of pointer usage in GoLang. Students should focus on correctly declaring pointers,
updating values through pointers, and handling memory appropriately.
*/

type Student struct {
	StudentId int
	Name      string
	Grade     *int
}

func AddStudent(studentId int, name string, grade int, listOfStudents []Student) []Student {
	newStudent := Student{
		StudentId: studentId,
		Name:      name,
		Grade:     new(int),
	}
	*newStudent.Grade = grade
	listOfStudents = append(listOfStudents, newStudent)
	return listOfStudents
}
func ModifyStudent(studentId int, grade int, listOfStudents []Student) []Student {
	var check bool = false
	for i := 0; i < len(listOfStudents); i++ {
		if listOfStudents[i].StudentId == studentId {
			*listOfStudents[i].Grade = grade
			check = true
		}
	}
	if !check {
		fmt.Println("Student doesnt exist.")
	}
	return listOfStudents
}
func DisplayAllStudents(listOfStudents []Student) {
	for i := 0; i < len(listOfStudents); i++ {
		fmt.Printf("Student Name: %s and Their Grade: %d\n", listOfStudents[i].Name, *listOfStudents[i].Grade)
	}
}
func GetAverageGrade(listOfStudents []Student) float64 {
	var sum int = 0
	for i := 0; i < len(listOfStudents); i++ {
		sum += *listOfStudents[i].Grade
	}
	averageGrade := float64(sum) / float64(len(listOfStudents))
	return averageGrade

}
func main() {
	var listOfStudents []Student

	listOfStudents = AddStudent(1, "Truong", 10, listOfStudents)
	listOfStudents = AddStudent(2, "Thien", 20, listOfStudents)
	ModifyStudent(2, 30, listOfStudents)
	DisplayAllStudents(listOfStudents)
	var averageGrade float64 = GetAverageGrade(listOfStudents)
	fmt.Println(listOfStudents)
	fmt.Printf("Average Grade is: %.2f\n", averageGrade)
}
