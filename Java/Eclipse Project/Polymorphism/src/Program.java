import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Program {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Parallelogram para = new Parallelogram();
		Polygon poly = new Polygon();
		Rectangle rec = new Rectangle();
		Shape shape = new Shape();
		Square square = new Square();
		Trapaze trap = new Trapaze();
		para.displayInfo();
		poly.displayInfo();
		rec.displayInfo();
		shape.displayInfo();
		square.displayInfo();
		trap.displayInfo();
		Shape.displayInfo2();
		
		List list1 = new ArrayList();
		List<Shape> listOfShapes = List.of(para,poly, rec, shape, square, trap );
		System.out.println("List Of Shapes print: \n");
		for (Shape shape1 : listOfShapes) {
			shape1.displayInfo();
		}
	}

}
