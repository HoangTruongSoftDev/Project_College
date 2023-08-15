import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Set;
/**
 * [Professor description: The Professor class]
 */
public class Professor implements Comparable<Professor> {
	
	private int id;
	private String name;
	private double senority;
	private LocalDate hiringDate;
	private Set<String> setOfDisciplines;
	private ArrayList<Course> listOfAffectedCourses;

	/**
	 * Professor Constructor with full parameters
	 * 
	 * @param id
	 * @param name
	 * @param senority
	 * @param hiringDate
	 * @param setOfDisciplines
	 */
	public Professor(int id, String name, double senority, LocalDate hiringDate, Set<String> setOfDisciplines) {
		this.id = id;
		this.name = name;
		if (senority > 0.00 && senority < 60.00){
			this.senority = senority;
		}
		else if (senority <= 0.00){
			this.senority = 0.00;
		}
		else {
			this.senority = 60.00;
		}
		this.hiringDate = hiringDate;
		this.setOfDisciplines = setOfDisciplines;
		this.listOfAffectedCourses = null;
	}

	/**
	 * getter of courseId
	 * 
	 * @return int
	 */
	public int getId() {
		return this.id;
	}

	/**
	 * setter of courseId
	 * 
	 * @param id
	 * @return void
	 */
	public void setId(int id) {
		this.id = id;
	}

	/**
	 * getter of courseName
	 * 
	 * @return String
	 */
	public String getName() {
		return this.name;
	}

	/**
	 * setter of coursename
	 * 
	 * @param name
	 * @return void
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * getter of senority
	 * 
	 * @return double
	 */
	public double getSenority() {
		return this.senority;
	}

	/**
	 * setter of senority
	 * 
	 * @param senority
	 * @return void
	 */
	public void setSenority(double senority) {
		if (this.senority > 0.00  && this.senority < 60.00){
			this.senority = senority;
		}
		else if (this.senority <= 0.00){
			this.senority = 0.00;
		}
		else {
			this.senority = 60.00;
		}
	}

	/**
	 * getter of hiringDate
	 * 
	 * @return LocalDate
	 */
	public LocalDate getHiringDate() {
		return this.hiringDate;
	}

	/**
	 * setter of hiringDate
	 * 
	 * @param hiringDate
	 * @return void
	 */
	public void setHiringDate(LocalDate hiringDate) {
		this.hiringDate = hiringDate;
	}

	/**
	 * getter of setOfDisciplines
	 * 
	 * @return Set<String>
	 */
	public Set<String> getSetOfDisciplines() {
		return this.setOfDisciplines;
	}

	/**
	 * setter of setOfDisciplines
	 * 
	 * @param setOfDisciplines
	 * @return void
	 */
	public void setSetOfDisciplines(Set<String> setOfDisciplines) {
		this.setOfDisciplines = setOfDisciplines;
	}

	/**
	 * getter of listOfAffectedCourses
	 * 
	 * @return ArrayList<Course>
	 */
	public ArrayList<Course> getListOfAffectedCourses() {
		return this.listOfAffectedCourses;
	}

	/**
	 * setter of listOfAffectedCourses
	 * 
	 * @param listOfAffectedCourses
	 * @return void
	 */
	public void setListOfAffectedCourses(ArrayList<Course> listOfAffectedCourses) {
		this.listOfAffectedCourses = listOfAffectedCourses;
	}

	/**
	 * [toString description: return the output of the object Professor]
	 * 
	 * @return String
	 * 
	 */
	@Override
	public String toString() {
		return "The Professor Information: "
				+ "\n + ID: " + this.id
				+ "\n + Name: " + this.name
				+ "\n + Senority: " + this.senority
				+ "\n + Hiring Date: " + this.hiringDate
				+ "\n + Set Of Disciplines: " + this.setOfDisciplines
				+ "\n + List Of Affected Courses: " + this.listOfAffectedCourses;
	}
	
	

	/**
	 * [compareTo description: compare the two professors with their senority, and if their senorities are equal, compare the hiringDate]
	 * 
	 * @param Professor professorObj
	 * 
	 * @return int
	 */
	@Override
	public int compareTo(Professor professorObj) {		 
		return this.senority > professorObj.senority ? 1
				: this.senority < professorObj.senority ? -1
						: (this.hiringDate.compareTo(professorObj.hiringDate) == -1 ? 1
								: this.hiringDate.compareTo(professorObj.hiringDate) == 1 ? -1 : 0);
			// if (this.senority > professorObj.senority) {
			// return 1;
			// }
			// else if (this.senority < professorObj.senority) {
			// return -1;
			// }
			// else {
			// if (this.hiringDate.compareTo(professorObj.hiringDate)== -1) {
			// return 1;
			// }
			// else if (this.hiringDate.compareTo(professorObj.hiringDate) == 1) {
			// return -1;
			// }
			// return 0;
			// }
	}

	/**
	 * [displayProfessor description: display the Professor based on his id in the listOfProfs]
	 *
	 * @param   int   listOfProfs
	 *
	 * @param 	ArrayList<Professor> listOfProfs
	 * 
	 * @return  void               [return description]
	 */
	public static void displayProfessor(int searchProfessorId, ArrayList<Professor> listOfProfs) {
		for (Professor currentProfessor : listOfProfs) {

			if (currentProfessor.getId() == searchProfessorId) {

				System.out.println(currentProfessor);

				break;
			}
		}
	}
}
