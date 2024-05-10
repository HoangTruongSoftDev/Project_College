package main

import (
	"fmt"
	"sync"
)

var wg = sync.WaitGroup{}
var counter = 0
var mutex1 = sync.RWMutex{}

func main() {

	/*	wg.Add(2)
		go func() {
			count("sheep")
			wg.Done()
		}()
		go func() {
			count("fish")
			wg.Done()
		}()
		wg.Wait()
		fmt.Println("Truong")*/

	for i := 0; i < 10; i++ {
		wg.Add(2)
		mutex1.RLock()
		go sayHello()
		mutex.Lock()
		go increment()
	}
	wg.Wait()
}

func sayHello() {
	fmt.Printf("Hello # %v \n", counter) // %v is placeholder of variable
	mutex1.RUnlock()
	wg.Done()
}

func increment() {
	counter++
	mutex.Unlock()
	wg.Done()
}

/*func count(name string) {
	for i := 0; i < 5; i++ {
		fmt.Println(name, i)
		time.Sleep(time.Second)
	}
}*/
