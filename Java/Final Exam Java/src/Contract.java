import java.util.Set;
/**
 * [Contract description: Contract class]
 */
public class Contract {

    private String sessionDate;
    

    private Set<SessionCourse> setOfSessionCourses;

    // question 4a: the relationship between Professor and Contract is: one to many and compostion.
    //  the Contract can't exist without Professor
    // one professor can have multiple contracts
    /**
	 * Constract Constructor with full parameters
	 * 
	 * @param sessionDate
	 * @param setOfSessionCourses
	 */
    public Contract(String sessionDate, Set<SessionCourse> setOfSessionCourses) {
        this.sessionDate = new String(sessionDate);
        this.setOfSessionCourses = setOfSessionCourses;
    }

    /**
	 * getter of sessionDate
	 * 
	 * @return String
	 */
    public String getSessionDate() {
        return sessionDate;
    }

    /**
	 * setter of sessionDate
	 * 
	 * @param sessionDate
	 */
    public void setSessionDate(String sessionDate) {
        this.sessionDate = sessionDate;
    }

    /**
	 * getter of SetOfSessionCourses
	 * 
	 * @return Set<SessionCourse>
	 */
    public Set<SessionCourse> getSetOfSessionCourses() {
        return setOfSessionCourses;
    }

    /**
	 * setter of SetOfSessionCourses
	 * 
	 * @param setOfSessionCourses
	 */
    public void setSetOfSessionCourses(Set<SessionCourse> setOfSessionCourses) {
        this.setOfSessionCourses = setOfSessionCourses;
    }

    /**
	 * [toString description: return the output of the object Contract]
	 * 
	 * @return String
	 * 
	 */
    @Override
    public String toString() {
        return "\n + Contract Information: " 
                +"\n\t - Sesstion Date: " + sessionDate
                +"\n\t - Set Of Session Courses: " + setOfSessionCourses;
    }
}
