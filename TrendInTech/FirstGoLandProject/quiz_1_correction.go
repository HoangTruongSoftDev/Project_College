package main

import "fmt"

type Student struct {
	StudentId int
	Name      string
	Grade     *int
}

func addStudent(students *[]Student, name string, studentId int, grade int) {
	newStudent := Student{
		StudentId: studentId,
		Name:      name,
		Grade:     &grade,
	}
	*students = append(*students, newStudent)
}
func updateGrade(student *Student, newGrade int) {
	(*student.Grade) = newGrade
}
func displayStudents(students []Student) {
	fmt.Println("List Of Student:")
	for _, s := range students {
		fmt.Printf("Name: %s,StudentID: %d, Grade: %d\n", s.Name, s.StudentId, *(s.Grade))
	}
}
func calculateAverageGrade(students []Student) {
	totalGrade := 0
	for _, s := range students {
		totalGrade += *(s.Grade)
	}
	averageGrade := float64((totalGrade)) / float64(len(students))
	fmt.Printf("Average Grade: %.2f\n", averageGrade)
}
func main() {
	var students []Student
	addStudent(&students, "Truong", 1, 10)
	addStudent(&students, "Thien", 2, 20)
	displayStudents(students)
	updateGrade(&students[0], 40)
	calculateAverageGrade(students)
}
