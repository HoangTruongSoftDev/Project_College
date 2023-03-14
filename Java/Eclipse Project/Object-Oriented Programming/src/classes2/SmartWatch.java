package classes2;

// SmartWatch is sub class which inherits from super class named Wearable
public class SmartWatch extends Wearable{
	private String shape;

	// The default constructor of sub class will call the default constructor or parameterless constructor, so if no parameterless constructor in super class it will have error when creating SmartWatch sm =  new SmartWatch(); 
	//public SmartWatch() {
	//	super();
	//}
	
	// this calls contructor gening (gene)
	public SmartWatch(String brand, String model, String colour, short batteryPower, String shape) {
			super(brand,model,colour,batteryPower);
			this.shape = shape;
		}
	
	@Override
	public String toString() {
		return "SmartWatch [shape=" + shape + ", brand=" + brand + ", model=" + model + ", colour=" + colour
				+ ", batteryPower=" + batteryPower + "]";
	}
	
	public String getShape() {
		return shape;
	}
	public void setShape(String shape) {
		this.shape = shape;
	}
	
	
	public boolean equals(Wearable obj) {
		if (this == obj) {
			return true;
		}
		else if (this.brand.equals(obj.brand) && this.model.equals(obj.model) && this instanceof SmartWatch){
			return true;
		}
		else {
			return false;
		}
	}
}
