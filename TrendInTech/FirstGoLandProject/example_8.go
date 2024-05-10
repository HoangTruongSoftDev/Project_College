/* (Make sure to check the example_10, example_7, example_9)
Goroutines are a key concurrency feature ingo, They are lightweight threads managed by the go runtime,
allowing concurrent execution of functions. Goroutines make it easy to write concurrent programs without the complexities of the traditional threading such as threading in Java

See another example below
*/

package main

import (
	"fmt"
	"sync"
)

/*
	The below function printMessage() takes 2 parameters. The first parameter is in fact a string name message
	and the second parameter is a sync.WaitGroup named wg.

	Explanation for WaitGroup:
		a sync.WaitGroup in GoLang is a synchronization primitive used to wait for a collection of
		goroutines to finish their execution. It helps coordinate and synchronize concurrent operations by allowing one routine
		to wait for a group of other goroutines to complete their work before proceeding

		The sync.WaitGroup provides three main methods:
			1. Add(delta int): adds delta to the waitGroup counter. The delta can be positive
								or negative integer value. When a goroutine starts, it typically
								increments the counter with the Add(1) and when it finishes, it decrements the counter with Done()
			2. Done(): decrements the waitGroup counter by 1. It is usually deferred in the goroutine to ensure that it gets decremented even in the presence of error
			3. Wait(): Blocks the calling goroutine until the waitGroup counter becomes zero. This is typically
						called in the main goroutine or any other goroutine that needs to wait for the completion of
						a group of goroutines.
	The line defer wg.Done():
		+ The "defer" statement is used to schedule the wg.Done() function to be executed when surrounding function(i.e, printMessage() in this case) returns.
			wg.Done() decrements the counter of the waiGroup(wg) by 1
		+ The "defer" statement ensures that wgDone() is called even if error occurs or an early return happen with in the function

		Since sync.WaitGroup is passed by value, each call to printMessage() gets its own copy of the waitGroup. Therefore deferred wg.Done() call operates on a copy of the waitGroup

*/

func printMessage(message string, wg sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(message)
}

func main() {

}
