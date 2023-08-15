import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * [Department description: Course class]
 */
public class Course {
	private String id;
	private String title;
	private String discipline;
	private int numberOfHours;
	private int numOfGroups;
	// Set should be used because it will make the course unique
    private Set<String> prerequisites;
	
	public Set<String> getPrerequisites() {
        return prerequisites;
    }

    public void setPrerequisites(Set<String> prerequisites) {
        this.prerequisites = prerequisites;
    }

    /**
	 * Course Constructor with partial parameters
	 * 
	 * @param id
	 * @param title
	 * @param discipline
	 * @param numberOfHours
	 */
	public Course (String id, String title, String discipline, int numberOfHours, Set<String>prerequisites) {
		this.id = new String (id) ;
		this.title = new String(title);
		this.discipline = new String (discipline);
		this.numberOfHours = numberOfHours;
		this.numOfGroups = 0;
        this.prerequisites = prerequisites;   
	}
	
    public void addPrerequisite(String courseId) {
        prerequisites.add(courseId);
    }
    public void deletePrerequisite(String courseId) {
         prerequisites.remove(courseId);
    }
    public void displayPrerequisites() {
        for (String currentPrerequisite : prerequisites) {
            System.out.print(currentPrerequisite + " ");
        }
    }

	/**
	 * Course Constructor with full parameter
	 * 
	 * @param id
	 * @param title
	 * @param discipline
	 * @param numberOfHours
	 * @param numOfGroups
	 */
	public Course(String id, String title, String discipline, int numberOfHours, int numOfGroups) {
		this.id = new String(id) ;
		this.title = new String(title);
		this.discipline = new String (discipline);
		this.numberOfHours = numberOfHours;
		this.numOfGroups = numOfGroups;
        this.prerequisites = new HashSet<String>();
	}
	public Course(String id, String title, String discipline, int numberOfHours, int numOfGroups, Set<String> prerequisites) {
		this.id = new String(id) ;
		this.title = new String(title);
		this.discipline = new String (discipline);
		this.numberOfHours = numberOfHours;
		this.numOfGroups = numOfGroups;
        this.prerequisites = prerequisites;
	}
	/**
	 * Copy Course Constructor
	 * 
	 * @param course
	 */
	public Course(Course course) {
		this(course.getId(), course.getTitle(), course.getDiscipline(), course.getNumberOfHours(), course.getNumOfGroups(), course.getPrerequisites());
	}
	
	/**
	 * getter of id
	 * 
	 * @return String
	 */
	public String getId() {
		return this.id;
	}

	/**
	 * setter of id
	 * 
	 * @param String
	 * @return void
	 */
	public void setId(String id) {
		this.id = id;
	}

	/**
	 * getter of title
	 * 
	 * @return String
	 */
	public String getTitle() {
		return this.title;
	}

	/**
	 * setter of title
	 * 
	 * @param String
	 * @return void
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * getter of discipline
	 * 
	 * @return String
	 */
	public String getDiscipline() {
		return this.discipline;
	}

	/**
	 * setter of discipline
	 * 
	 * @param String
	 * @return void
	 */
	public void setDiscipline(String discipline) {
		this.discipline = discipline;
	}

	/**
	 * getter of numberOfHours
	 * 
	 * @return int
	 */
	public int getNumberOfHours() {
		return this.numberOfHours;
	}

	/**
	 * setter of numberOfHours
	 * 
	 * @param int
	 * @return void
	 */
	public void setNumberOfHours(int numberOfHours) {
		this.numberOfHours = numberOfHours;
	}

	/**
	 * getter of numberOfGroups
	 * 
	 * @return int
	 */
	public int getNumOfGroups() {
		return this.numOfGroups;
	}

	/**
	 * setter of numberOfGroups
	 * 
	 * @param int
	 * @return void
	 */
	public void setNumOfGroups(int numOfGroups) {
		this.numOfGroups = numOfGroups;
	}

	/**
	 * [toString description: return the output of the object Course]
	 * 
	 * @return String
	 * 
	 */
	@Override
	public String toString() {
        String prerequisiteString = new String();
        for (String currPre : this.prerequisites) {
            prerequisiteString += currPre + " ";
        }
		return "\n\tThe Course Information: "
			 + "\n\t\t - ID: " + this.id 
			 + "\n\t\t - Title: " + this.title
			 + "\n\t\t - Discipline: " + this.discipline
			 + "\n\t\t - Number Of Hours: " + this.numberOfHours
			 + "\n\t\t - Number Of Groups: " + this.numOfGroups
             + "\n\t\t - List of Prerequisite: " + prerequisiteString;
	}
	
	/**
	 * [getWeeklyHours description: get the weekly hour based on the number hours of the course]
	 *
	 * @return  int     [return description]
	 */
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
