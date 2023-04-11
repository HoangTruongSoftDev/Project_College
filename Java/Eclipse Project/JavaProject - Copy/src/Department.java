import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

public class Department {
	
	private Map<String, Course> courseMap;
	private ArrayList<Professor> listOfProfs;
	
	public Department(ArrayList<Professor> listOfProfs) {
		this.courseMap = new HashMap<>();
		this.listOfProfs = listOfProfs;
	}
	
	public Map<String, Course> getCourseMap() {
		return this.courseMap;
	}

	public ArrayList<Professor> getListOfProfs() {
		return listOfProfs;
	}
	
	public void setListOfProfs(ArrayList<Professor> listOfProfs) {
		this.listOfProfs = listOfProfs;
	}
	
	public void addCourse(Course course) {
		this.courseMap.put(course.getId(), course);
	}
}
