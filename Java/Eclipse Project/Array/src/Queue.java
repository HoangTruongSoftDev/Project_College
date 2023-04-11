import java.util.Arrays;

// linear QUeue
public class Queue {
	int front;
	int rear;
	int[] array;
	
	public Queue() {
		front = -1;
		rear = -1;
		this.array = new int[20];
	}
	
	public Queue(int capacity) {
		front = -1;
		rear = -1;
		this.array = new int[capacity];
	}
	
	public void resize() {
		int[] newArray = Arrays.copyOf(array, array.length*2);
		this.array = newArray;
	}
	
	public void enqueue(int num) {
		if (isFull()) {
			resize();
		}
		if (front == -1) {
			front += 1;
			rear += 1;			
		}
		else {
			rear += 1;
		}
		array[rear] = num;
	}
	public void dequeue() {
		if (front > rear) {
			System.out.println("The Queue is empty");
		}
		else {			
			front++;
		}
	}
	
	public void displayAllElement() {
		if (front > rear) {
			System.out.println("Empty Queue");
			System.out.println("rear: " + rear);
			System.out.println("front: " + front);
		}
		else {		
			System.out.println("Print Queue");
			for (int i = front; i <= rear; i++) {
				System.out.print(array[i] + " ");
			}
		}
	}
	
	public boolean isEmpty() {
		if (front > rear) {
			return true;
		}
		return false;
	}
	public boolean isFull() {
		if ((rear - front + 1) == array.length) {
			return true;
		}
		return false;
	}
	public int getSize() {
		return rear - front + 1;
	}
}
