package project;

import java.util.List;

public class PriorityQueue<T extends Comparable<T>> extends MyQueue<T> {

	@SuppressWarnings("unchecked")
	public PriorityQueue() {
		super((Class<T>) Comparable.class);
	}

	@SuppressWarnings("unchecked")
	public PriorityQueue(List<T> listOfObject) {
		super(listOfObject, (Class<T>) Comparable.class);
	}

	@Override
	public void enqueue(T element) {
		if (isFull()) {
			resize();
		}

		if (front == -1) {
			front++;
			rear++;
		} else {
			rear = (rear + 1) % array.length;
		}
		array[rear] = element;
		size++;
		for (int i = 0; i < size; i++) {
			for (int k = i; k > 0; k--) {
				if (array[k].compareTo(array[k - 1]) > 0) {
					T temp = array[k];
					array[k] = array[k - 1];
					array[k - 1] = temp;
				}
			}
		}
	}

	public void displayHigherPriorityElements(T element) {

		for (T currentElement : array) {
			
			if (currentElement.compareTo(element) > 0) {

				System.out.println(currentElement);

			}
		}
	}

	public void displayLowerPriorityElements(T element) {

		for (T currentElement : array) {

			if (currentElement.compareTo(element) < 0) {

				System.out.println(currentElement);

			}
		}
	}

}
