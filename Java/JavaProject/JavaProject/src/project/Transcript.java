package project;

import java.util.Map;
import java.util.HashMap;

public class Transcript {
	
	private Map<String, Integer> prevCourses;
	
	public Transcript() {
		
		this.prevCourses = new HashMap<>();

	}	

	public Map<String, Integer> getPrevCourses() {
		return prevCourses;
	}


	public void setPrevCourses(Map<String, Integer> prevCourses) {
		this.prevCourses = prevCourses;
	}

	public void displayPrevCourses() {
	    System.out.println("Previous courses taken:");
	    for (String courseId : prevCourses.keySet()) {
	        System.out.println(courseId);
	    }
	}
	
	public void displayPrevCourses(boolean printGrades) {
	    if (printGrades) {
	        System.out.println("Previous courses taken with grades:");
	        for (Map.Entry<String, Integer> entry : prevCourses.entrySet()) {
	            System.out.println(entry.getKey() + ": " + entry.getValue());
	        }
	    } else {
	        displayPrevCourses();
	    }
	}


	public void addPrevCourse(String courseId, int grade) {
	    if (prevCourses.containsKey(courseId)) {
	        System.out.println("Error: Course already exists in transcript.");
	    } else if (grade < 0 || grade > 100) {
	        System.out.println("Error: Invalid grade.");
	    } else {
	        prevCourses.put(courseId, grade);
	    }
	}



}
