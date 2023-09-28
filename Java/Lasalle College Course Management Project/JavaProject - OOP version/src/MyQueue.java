import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

// Circular Generic Queue
/**
 * [MyQueue description: The generic user-defined Queue]
 */
public class MyQueue<T>{
	
	int front;
	int rear;
	T[] array;
	int size;

	/**
	 * [MyQueue description: Construct the object of MyQueue]
	 * 
	 * @param Class<T> type
	 * 
	 */
	@SuppressWarnings("unchecked")
	public MyQueue(Class<T> type) {
		this.front = -1;
		this.rear = -1;
		// this.array = (T[]) new Object[20];
		this.array = (T[]) Array.newInstance(type, 20);
		this.size = 0;
	}
	
	/**
	 * [MyQueue description: Construct the object of MyQueue with the listOfObjects]
	 * 
	 * @param List<T> listOfObjects
	 * 
	 * @param Class<T> type
	 * 
	 */
	@SuppressWarnings("unchecked")
	public MyQueue(List<T> listOfObjects, Class<T>type) {
		front = -1;
		rear = -1;		
		array = (T[]) Array.newInstance(type, listOfObjects.size()*2);
		// this.array = (T[]) new Object[listOfObject.size() * 2];
		for (int i = 0; i < listOfObjects.size(); i++) {
			array[i] = listOfObjects.get(i);
		}
	}
	
	/**
	 * [resize description: resize the Queue]
	 *
	 * @return  void    [return description]
	 */
	public void resize() {
		T[] newArray = Arrays.copyOf(array, array.length*2);
		this.array = newArray;
	}
	/**
	 * [enqueue description: adding the element into the queue]
	 *
	 * @param T element
	 * 
	 * @return  void    [return description]
	 */
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

	/**
	 * [dequeue description: remove the first element of the Queue]
	 *
	 * @return  T    [return description]
	 */
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
	
	/**
	 * [displayAllElement description: display all the elements of the queue]
	 *
	 * @return  void    [return description]
	 */
	public void displayAllElement() {
		if (isEmpty()) {
			System.out.println("Empty Queue");
		}
		else {		
			System.out.println("Print Queue");
			
			int i = front;
            int count = 0;
            while (count < size) {
                System.out.print(array[i] + " ");
                i = (i + 1) % array.length;
                count++;
            }
            System.out.println();
		}
	}
	
	/**
	 * [isEmpty description: check is the queue is empty]
	 *
	 * @return  boolean [return description]
	 */
	public boolean isEmpty() {
		if (size == 0) {
			return true;
		}
		return false;
	}

	/**
	 * [isFull description: check is the queue is full]
	 *
	 * @return  boolean [return description]
	 */
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

	/**
	 * [getSize description: get the size of the Queue]
	 *
	 * @return  int     [return description]
	 */
	public int getSize() {
		return size;
	}


}
