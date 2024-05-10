package main

import (
	"fmt"
	"sync"
)

func main() {
	var wg = sync.WaitGroup{}
	ch := make(chan int, 50)
	ch1 := make(chan int, 50)
	ch2 := make(chan int, 50)
	wg.Add(2)
	go func(channel <-chan int) {
		for {
			select {
			case i := <-ch1:
				fmt.Println("Channel 1: ", i)
			case j := <-ch2:
				fmt.Println("Channel 2: ", j)
			default:
				break
			}
		}
		/*i := <-channel
		fmt.Println(i)*/

		/*for i := range channel {
			fmt.Println(i)
		}*/

		/*for {
			// the statement before semicolon ";" is initialization, and after it is if condition
			if i, ok := <-channel; ok {
				fmt.Println(i)
			} else {
				break
			}
		}*/

		wg.Done()
	}(ch)

	go func(channel chan<- int) {
		/*channel <- 42
		channel <- 42
		close(channel)*/
		ch1 <- 42
		close(ch1)
		ch2 <- 27
		close(ch2)
		wg.Done()
	}(ch)

	wg.Wait()
}
