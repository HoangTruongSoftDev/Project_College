package project;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

// Circular Generic Queue
public class MyQueue<T>{
	
	int front;
	int rear;
	T[] array;
	int size;

	@SuppressWarnings("unchecked")
	public MyQueue(Class<T> type) {
		this.front = -1;
		this.rear = -1;
		// this.array = (T[]) new Object[20];
		this.array = (T[]) Array.newInstance(type, 20);
		this.size = 0;
	}
	
	@SuppressWarnings("unchecked")
	public MyQueue(List<T> listOfObject, Class<T>type) {
		front = -1;
		rear = -1;		
		array = (T[]) Array.newInstance(type, listOfObject.size()*2);
		// this.array = (T[]) new Object[listOfObject.size() * 2];
		for (int i = 0; i < listOfObject.size(); i++) {
			array[i] = listOfObject.get(i);
		}
	}
	
	public void resize() {
		T[] newArray = Arrays.copyOf(array, array.length*2);
		this.array = newArray;
	}
	
	public void enqueue(T element) {
		if (isFull()) {
			resize();
		}
		if (front == -1) {
			front += 1;
			rear += 1;
		}
		else {
			rear = (rear+1)%array.length;
		}		
		array[rear] = element;
		size += 1;
	}
	public T dequeue() {
		if (isEmpty()) {
			System.out.println("The Queue is empty");
			return null;
		}
		else {
			T element = array[front];
			if (front != rear) {
				front = (front + 1)%array.length;
			}
			else {
				front = rear = -1;
			}
			size--;
			return element;
		}
	}
	
	public void displayAllElement() {
		if (isEmpty()) {
			System.out.println("Empty Queue");
		}
		else {		
			System.out.println("Print Queue");
			for (int i = front; i <= rear; i++) {
				System.out.print(array[i] + " ");
			}
		}
	}
	
	public boolean isEmpty() {
		if (size == 0) {
			return true;
		}
		return false;
	}
	public boolean isFull() {
		if ( front == 0 && rear == array.length - 1) {
			return true;
		}
		else if (front == rear + 1)
		{
			return true;
		}
		return false;
	}
	public int getSize() {
		return size;
	}


}
