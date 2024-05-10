/* (Make sure to check the example_8, example_10, example_9)
	Concurrency and Goroutines and Channels in GoLang:

		GoLang built-in support fir concurrency through goroutines and channels. Goroutines are lightweight
		thread, and channels allow communication and synchronization between them

See example below
*/

package main

import (
	"fmt"
	"time"
)

/*
	the below function which is named printNumbers() take a single parameter, which is a
channel (chan) of integers
	Note about line "c <- i": This line is called a communication channel.In fact, it sends the current value of i
								to the channel c. The arrow "<-" is used for sending data to a channel

Note for "time.Sleep(time.Millisecond * 500)": This line introduces a pause of 500 milliseconds
												equivalent to 0.5 seconds in each iteration of the loop
												using Sleep function from the time package. This sleep is added to make
												a temporary pause until the data is successfully transmitted to the channel
Note about "close(c)": after the loop completes, the close() function is called to close the channel c. Closing a channel
						is a signal to the receivers that no more data will be on the channel
*/

func printNumbers(c chan int) {
	for i := 0; i < 5; i++ {
		fmt.Println("c: ", c)
		c <- i
		time.Sleep(time.Millisecond * 500)
	}
	close(c)
}

func main() {
	myChannel := make(chan int) // make() function is the same as "new" in C# and Java
	/*
		In GoLang the "go" keyword is used to start (enforce) a new goroutine that executes a special function (such as the above printNumbers()) concurrently.
			printNumbers() is a concurrent function which is a function to make it easy to write programs that can efficiently perform concurrent and parallel processing.
			For example, when we're sending an image, we will read and send each chunk of the image instead of the whole image

		Let's break down the code:
			+ myChannel := make(chan int): this line creates an unbuffered channel of integers named myChannel. Channels are a way for goroutines to communicate and synchronize
			+ go printNumbers(myChannel): the "go" keyword is followed by a function call, "printNumbers()". This means that the printNumber() function will be executed concurrently in a new goroutine
				the myChannel passed as an argument to the printNumber() and prints numbers to the channel and then closes it after printing five numbers.
				In "go printNumbers(myChannel)" you are starting a new goroutine that will run concurrently with the rest of your program, printing numbers to the myChannel.
				This concurrent execution allows your program to perform other tasks while the printNumber() function is running in the background.
				The main function or any other concurrent code,  can then receive and process the numbers from the channel
	*/
	go printNumbers(myChannel) // since the function printNumbers() is a special function. (an example of )
	for num := range myChannel {
		fmt.Println(num)
	}

}
