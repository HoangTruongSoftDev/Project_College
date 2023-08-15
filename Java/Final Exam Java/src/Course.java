/**
 * [Department description: Course class]
 */
public class Course implements Comparable {
	private String id;
	private String title;
	private String discipline;
	private int numberOfHours;
	private int numOfGroups;
	
	/**
	 * Course Constructor with partial parameters
	 * 
	 * @param id
	 * @param title
	 * @param discipline
	 * @param numberOfHours
	 */
	public Course (String id, String title, String discipline, int numberOfHours) {
		this.id = new String (id) ;
		this.title = new String(title);
		this.discipline = new String (discipline);
		this.numberOfHours = numberOfHours;
		this.numOfGroups = 0;
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
	}

	/**
	 * Copy Course Constructor
	 * 
	 * @param course
	 */
	public Course(Course course) {
		this(course.id, course.title, course.discipline, course.numberOfHours, course.numOfGroups);
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
		return "\n\tThe Course Information: "
			 + "\n\t\t - ID: " + this.id 
			 + "\n\t\t - Title: " + this.title
			 + "\n\t\t - Discipline: " + this.discipline
			 + "\n\t\t - Number Of Hours: " + this.numberOfHours
			 + "\n\t\t - Number Of Groups: " + this.numOfGroups;
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

    /**
	 * [compareTo description: compare the two courses]
	 * 
	 * @return int
	 * 
	 */
    @Override
    public int compareTo(Object courseId) {
        // TODO Auto-generated method stub
       String comparedCourse = (String) courseId;

       if (this.id.equals(comparedCourse)) {return 0;}

       if (Department.equivCourses.containsKey(this.id)) {

            if (Department.equivCourses.get(this.id).contains(comparedCourse)) {
                return 0;
            }

            else {
                return -1;
            }
       }
	   
       else {
            return -1;
       }
    }	
	
}
