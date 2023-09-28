import java.util.List;

/**
 * [MyPriorityQueue description: The generic user-defined PriorityQueue extends MyQueue<T>]
 * 
 */
public class MyPriorityQueue<T extends Comparable<T>> extends MyQueue<T> {

	/**
	 * [MyPriorityQueue description: Construct the object of MyPriorityQueue]
	 */

	@SuppressWarnings("unchecked")
	public MyPriorityQueue() {
		super((Class<T>) Comparable.class);
	}

	/**
	 * [MyPriorityQueue description: Construct the object of MyPriorityQueue with the listOfObjects]
	 * 
	 * @param List<T> listOfObject
	 * 
	 */
	@SuppressWarnings("unchecked")
	public MyPriorityQueue(List<T> listOfObject) {
		super(listOfObject, (Class<T>) Comparable.class);
	}

	/**
	 * [description: Adding the element in the priority queue by comparing the T object]
	 * 
	 * @param T element
	 * 
	 * @return void
	 */
	 
	@Override
	public void enqueue(T element) {
		// if (isFull()) {
		// 	resize();
		// }

		// if (front == -1) {
		// 	front++;
		// 	rear++;
		// } else {
		// 	rear = (rear + 1) % array.length;
		// }
		// array[rear] = element;
		// size++;
		super.enqueue(element);
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

	/**
	 * [displayHigherPriorityElements description: display the higher priority elements compare to the passed arguments ]
	 *
	 * @param T element
	 * 
	 * @return  void    [return description]
	 */
	public void displayHigherPriorityElements(T element) {

		for (T currentElement : array) {
			
			if (currentElement.compareTo(element) > 0) {

				System.out.println(currentElement);

			}
		}
	}

	/**
	 * [displayLowerPriorityElements description: display the lower priority elements compare to the passed arguments ]
	 *
	 * @return  void    [return description]
	 */
	public void displayLowerPriorityElements(T element) {

		for (T currentElement : array) {

			if (currentElement.compareTo(element) < 0) {

				System.out.println(currentElement);

			}
		}
	}

}
