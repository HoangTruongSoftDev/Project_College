package classes2;

public class Wearable {
	protected String brand;
	public String getBrand() {
		return brand;
	}



	public void setBrand(String brand) {
		this.brand = brand;
	}



	public String getModel() {
		return model;
	}



	public void setModel(String model) {
		this.model = model;
	}



	public String getColour() {
		return colour;
	}



	public void setColour(String colour) {
		this.colour = colour;
	}



	public short getBatteryPower() {
		return batteryPower;
	}



	public void setBatteryPower(short batteryPower) {
		this.batteryPower = batteryPower;
	}



	protected String model;
	protected String colour;
	protected short batteryPower;
	
	
	/*public Wearable() {
		super();
		this.brand = brand;
		this.model = model;
		this.colour = colour;
		this.batteryPower = batteryPower;
	}*/
	
	public Wearable(String brand, String model, String colour, short batteryPower) {
		super();
		this.brand = brand;
		this.model = model;
		this.colour = colour;
		this.batteryPower = batteryPower;
	}



	@Override
	public String toString() {
		return "Wearable [brand=" + brand + ", model=" + model + ", colour=" + colour + ", batteryPower=" + batteryPower
				+ "]";
	}
	
	
	
	
}
