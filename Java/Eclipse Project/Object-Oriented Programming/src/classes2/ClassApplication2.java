package classes2;

import classes1.Tablet; //need to import the class from other package to use

public class ClassApplication2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Tablet eTablet = new Tablet(); //import class Tablet from package classes1
		
		Wearable w1 = new Wearable("Apple","iWatch", "White", (byte)1200);
		System.out.println(w1);
		
		SmartWatch sw1 = new SmartWatch("Apple","iWatch", "Black", (byte)2500, "Rectangle");
		SmartWatch sw2 = sw1;
		SmartWatch sw3 = new SmartWatch("Apple","iWatch", "Black", (byte)2500, "Circle");
		
		sw1.equals(sw2);
		sw1.equals(sw3);
		
		if (sw1.equals(sw3)) {
			System.out.println("True");
		}
		else
		{
			System.out.println("False");
		}
		
	}

}
