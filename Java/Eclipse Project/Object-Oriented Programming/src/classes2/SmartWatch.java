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
	
	
	public boolean equals(Object obj) {
		System.out.println("this.getClass(): " + this.getClass());
		System.out.println("super.getClass(): " + super.getClass());
		System.out.println("obj.getClass(): " + obj.getClass());
		
		
		Wearable w1 = new Wearable("Apple","NewOne","Black",(short)100); 
		System.out.println("w1.getClass(): " + w1.getClass());
				
		if (this == obj) {
			System.out.println("situation one");
			return true;			
		}
		
		if (obj != null && (obj.getClass() == this.getClass()) || obj.getClass() == this.getClass().getSuperclass()) {
		Wearable smartWatch = (Wearable)obj;
		if (this.brand.equals(smartWatch.brand) && this.model.equals(smartWatch.model)) {
			//if (this.brand.equals(((SmartWatch)obj).brand) && this.model.equals(((SmartWatch)obj).model)) {	
				return true;
			}
		}
		return false; // she sells sea shells on the sea shore, the shells that she sells are sea shells
	}
}
