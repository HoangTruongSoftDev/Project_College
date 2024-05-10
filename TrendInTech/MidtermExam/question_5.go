package main

import "fmt"

/*

Hoang Truong Pham - 2130169

	Question #5 (60 Points):
Implement the queue data structure with employing one array and two pointers only. Your implementation
should include Enqueue() and Dequeue() operations. The first is for adding an item into the queue and
the second one is for removing from the queue.
Hint: A queue is a linear data structure that follows the First-In-First-Out (FIFO) principle, where elements
are added at the rear (enqueue) and removed from the front (dequeue). This ensures that the oldest
element in the queue is the first one to be processed. It operates like a real-world queue or line, where
the first person to join is the first to be served.
*/

func main() {
	//Question 5
	myQueue := NewQueue()
	myQueue.Dequeue()
	myQueue.Enqueue(16)
	myQueue.Enqueue(30)
	myQueue.Enqueue(793)
	fmt.Println(myQueue.Array)
	num := myQueue.Dequeue()
	fmt.Println(num)
	fmt.Println(myQueue.Array)
	num = myQueue.Dequeue()
	fmt.Println(num)
	fmt.Println(myQueue.Array)
	myQueue.Enqueue(101)
	myQueue.Enqueue(70)
	fmt.Println(myQueue.Array)
}

type MyDefinedQueue struct {
	Array []int
	Front int
	Rear  int
}

func NewQueue() *MyDefinedQueue {
	return &MyDefinedQueue{
		Array: []int{},
		Front: -1,
		Rear:  -1,
	}
}

func (myQueue *MyDefinedQueue) Enqueue(addedNum int) {
	if myQueue.Rear == -1 && myQueue.Front == -1 {
		myQueue.Front++
	}
	myQueue.Rear++
	myQueue.Array = append(myQueue.Array, addedNum)
}
func (myQueue *MyDefinedQueue) Dequeue() int {
	if len(myQueue.Array) == 0 {
		fmt.Println("The Queue is Empty. Please add number first")
		return -1
	}
	item := myQueue.Array[myQueue.Front]
	myQueue.Array = myQueue.Array[1:]
	myQueue.Rear--
	if len(myQueue.Array) == 0 {
		myQueue.Front = -1
		myQueue.Rear = -1
	}
	return item
}
