import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;


public class TestArray {
	public static void main(String[] args) throws FileNotFoundException {
		// TODO Auto-generated method stub
		int[] array1 = {1,2,3};
		ArrayList<Integer> arrayList1 = new ArrayList<Integer>(Arrays.asList(1,2,3));
		System.out.println(arrayList1.get(2));
		ArrayList<Integer> arrayList2 = arrayList1;
		System.out.println(arrayList1 == arrayList2);
		
		String[] array2 = {"truong","hoang"};
		List<String> list1 = new ArrayList<String>();
		
		//Deep copy
		String[] array3 = Arrays.copyOf(array2,array2.length);
		System.out.println("array3 == array2: " + (array3==array2));
		System.out.println("array3.equals(array2): " + array3.equals(array2));
		System.out.println("array3[0].equals(array2[0]): " + array3[0].equals(array2[0]));
		System.out.println("array3[0] == array2[0]: " + (array3[0] == array2[0]));
		array3[0] = "Ngu";
		System.out.println("array2[0]: " + array2[0]);
		
		// Shallow copy
		String[] array4 = array3;
		for (int i=0; i<array3.length;i++) {
			System.out.print(array3[i]+" ");
		}
		for (String element : array4) {
			System.out.print(element+" ");
		}
		array4[1] = "Pham";
		System.out.println("\narray3[1]: "+ array3[1]);
		int[] array5 = {1,2,3,4,5};
		int[] array6 = {1,2,3,4,5};
		array5[0] = 0;
		System.out.println("array6[0]: " + array6[0]);
		
		String name = "hoang";
		System.out.println("name == array2[1]: " + (name == array2[1]));
		
		// Mrs. Michelle's code
		int[] nums = new int[5]; //syntax: datatype[] arr_name = new datatype[size];
		
		nums[0] = 11;
		nums[1] = 22;
		nums[2] = 33;
		nums[3] = 44;
		nums[4] = 55;
		
		System.out.println("nums.length: " + nums.length);
		System.out.println("for iteration: ");
		for(int i = 0; i<nums.length;i++){
			System.out.println(nums[i]);
		}
		System.out.println("foreach iteration: "); // using foreach if you just want to access the element not changing its value
		for (var elem:nums) {
			System.out.println(elem); //elem is a copy of each member of array for each iteration. elem = nums[i], and elem will be killed after the iteration
			elem *= 2;		
			System.out.println(elem);
		}
		
		System.out.println("After changing element: ");
		for (var elem:nums) {
			System.out.println(elem); // the value of elem in here will be different from above			
		}
		
		int a = 5;
		int b = a; //b and a will be independent and carry two different value of 5
		
		int[] nums1 = nums; //shallow copy
		System.out.println("nums1[0] == nums[0]" + (nums1[0] == nums[0])); 
		
		Integer[] nums2 = new Integer[5];
		nums2[0] = 11;
		
		System.out.println("nums2[0] == nums1[0]" + (nums2[0] == nums1[0]));
		
		nums1[0] = 100;
		System.out.println(nums[0]);
		System.out.println(nums2[0]);
		
		int[] nums3 = Arrays.copyOf(nums, nums.length+1); // it's deep copy, which creates a new array in a new memory space of heap that contains the members of array named nums, and has one more extra element
		nums3[nums3.length-1] = 66; // if we don't assign for the new extra element, it will carry value 0 for int, for boolean is false, and for char is empty character, for the wrapper class will be null
		nums[0] =111;
		
		System.out.println("Nums: ");
		for(var elem:nums) {
			System.out.println(elem);
		}
		
		System.out.println("Nums2: ");
		for(var elem:nums3) {
			System.out.println(elem);
		}
		
		String[] str1 = {"Truong", "hoang"};
		String[] str2 = Arrays.copyOf(str1, str1.length);
		str1[0] = "Pham";
		System.out.println("Str2[0]: " + str2[0]);
		
		
		
		nums[0] = 11;
		for (var elem:nums) {
			System.out.println(elem); // the value of elem in here will be different from above			
		}
		for (var elem:nums1) {
			System.out.println(elem); // the value of elem in here will be different from above			
		}
		for (var elem:nums2) {
			System.out.println(elem); // the value of elem in here will be different from above			
		}
		System.out.println(Arrays.binarySearch(nums,100));
		System.out.println(Arrays.binarySearch(nums1,30)); //the value of index 2 is 33, so the insertion point for 30 should be index 2 (to push 33 to index 3). Therefore the return is -(insertion point) -1 = -(2)-1 = -3
		//Arrays.binarySearch(nums2,66);
		
		String[] students1 = new String[3];
		//String[] students2 = Arrays.copyOf(students1, students1.length + 1);// it will print null if you iterate the loop because this is deep copy, it doesn't change when the array students1 change
		students1[0] = "Roland";
		students1[1] = "Donato";
		students1[2] = "Yuri";
		String[] students2 = Arrays.copyOf(students1, students1.length + 1);
		//find the space for an array of type string and length students1.length + 1;
		// iterate over the original array and copy each element into the new array
		// return the memory address of this array
		
		//to rezise students1
		int newLength = (int)students1.length*2;
		String[] temp = new String[newLength];
		for (int i = 0; i<students1.length;i++) {
			temp[i] = students1[i];
		}
		System.out.println("TEMP: \n");
		for (var elem:temp) {
			System.out.println(elem); 
		}
		students1 = temp;
		students2[students2.length-1]="Sakshi";
		for (var elem:students2) {
			System.out.println(elem); 
		}
		students1[1] = "Donata";
		System.out.println("Student1");
		for (var elem:students1) {
			System.out.println(elem); 
		}
		System.out.println("Student2");
		for (var elem:students2) {
			System.out.println(elem); 
		}
		StringBuilder[] students3 = new StringBuilder[3]; // Create a mutable object for array students1
		students3[0] = new StringBuilder("Riyaz");
		students3[1] = new StringBuilder("Yushuo");
		students3[2] = new StringBuilder("Luciano");
		StringBuilder[] students4 = Arrays.copyOf(students3, students3.length);
		//students3[2] = new StringBuilder("Luciana"); //This will create a new StringBuilder object on the heap
		students3[2] = students3[2].delete(0, students3[2].length()).append("Truong"); // it will affect to both arrays
		System.out.println("Students3: \n");
		for (var elem:students3) {
			System.out.println(elem);
		}
		System.out.println("Students4: \n");
		for (var elem:students4) {
			System.out.println(elem);
		}
		
		ArrayList myArrayList1 = new ArrayList(); //This allow to add any type of object
		myArrayList1.add(Integer.valueOf(15)); //adding iteger obeject
		myArrayList1.add("Riyaz"); // adding a string object
		myArrayList1.add(students4); //adding an array object
		
		ArrayList<String> myStringAL = new ArrayList<String>(30); // with this method, we can't add another type exvept for String type
		myStringAL.add("Riyaz");
		myStringAL.add("Sakshi");
		//myStringAL.add(15);
		
		//ArrayList<boolean> myIntAL = new ArrayList<>(); //doesn't work with primitive
		
		Integer anInt = 5; //autoboxing
		ArrayList<Integer> myArrayList = new ArrayList<Integer>(); //build an array of size 1p on the heap
		myArrayList.add(5); //autoboxing
		myArrayList.add(100);
		myArrayList.add(1000);
		System.out.println("myArrayList===============");
		for (var elem:myArrayList) {
			System.out.println(elem);
		}
		System.out.println("anInt == myArrayList.get(0) => " + (anInt == myArrayList.get(0)));
		System.out.println("anInt.equals(myArrayList.get(0)) => " + (anInt.equals(myArrayList.get(0))));

		
		Integer anInt2 = 255;
		myArrayList.add(255);
		System.out.println("anInt2 == myArrayList.get(1) => " + (anInt2 == myArrayList.get(1)));
		System.out.println("anInt2.equals(myArrayList.get(1)) => " + (anInt2.equals(myArrayList.get(1))));
		for (var elem:myArrayList) {
			System.out.println(elem);
		}
		ArrayList<Integer> myArrayList2 = new ArrayList<Integer>();
		myArrayList2.add(10);
		myArrayList2.add(20);
		myArrayList2.add(10);
		//int[] addList = {30,40,50,60};
		myArrayList2.addAll(1,myArrayList); //cannot add an array
		System.out.println("myArrayList2===============");
		for (var elem:myArrayList2) {
			System.out.println(elem);
		}
		ArrayList<Integer> myArrayList3 = (ArrayList<Integer>)myArrayList2.clone(); 
		System.out.println("myArrayList3===============");
		for (var elem:myArrayList3) {
			System.out.println(elem);
		}
		myArrayList3.clear();
		System.out.println("myArrayList3 After clear===============");
		for (var elem:myArrayList3) {
			System.out.println(elem);
		}
		System.out.println("myArrayList2.contains(100) => " + myArrayList2.contains(100));
		
		System.out.println("myArrayList2.indexOf(100) => " + myArrayList2.indexOf(100));
		System.out.println("myArrayList2.get(3) => " + myArrayList2.get(3));
		System.out.println("myArrayList2.isEmpty() => " + myArrayList2.isEmpty());
		System.out.println("myArrayList3.isEmpty() => " + myArrayList3.isEmpty());
		System.out.println("myArrayList2.size() => " + myArrayList2.size());
		System.out.println("myArrayList2.lastIndexOf(10) => " + myArrayList2.lastIndexOf(10));
		System.out.println("myArrayList2.remove(3) => " +myArrayList2.remove(3));
		
		ArrayList<Integer> arrayListDelete = new ArrayList<Integer>(30);
		arrayListDelete.add(255);
		arrayListDelete.add(10);
		System.out.println("myArrayList2.removeAll(arrayListDelete) => " +myArrayList2.removeAll(arrayListDelete));
		for (var elem:myArrayList2) {
			System.out.println(elem);
		}
		System.out.println("myArrayList2.size() => " +myArrayList2.size());
		myArrayList2.set(1,2000);
		for (var elem:myArrayList2) {
			System.out.println(elem);
		}
		
		ArrayList<Integer> testArrayList = new ArrayList<Integer>();
		testArrayList.add(10);
		//testArrayList.add(3,100); // you must add element in index 1 and 2 first before add index 3
		
		int[][] multiDimensionArray = new int[5][2]; //The first [] is rows, the second is column
		
		int[][] multiDimensionArray1 = new int[][] {
				{1,2},
				{3,4,5},
				{6,7,8,9,0}
				};
		System.out.println();
		int truong = 5<3?4:7; //ternary operator
		System.out.println(truong);
		
		Scanner sc = new Scanner(System.in); // we need to import java.util.Scanner;
		System.out.println("Please enter a num: ");
		System.out.println("You entered: " + sc.nextInt()); // sc.nextInt() will scan the next integer. The function is used to input the data and convert to Int
		
		System.out.println("Please enter your name: ");
		String name1 = sc.next();
		System.out.println("You entered: " + name1);
		
		System.out.println("My name is: " + System.in);
		
		sc = new Scanner(new File("C:\\Truong\\Lasalle College\\Winter 2023\\Advanced OOP\\Document\\readFileJava.txt")); // we need to import java.util.File;
		// also need throw FileNotFoundException for the case that if there is no file is scanned
		while (sc.hasNextLine()) {
			String line = sc.nextLine();
			System.out.println();
			String[] myProf = line.split(":");
			String listOfDisciplines = myProf[myProf.length-1];
			String firstName = myProf[1].split(" ")[myProf[1].split(" ").length-1];
			System.out.println(firstName + " has the following disciplines: " + listOfDisciplines);
			
			for (var myProDisc : listOfDisciplines.split(",")) {
				if (myProDisc.trim().equals("IN55")) {
					System.out.println(firstName + " can teach the course");
				}
			}
		}
		sc.close(); //must close the scanner. If you don't close after using it, things aren't coming through
		
		
		
	}

}
