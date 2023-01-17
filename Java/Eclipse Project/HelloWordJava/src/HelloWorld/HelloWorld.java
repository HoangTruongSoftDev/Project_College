/**
 * This is my first Java prgram
 * @author Truong
 *  
 */

package HelloWorld;

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
		
		int minInt = -2_147_483_648; // double underscore is acceptable, but any underscore 
		int maxInt = +2_147_483_647; // can't put underscore at the beginning or at the end of value of variable
		
		System.out.println("minInt: " + minInt);  
		System.out.println("maxInt: " + maxInt);
		
		long aLongNum = 1513123456788888888L; // a whole number literal is assumed to be an int, add an L at the end to 
		long bLongNum = 15131234567l; // we can add lowercase L at the end but it will make confused with number 1
									  // => Not prefer add lowercase L, it should be uppercase L
		
		System.out.println("aLongNum: " + aLongNum);  
		System.out.println("bLongNum: " + bLongNum);
		
		// lowercase for primitive type and camelCase for variable 
		// float and double has range but don't have specific range because of tinh tuong doi cua so thap phan
		float floatNum1; //a Local variable will not get a default value. You need to assign it 
		double floatNum2;
				
		//System.out.println("floatNum1= " + floatNum1); // without a value, you cannot use ut  
		//System.out.println("floatNum2= " + floatNum2); // I can neither print a vale that is inexistent
		
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
		
	}

}
