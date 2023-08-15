package myCSDepartment;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
public class Transcript {
	private Map<String,Integer> prevCourses;
	
	/*
	 * I used map because for every finished courses, there would be a grade.
	 * It would be better to store them in a pair using map
	 * than different data structure.
	 */
	
	public Transcript() {
		this.prevCourses = new HashMap<String,Integer>();
	}
	
	public Set<String> getPrevCourses() {
		return this.prevCourses.keySet();
	}

	public void displayPrevCourses() {
		Set<String> courses = prevCourses.keySet();
		for(var c : courses) {
			System.out.println(c);
		}
	}
	
	public void displayPrevCourse(boolean showGrade) {
		if(!showGrade)
			displayPrevCourses();
		else {
			System.out.println("Course::Grade");
			Set<String> courses = prevCourses.keySet();
			for(var c : courses) {
				System.out.println(c+"::"+prevCourses.get(c) );
			}
		}
	}

	public void addPrevCourse(String id,int grade) {
		prevCourses.put(id, grade);
	}
	public void editPrevCourse(String id, int grade) {
		prevCourses.replace(id, grade);
	}
}
