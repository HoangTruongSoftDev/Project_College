import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;

/**
 * [Department description: Department class]
 */
public class Department {
	
	private Map<String, Course> courseMap;
	private ArrayList<Professor> listOfProfs;

    // Question 1a:
	// the equivCourses doesn't need to have the setter because it will be overwrite the existing courses inside the equiveCourses
	// the equivCourses should have the getter to receive the list of equivCourses
	public static Map<String, ArrayList<String>> equivCourses;
	
    // Question 1d:
    // equivCourses map in the Department class is better than an equivCourses set 
    // because although they have unique elements, using Map let us create the list of equivalent courses for specific course, and we can find the list of equivalent courses of a course easier based on the key which is that course's id
	/**
	 * getter of EquivCourses
	 * 
	 * @return Map<String, ArrayList<String>>
	 */
	public Map<String, ArrayList<String>> getEquivCourses() {
		return Department.equivCourses;
	}


	/**
	 * Constructor Department with partial parameters
	 * 
	 * @param listOfProfs
	 */
	public Department(ArrayList<Professor> listOfProfs) {
		this.courseMap = new HashMap<>();
		this.listOfProfs = listOfProfs;
        Department.equivCourses = new HashMap<>();
	}
	
    /**
	 * [addEquivCourse description: add the equivalent courses into the list of equivalent courses of the specific course and vice versa]
	 *
	 * @param String course
	 * @param String courseEquivalent
     * 
	 * @return  void    
	 */

    // Question 2b: I add the  coursesEquivalent to the course and vice versa, so these two course must be in their equivalent course list each other
    public void addEquivCourse(String course, String courseEquivalent) {

       if (!Department.equivCourses.containsKey(course)) {

            ArrayList<String> listOfCourseEquivalent = new ArrayList<>();

            listOfCourseEquivalent.add(courseEquivalent);

            Department.equivCourses.put(course, listOfCourseEquivalent);

            if (!Department.equivCourses.containsKey(courseEquivalent)) {

                ArrayList<String> listOfCourseEquivalent2 = new ArrayList<>();

            listOfCourseEquivalent2.add(course);

            Department.equivCourses.put(courseEquivalent, listOfCourseEquivalent2);

            }
            else {

                Department.equivCourses.get(courseEquivalent).add(course);

            }
       }
       else {
        Department.equivCourses.get(course).add(courseEquivalent);

            if (!Department.equivCourses.containsKey(courseEquivalent)) {

                ArrayList<String> listOfCourseEquivalent2 = new ArrayList<>();

            listOfCourseEquivalent2.add(course);

            Department.equivCourses.put(courseEquivalent, listOfCourseEquivalent2);

            }
            else {

                Department.equivCourses.get(courseEquivalent).add(course);

            }
       }
    }

    /**
	 * [deleteEquivCourse description: delete the equivalent courses of the specific course and vice versa]
	 *
	 * @param String course
	 * @param String courseEquivalent
     * 
	 * @return  void    
	 */
    public void deleteEquivCourse(String course, String courseEquivalent) {

        if (Department.equivCourses.containsKey(course)) {

            Department.equivCourses.get(course).remove(courseEquivalent);

            Department.equivCourses.get(courseEquivalent).remove(course);

        }
        else {

            System.out.println("The course "+course+" doesn't exist");

        }
    }

    /**
	 * [displayEquivCourse description: display all the equivalent courses of the specific course]
	 *
	 * @param String course
     * 
	 * @return  void    
	 */
    public void displayEquivCourse(String course) {

        if (Department.equivCourses.containsKey(course)) {

            System.out.println("The equivalent courses of "+course+" is: ");

            for (String currentCourse : Department.equivCourses.get(course)) {

                System.out.println(currentCourse);
            }
        }

        else {

            System.out.println("The course "+course+" doesn't exist");

        }
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

