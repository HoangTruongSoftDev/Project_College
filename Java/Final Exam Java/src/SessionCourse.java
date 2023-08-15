/**
 * [SessionCourse description: SessionCourse class]
 */
public class SessionCourse extends Course {

    private String sessionDate;
    private int groupNumber; 

    /**
	 * SessionCourse Constructor with full parameters 
	 * 
	 * @param Course course
	 * @param String sessionDate
	 * @param int groupNumber
     * 
	 */
    public SessionCourse(Course course, String sessionDate, int groupNumber) {
        super(course);
        //TODO Auto-generated constructor stub
        this.sessionDate = new String(sessionDate);
        this.groupNumber = groupNumber;
    }

    /**
	 * SessionCourse Constructor with full parameters
	 * 
	 * @param id
	 * @param title
	 * @param discipline
	 * @param numberOfHours
     * @param sessionDate
	 * @param groupNumber
     * 
	 */

    public SessionCourse(String id, String title, String discipline, int numberOfHours, int numOfGroups, String sessionDate, int groupNumber) {
		super(id, title, discipline, numberOfHours, numOfGroups);
        this.sessionDate = new String(sessionDate);
        this.groupNumber = groupNumber;
	}

    /**
	 * [toString description: return the output of the object SessionCourse]
	 * 
	 * @return String
	 * 
	 */

    @Override
    public String toString() {
      return super.toString() + "\n\t\t - Session Date: " + this.sessionDate
                          + "\n\t\t - Group Number: " + this.groupNumber;
    }
}
