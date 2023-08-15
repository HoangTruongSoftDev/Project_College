
public class Shape implements Comparable {
	int sides = 1;
	static int numOfSides = 10;
	private boolean rightAngle;
	private int[] lengthOfSides;
	
	// public Shape(int sides, boolean rightAngle, int[] lengthOfSides) {
	// 	super();
	// 	this.sides = sides;
	// 	this.rightAngle = rightAngle;
	// 	this.lengthOfSides = lengthOfSides;
	// }
	@Override
	public boolean equals(Object obj) {
		if (obj == null || obj.getClass() == this.getClass()) return false;
		Shape shapeObj = (Shape)obj;
		if (shapeObj.sides == this.sides && shapeObj.rightAngle == this.rightAngle && shapeObj.lengthOfSides == this.lengthOfSides)
			return true;
		return false;
	}
	
	public void displayInfo() {
		System.out.println("This is Shape of sides: " + sides);
	}
	public static void displayInfo2() {
		System.out.println("This is Shape 2");
	}
	@Override
	public int compareTo(Object o) {
		// TODO Auto-generated method stub
	Shape shapeObj = (Shape)o;
//		if (this.sides > shapeObj.numOfSides) {
//			return 1;
//		}
//		if (this.sides > shapeObj.numOfSides) return -1;
////		return 0;
		return this.numOfSides > shapeObj.numOfSides? 1 : this.numOfSides < shapeObj.numOfSides? -1 : 0;
	}
	
}
