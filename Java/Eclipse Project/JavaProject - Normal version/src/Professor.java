import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Set;

public class Professor implements Comparable<Professor> {
	private int id;
	private String name;
	private double senority;
	private LocalDate hiringDate;
	private Set<String> setOfDisciplines;
	private ArrayList<Course> listOfAffectedCourses;

	public Professor(int id, String name, double senority, LocalDate hiringDate, Set<String> setOfDisciplines) {
		this.id = id;
		this.name = name;
		this.senority = senority;
		this.hiringDate = hiringDate;
		this.setOfDisciplines = setOfDisciplines;
		this.listOfAffectedCourses = null;
	}

	public int getId() {
		return this.id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getSenority() {
		return this.senority;
	}

	public void setSenority(double senority) {
		this.senority = senority;
	}

	public LocalDate getHiringDate() {
		return this.hiringDate;
	}

	public void setHiringDate(LocalDate hiringDate) {
		this.hiringDate = hiringDate;
	}

	public Set<String> getSetOfDisciplines() {
		return this.setOfDisciplines;
	}

	public void setSetOfDisciplines(Set<String> setOfDisciplines) {
		this.setOfDisciplines = setOfDisciplines;
	}

	public ArrayList<Course> getListOfAffectedCourses() {
		return this.listOfAffectedCourses;
	}

	public void setListOfAffectedCourses(ArrayList<Course> listOfAffectedCourses) {
		this.listOfAffectedCourses = listOfAffectedCourses;
	}

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
	
	@Override
	public int compareTo(Professor array) {
		if (array instanceof Professor) {
			Professor professorObj = (Professor) array;
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
		} else {

			System.err.println("Can not compare because object you passed is not Professor");

			return -1;
		}
	}

	public static void displayElement(int searchProfessorId, ArrayList<Professor> listOfProfs) {
		for (Professor currentProfessor : listOfProfs) {

			if (currentProfessor.getId() == searchProfessorId) {

				System.out.println(currentProfessor);

				break;
			}
		}
	}
}
