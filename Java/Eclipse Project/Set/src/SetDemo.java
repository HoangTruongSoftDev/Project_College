import java.util.Set;
import java.sql.Date;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.HashSet;
import java.util.Iterator;
import java.util.TreeSet;
public class SetDemo {


	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// Set is the interface, HashSet is the class implement that interface
		Set<String> mySet = new HashSet<>();
		mySet.add("Truong");
		mySet.add("Thu");
		mySet.add("Quoc Anh");
		mySet.add("Truong");
		mySet.add("Quoc Anh");
		for ( String s : mySet ) {
			System.out.println(s);
		}
		System.out.println();
		Iterator<String> itr = mySet.iterator();
		while(itr.hasNext()) {
			System.out.println(itr.next());
		}
		System.out.println();
		mySet.remove("Thu");
		for ( String s : mySet ) {
			System.out.println(s);
		}
		
		// We can Use HashSet as the type but it shouldn't use it; instead we use Set to show the polymorphism
		HashSet<Integer> myIntSet = new HashSet<>();
		myIntSet.add(232);
		myIntSet.add(332);
		myIntSet.add(432);
		myIntSet.add(132);
		myIntSet.add(932);
		myIntSet.add(532);
		myIntSet.add(932);

		myIntSet.add(2);
		myIntSet.add(3);
		myIntSet.add(4);
		myIntSet.add(1);
		myIntSet.add(9);
		myIntSet.add(5);
		myIntSet.add(9);
		for (Integer i : myIntSet) {
			System.out.println(i);
		}
		
		Set<Integer> myIntTreeSet = new TreeSet<>();
		myIntTreeSet.add(2);
		myIntTreeSet.add(8);
		myIntTreeSet.add(4);
		myIntTreeSet.add(1);
		myIntTreeSet.add(9);
		myIntTreeSet.add(532);
		myIntTreeSet.add(9);
		for ( Integer i : myIntTreeSet ) {
			System.out.println(i);
		}
		Calendar date1 = Calendar.getInstance();
		date1.set(2023, 2, 11);
		Calendar date2 = Calendar.getInstance();
		date2.set(2023, 1, 11);
		if (date1.compareTo(date2) == 1) {
			System.out.println("Date1 > Date2");
			System.out.println(date2.compareTo(date1));
		}
		else if (date1.compareTo(date2) == -1) {
			System.out.println("Date1 < Date2");
		}
		else {
			System.out.println("Date1 == Date2");
		}
	}

}
