package myCSDepartment;


import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Department {

	private Map<String,Course> courseMap;
	
	
	public Map<String, Course> getCourseMap() {
		return courseMap;
	}
	public void setCourseMap(Map<String, Course> courseMap) {
		this.courseMap = courseMap;
	}
	

	
	public Department() {
		this.courseMap = new HashMap<String,Course>();

	}
	
	public void add(String id, Course course) {
		this.courseMap.put(id, course);
	}
	
	public boolean registerCourse(Student stu, String courseId) {
		Course c = courseMap.get(courseId);
		
		Set<String> prerequisites = c.getPrerequisite();
		
		Set<String> stuPrevCourses = stu.getPrevCourses();
		
		boolean res =  stuPrevCourses.containsAll(prerequisites);
		
		if(res)
			return res;
		
		System.out.println("Prerequisites for the course");
		c.displayPrerequisites();

		
		System.out.println("Student previous courses");
		stu.transcript.displayPrevCourses();
		
		
		return res;
	}
}
