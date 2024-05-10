package main

import (
	"fmt"
	"math/rand"
)

type Dict struct {
	Key   string
	Value string
}

func main() {
	predefinedQuiz := []Dict{
		{"What is the smallest prime number?", "2"},
		{"What is the square root of 16?", "4"},
		{Key: "Where is the capital of Canada?", Value: "Ottawa"},
		{"Who is the current prime minister of Canada?", "Justin Trudeau"},
		{"How many sides does a triangle have?", "3"},
	}
	playGame(&predefinedQuiz)
}
func getQuiz(quiz *[]Dict) Dict {
	if len(*quiz) > 0 {
		quizIndex := rand.Intn(len(*quiz))
		foundQuiz := (*quiz)[quizIndex]
		*quiz = append((*quiz)[:quizIndex], (*quiz)[quizIndex+1:]...)
		return foundQuiz
	}
	return Dict{"Null", "Null"}
}
func playGame(quiz *[]Dict) {
	score := 0
	totalQuiz := len(*quiz)
	for len(*quiz) > 0 {
		fmt.Println("\n=============================================\n")
		randomQuiz := getQuiz(quiz)

		fmt.Println(randomQuiz.Key)
		var guest string
		fmt.Print("Please enter the correct answer: ")
		_, err := fmt.Scanln(&guest)
		if err != nil {
			fmt.Println(err.Error())
			return
		}
		if randomQuiz.Value == guest {
			fmt.Println("\nCorrect!")
			score++
		} else {
			fmt.Println("\nThe correct answer is: ", randomQuiz.Value)
		}
		fmt.Println("\n=============================================\n")
	}
	fmt.Printf("Done! Your score is %d/%d", score, totalQuiz)
}
