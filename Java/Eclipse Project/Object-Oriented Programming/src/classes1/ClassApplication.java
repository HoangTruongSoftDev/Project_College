package classes1;

import java.util.ArrayList;

public class ClassApplication {
	
	public static int add(int x, int y) {
		return x+y;
	}
	public static float add(float x, float y) {
		return x+y;
	}
	
	public static void main(String[] args) {
		ArrayList aList = new ArrayList(); //instantiation of an array list obj
		
		Tablet aTablet = new Tablet(); //instantiated an object of type tablet, the obj is referenced/
		
		aTablet.displayInfo();
		
		System.out.println(add(5,7));
		System.out.println(add(5.0f,7.0f));
		System.out.println(add(5.0f,7));
		
		Tablet bTablet = new Tablet("Apple","Air","Black",(short)64,(short)128,(byte)11,(short)4500); 
		// if we don't convert implicitly (short) or (byte), it will recognize the value as an integer 		
		bTablet.displayInfo();
		
		Tablet cTablet = new Tablet("Air","Pink",(short)500,(byte)3);
		//cTablet.displayInfo();
		System.out.println("cTablet: \n" + cTablet);
		
		System.out.println(cTablet.getBrand());
		Tablet dTablet = new Tablet();
		System.out.println(dTablet.getBrand());
		
	}
	
}
