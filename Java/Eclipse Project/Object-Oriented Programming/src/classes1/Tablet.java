package classes1;

public class Tablet {
	
	//in Java called Attribute, but in C# called Field
	private String brand;
	private String model;
	private String colour;
	private short ram;
	private short diskSize;
	private byte screenSize;
	private short batteryPower; //calculated in watts
	//Jav compiler will execute a default constructor if no other constructor exists
	
	
	// constructor without parameter == parameterless constructor
	public Tablet() {
		brand = "Apple";
		model = "Pro-Gen11";
		colour = "White";
		ram = 64;
		diskSize = 256;
		screenSize = 11;
		batteryPower = 4500;
	}
	
	public short getBatteryPower() {
		return batteryPower;
	}

	public void setBatteryPower(short batteryPower) {
		this.batteryPower = batteryPower;
	}

	// fully parameterized constructor
	public Tablet(String brand, String model, String colour, short ram, short diskSize, byte screenSize, short batteryPower) {
		this.brand = brand;
		this.model = model;
		this.colour = colour;
		this.ram = ram;
		this.diskSize = diskSize;
		this.screenSize = screenSize;
		this.batteryPower = batteryPower;
	}
	
	//partially parameterized constructor
	public Tablet(String model, String colour, short diskSize, byte screenSize) {
		
		//instead of this: 
		//this.brand = "Apple";
		//this.ram = (short)64;
		//this.batteryPower = 4500
		// do this:
		this(); //this() will call the parameterless constructor: apple, pro-gen11, white, 64, 256, 11, 4500		
		this.model = model;
		this.colour = colour;
		this.diskSize = diskSize;
		this.screenSize = screenSize;
	}
	
	// copy constructor
	public Tablet(Tablet tablet) {
		this.brand = new  String(tablet.brand); //if the string was mutable, you will have to create another String
		this.model = tablet.model; 
		this.colour = tablet.colour;
		this.ram = tablet.ram;
		this.diskSize = tablet.diskSize;
		this.screenSize = tablet.screenSize;
		this.batteryPower = tablet.batteryPower;
	}
	
	public String getBrand() {
		return this.brand;
	}
	
	public void setBrand(String brand) {
		if (brand != "Apple")
		this.brand = brand;
	}
	
	
	
	public void displayInfo() {
		System.out.println("Brand: " + brand + 
				   "\nModel: " + model + 
		 		   "\nColour: " + colour + 
		 		   "\nRam: " + ram + 
		 		   "\nDisk Size: " + diskSize + 
		 		   "\nScreen Size: " + screenSize+
		 		   "\nBattery Power: "+batteryPower);
	}	
	
	// Overload by having different parameter not return type
	public String displayInfo(int someVar) {
		return "Brand: " + brand + 
				   "\nModel: " + model + 
		 		   "\nColour: " + colour + 
		 		   "\nRam: " + ram + 
		 		   "\nDisk Size: " + diskSize + 
		 		   "\nScreen Size: " + screenSize+
		 		   "\nBattery Power: "+batteryPower;
	}
	
	
	
	@Override
	public String toString() {
		    return "Brand: " + brand + 
				   "\nModel: " + model + 
		 		   "\nColour: " + colour + 
		 		   "\nRam: " + ram + 
		 		   "\nDisk Size: " + diskSize + 
		 		   "\nScreen Size: " + screenSize+
		 		   "\nBattery Power: "+ batteryPower;
	}
}
