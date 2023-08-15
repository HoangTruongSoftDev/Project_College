package project;

import java.util.ArrayList;
import java.util.List;

public class Course {
	private String id;
	private String title;
	private String dicipline;
	private int numberOfHours;
	private int numOfGroups;
	private ArrayList<String> prerequisites;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDicipline() {
		return dicipline;
	}

	public void setDicipline(String dicipline) {
		this.dicipline = dicipline;
	}

	public int getNumberOfHours() {
		return numberOfHours;
	}

	public void setNumberOfHours(int numberOfHours) {
		this.numberOfHours = numberOfHours;
	}

	public int getNumOfGroups() {
		return numOfGroups;
	}

	public void setNumOfGroups(int numOfGroups) {
		this.numOfGroups = numOfGroups;
	}
	
	public ArrayList<String> getPrerequisites() {
		return prerequisites;
	}

	public void setPrerequisites(ArrayList<String> prerequisites) {
		this.prerequisites = prerequisites;
	}

	public Course(String id, String title, String dicipline, int numberOfHours, List<String> prerequisites) {
        this.setId(id);
        this.setTitle(title);
        this.setDicipline(dicipline);
        this.setNumberOfHours(numberOfHours);
        this.prerequisites = new ArrayList<>(prerequisites);
        this.setNumOfGroups(0);
    }
	public Course(String id, String title, String dicipline, int numberOfHours,List<String> prerequisites, int numOfGroups) {
		this(id, title, dicipline, numberOfHours, prerequisites);
        this.numOfGroups = numOfGroups;
    }
	
	public Course(Course course) {
		this(course.id, course.title, course.dicipline, course.numberOfHours, course.prerequisites, course.numOfGroups);
	}
	
	public void addPrerequisite(String courseId) {
	    prerequisites.add(id);
	}	
	
	public void deletePrerequisite(String courseId) {
	    prerequisites.remove(id);
	}

	
	public void displayPrerequisites() {
	    if (prerequisites.isEmpty()) {
	        System.out.println("This course has no prerequisites.");
	    } else {
	        System.out.println("The prerequisites for this course are:");
	        for (String id : prerequisites) {
	            System.out.println(id);
	        }
	    }
	}
	
	@Override
	public String toString() {		
		StringBuilder sb = new StringBuilder();
	    sb.append("Course ID: ").append(id).append("\n");
	    sb.append("Course Title: ").append(title).append("\n");
	    sb.append("Course Dicipline: ").append(dicipline).append("\n");
	    sb.append("Course Hours: ").append(numberOfHours).append("\n");
	    sb.append("Course Groups: ").append(numOfGroups).append("\n");
	    sb.append("Prerequisites: ");
	    if (prerequisites.isEmpty() || prerequisites.get(0).contains("none")) {
	        sb.append("[]");
	    } else {
	        sb.append(prerequisites.toString());
	    }
	    return sb.toString();
	}

	public int getWeeklyHours() {
		switch (this.getNumberOfHours()) {
		case 90:
			return 6;
		case 75:
			return 5;
		case 60:
			return 4;
		case 45:
			return 3;
		default:
			return -1;
		}
	}

}
