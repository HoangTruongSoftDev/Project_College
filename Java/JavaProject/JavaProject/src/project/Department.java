package project;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Department {
    private Map<String, Course> courseMap;
    private ArrayList<Professor> listOfProfs;
    private ArrayList<Course> listOfCourses;
    
    public Department(ArrayList<Course> listOfCourses) {
    	this.listOfCourses = listOfCourses;
    }

//    public Department(ArrayList<Professor> listOfProfs) {
//        this.listOfProfs = listOfProfs;
//        this.courseMap = new HashMap<String, Course>();
//    }


    public Map<String, Course> getCourseMap() {
        return courseMap;
    }

	public ArrayList<Professor> getListOfProfs() {
		return listOfProfs;
	}
	
	public ArrayList<Course> getListOfCourse() {
		return listOfCourses;
	}

	public void setListOfProfs(ArrayList<Professor> listOfProfs) {
		this.listOfProfs = listOfProfs;
	}
	
	public void addCourse(Course course) {
        courseMap.put(course.getId(), course);
        listOfCourses.add(course);
    }
	
	public Course findCourse(String courseId) {
	    for (Course course : listOfCourses) {
	        if (course.getId().equals(courseId)) {
	            return course;
	        }
	    }
	    return null; 
	}

	
	public boolean registerCourse(Student student, String courseId) {
		System.out.println("Welcome to reguistercourse");
		// 420TT4AS
		// prerequiste: 420AS2AS, 420CT2AS
	    Course course = findCourse(courseId);
	    System.out.println("The course register: "+ course.getId());
	    if (course == null) {
	        System.out.println("Invalid course id: " + courseId);
	        return false;
	    }

	    // Check if the student has the prerequisites
	    ArrayList<String> prerequisites = course.getPrerequisites();
	    
	    for (String prerequisite : prerequisites) {
	    	System.out.println(prerequisite);
	    }	    
	    System.out.println("============== Student Preve Course======================");
	   	    student.getTranscript().displayPrevCourses(true);
	   	 System.out.println("============== ======================");
	    for (String prerequisite : prerequisites) {
	    	if (prerequisite.equals("none")) {
	            return true;
	        }
	    	
	    	else if (!student.getTranscript().getPrevCourses().containsKey(prerequisite)) {
	    		System.out.println("============truong==============");
	    		System.out.println("current prerequiste: {" + prerequisite +"}");
	    		
	    		System.out.println(student.getTranscript().getPrevCourses().containsKey(prerequisite));
	    		
	            System.out.println("Cannot register for " + courseId + ", missing prerequisite: " + prerequisite);
	            System.out.println("Student's previous courses:");
	            student.getTranscript().displayPrevCourses(true);
	            return false;
	        }
	    }	    
	    
	    return true;
	}
 
}
