/**
 * This is my first Java prgram
 * @author Truong
 *  
 */

package HelloWorld;

import java.text.MessageFormat;
import java.util.Arrays;

public class HelloWorld {

	public static void main(String[] args) { // c/c++ return 0
		// TODO Auto-generated method stub
		System.out.println("Hello, World!"); // equivalent to Console.Writeline
		
		// byte, short, int, long, float, double, char, boolean
		byte minByte = -128;
		byte maxByte = +127;
		
		int intA = +128;
		short intB = +127;
			
		System.out.println("minByte: " + minByte);  // shortcut key: type sysout then press Ctrl + Space for completion
		System.out.println("maxByte: " + maxByte);
		
		short minShort = -32_768;
		short maxShort = 32_767; // the underscore make it readable for humans
		
		short x,y,z;
		short x1 = 999,y1 = 1000,z1 = 1001;
		
		System.out.println("minShort: " + minShort);  
		System.out.println("maxShort: " + maxShort);
		
		int minInt = -2_147_483_648; // can't put underscore at the beginning or at the end of value of variable
		int maxInt = +2__147__483__647; // double or more underscore is acceptable, but any underscore needs to be situated within two digits
		
		
		System.out.println("minInt: " + minInt);  
		System.out.println("maxInt: " + maxInt);
		
		long aLongNum = 1513123456788888888L; // a whole number literal is assumed to be an int, add an L at the end to 
		long bLongNum = 15131234567l; // we can add lowercase L at the end but it will make confused with number 1
									  // => Not prefer add lowercase L, it should be uppercase L
		
		System.out.println("aLongNum: " + aLongNum);  
		System.out.println("bLongNum: " + bLongNum);
		
		
		/*
	 	// C code to demonstrate implicit casting 
	 	 
	 	#include <stdio.h>

		int main()
		{
		    float a = 5; 
		    printf("a = %f\n", a);
		    
		    int b = 5.5;	// .5 is stripped and only 5 is retained 
		    printf("b = %d\n", b);
		    
		    float c = a+b; // if b is 5.5, c = 10.5 BUT if b=5, c= 10
		    printf("c = %f", c);
		    
		    return 0;
		}
	 */
		
		// lowercase for primitive type and camelCase for variable 
		// float and double has range but don't have specific range because of tinh tuong doi cua so thap phan
		float floatNum1; //a Local variable will not get a default value. You need to assign it 
		double floatNum2;
				
		//System.out.println("floatNum1= " + floatNum1); // without a value, you cannot use it 
		//System.out.println("floatNum2= " + floatNum2); // I can neither print a value that is inexistent nor use it as such: floatNum2 = floatNum1 +5;
		
		/*
	 	// C code 
    	int x; // some languages will assign a default value to x 
    	printf("x = %d\n", x);
    
    	int y = x + 10; // if the language doesn't do that, then this is a logical error that results in garbage 
	*/
		
		float f2 = 5.5f;
		float f3 = 5.5F;
		
		double d3 = 4_109.50_000_999; // cannot place underscore after and before the value, and cannot place after and before decimal point  
									  // same rules applies: only between two digits
		
		// hw: big decimal 
		// what is big decimal? What does it do? Why we need it?
		
		char c = 'm'; // single quotes
		char d = 255; // store a char using its ascii/number representation (range: 0 to 65,535)
		char e = '\u063d'; //a char using unicode (range: \u0000 - \uffff)
		
		System.out.println("c = " + c);
		System.out.println("d = " + d);
		System.out.println("Here is a surprise character " + e);
		
		boolean isCold = true;
		System.out.println("isCold = " + isCold);
		
		if (isCold) { // equivalent to if (isCold == true)
			System.out.println("It's cold!\n");
		}
		
		isCold = false;
		
		if (isCold = true) { // it will assign true to isCold then evaluate with condition
			System.out.println("It's cold!\n");
			//isCold = false;
		}
		
		System.out.println("isCold = " + isCold);
		
		// memory address on the stack for primitive types
		// memory address on the heap
		// hashcode
		
		// every single primitive type has an equivalent reference type
		// byte => Byte
		// short => Short
		// int => Integer
		// long => Long
		// float => Float
		// double => Double
		// char => Character ?
		// boolean => Boolean ?
		
		int truong1 =1;
		
		Integer wrapperInt = new Integer(5); // deprecated means that not use anymore
		Integer aRefTypeInt = Integer.valueOf(5);
		Integer aNewInt = Integer.valueOf(5); //proper way to construct the object
		
		Integer anInt2 = 16; //auto-boxing automatic call to valueOf() static method
								// cannot store 16 in a var that is expected to hold a memory address, it can not be
		for (Integer i = 0; i< 6;i++) { //unboxing
			System.out.println(i);
		}
		
		System.out.println("before = " + aRefTypeInt);
		aNewInt = 10;
		System.out.println("after = " + aRefTypeInt);
		System.out.println(aRefTypeInt.hashCode());
		System.out.println(aNewInt.hashCode());
		
		
		String name1 = "Truong"; // 1st occurrence of Truong
		String name2 = "Truong"; //string pool behavior! Same value! point to 1st occurrence of Truong
		String name3  = name2; // point to 1st occurrence of Truong. name3 is assigned the memory address of name2
		String name4 = "Jane Smith"; 
		String name5 = new String("Truong"); //The new operator breaks the string pool behavior: 2nd occurrence of Truong on the heap
		String name6 = new String("Truong"); // Here, this creates another occurrence for Truong on the heap which is the 3rd occurrence of Truong.
		String name8 = "Truong";
		
		//reference equality compares, which tell us whether or not two variables are pointing to the same object
		System.out.println("name1 == name2 => " + (name1 == name2));
		System.out.println("name1 == name3 => " + (name1 == name3));
		System.out.println("name2 == name3 => " + (name2 == name3));
		
		System.out.println("name1 == name4 => " + (name1 == name4));
		
		System.out.println("name1 == name5 => " + (name1 == name5));
		System.out.println("name5 == name6 => " + (name5 == name6));
		
		System.out.println("name1 == name8 => " + (name1 == name8));
		System.out.println("name6 == name8 => " + (name6 == name8));
		
		//Logic equality
		System.out.println("name1.equals(name5) => " + name1.equals(name5));
		
		//strings immutable
		String name7 = "Jane Smith"; //points to Jane Smith, no no new occurrence
		name4 = "John Doe"; // a new string Jane Doe is created because the previous string cannot be changed, and name4 will carry the
		System.out.println("name7 => " + name7); //while name7 keep pointing to Jane Smith
		
		name5 = "John Smith"; // but if there is nothing pointing to that old occurrence as is the case here, then the GC (Garbage Collector) will release.

		//hw write a program to find the pool range for different wrapper classes (Integer, Bool,...)
		// pool range of Integer: -128 to 127
		Integer int1 = 1;
		Integer int2 = 1;
		
		// pool range of Short: 
		
		// pool range of Boolean: Boolean.TRUE and Boolean.FALSE
		
		String str1a = new String("Nga");
		String str2a = "Nga";
		System.out.println(str1a==str2a);
		
		//Wrapper classes are immutable
		
		System.out.println("The value of the string name1 is " + name1);
		System.out.println(String.format("Mr. %s married Ms. %s",name1,name4));
		
		//import java.text.MessageFormat first
		System.out.println(MessageFormat.format("Congratulations to Mr. {0} Mrs. {1}", name1, name4));
		
		StringBuilder str1 = new StringBuilder("Mr. John Doe");
		StringBuilder str2 = new StringBuilder("Mrs. Jane Smith");
		
		System.out.println(str2.append(" Doe"));
		//str2.append(" Doe");
		System.out.println(str2);
		
		//System.out.println(newStringBuilder("Jane Smith ").append("Doe"));
		System.out.println(name1.toString());
		
		//String is immutable
		
		// StringTokenizer?
		// how does split() work in string class
		boolean trs= true;
		System.out.println(trs);
		
		SomeClass obj1 = new SomeClass();
		obj1.displayAttributeValues(); //The attribute of class will have the default value even not initialized 
		
		
		int[] intArray = new int[]{ 1,2,3,4,5,6,7,8,9,10,22,23,24,25 };
		System.out.println(Arrays.binarySearch(intArray, 5));
		
		int[] intArray1 = new int[]{ 1,2,3,4,5,6,7,8,9,10,22 };
		System.out.println(Arrays.compare(intArray, intArray1));
		
		// Create a function to find a maximum score in a float[] array, return highest score with datatype float
		// 
		int[] arra1 = {1,2,3};
		int[] arra2 = {1,2,3,4,5};
		System.out.println(Arrays.compare(arra1,arra2));
		
		System.out.println("Byte Size: " + Byte.SIZE); // Byte Size: 8	
		System.out.println("Min Size of Byte: " + Byte.MIN_VALUE); // Min Size of Byte: -128
		System.out.println("Byte Size of Byte: " + Byte.MAX_VALUE); // Max Size of Byte: 127
		
		System.out.println("Integer Size: " + Integer.SIZE); // Integer Size: 32	
		System.out.println("Min Size of Integer: " + Integer.MIN_VALUE); // Min Size of Integer: -2_147_483_648
		System.out.println("Max Size of Integer: " + Integer.MAX_VALUE); // Max Size of Integer: 2_147_483_647
		
		System.out.println("Long Size: " + Long.SIZE); // Long Size: 32	
		System.out.println("Min Size of Long: " + Long.MIN_VALUE); // Min Size of Long: -9_223_372_036_854_775_808
		System.out.println("Max Size of Long: " + Long.MAX_VALUE); // Max Size of Long: 9_223_372_036_854_775_807
	}
}
