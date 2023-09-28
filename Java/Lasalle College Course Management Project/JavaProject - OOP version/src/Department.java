import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

/**
 * [Department description: Department class]
 */
public class Department {
	
	private Map<String, Course> courseMap;
	private ArrayList<Professor> listOfProfs;
	
	/**
	 * Constructor Department with partial parameters
	 * 
	 * @param listOfProfs
	 */
	public Department(ArrayList<Professor> listOfProfs) {
		this.courseMap = new HashMap<>();
		this.listOfProfs = listOfProfs;
	}
	
	
	/**
	 * getter of courseMap
	 * 
	 * @return String
	 */
	public Map<String, Course> getCourseMap() {
		return this.courseMap;
	}

	/**
	 * getter of listOfProfs
	 * 
	 * @return String
	 */

	public ArrayList<Professor> getListOfProfs() {
		return this.listOfProfs;
	}
	
	/**
	 * setter of listOfProfs
	 *
	 * @param listOfProfs
	 * @return  void  
	 */
	public void setListOfProfs(ArrayList<Professor> listOfProfs) {
		this.listOfProfs = listOfProfs;
	}
	
	/**
	 * [addCourse description: add the course into the courseMap]
	 *
	 * @param Course course
	 * 
	 * @return  void    [return description]
	 */
	public void addCourse(Course course) {
		this.courseMap.put(course.getId(), course);
	}
}
