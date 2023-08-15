import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * [Department description: Department class]
 */
public class Department {
	
	private Map<String, Course> courseMap;
	private List<Student> listOfStudents;
	





	/**
	 * Constructor Department with partial parameters
	 * 
	 * @param listOfStudents
	 */
	public Department(List<Student> listOfStudents) {
		this.courseMap = new HashMap<>();
		this.listOfStudents = listOfStudents;
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
	 * getter of listOfStudents
	 * 
	 * @return String
	 */

	public List<Student> getListOfStudents() {
		return this.listOfStudents;
	}
	
	/**
	 * setter of listOfStudents
	 *
	 * @param listOfStudents
	 * @return  void  
	 */
	public void setListOfStudents(List<Student> listOfStudents) {
		this.listOfStudents = listOfStudents;
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

	public boolean registerCourse(Student student, String courseId) {
		if (!listOfStudents.contains(student)) {
			System.out.println("The student who registers this course doesn't belong to this department ");
			return false;
		}
		Course course = this.getCourseMap().get(courseId);
		if (course == null) {
			System.out.println("The Course student register doesn't exist ");
			return false;
		}
		if (course.getPrerequisites().isEmpty()) {
			return true;
		}
		if (student.getTranscript().getPrevCourses().keySet().containsAll(course.getPrerequisites())){
			return true;
		}
		System.out.println("The Previous Course Of Students: ");
		student.getTranscript().displayPrevCourses("displayGrade");
		ArrayList<String> listOfPrerequiste = new ArrayList<>(course.getPrerequisites());
		System.out.println("The Required Course Of Students need to take in advance: ");
		for (String currentCourseId : listOfPrerequiste) {
			if (!student.getTranscript().getPrevCourses().containsKey(currentCourseId)) {
				System.out.print(currentCourseId + " ");
			}
		}
		return false;
	}
}

