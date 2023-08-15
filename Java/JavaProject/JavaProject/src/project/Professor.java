package project;

import java.time.LocalDate;
import java.util.*;


public class Professor implements Comparable<Professor> {

	private int id;
	private String name;
	private double seniority;
	private LocalDate hiringDate;
	private Set<String> setOfDisciplines;
	private ArrayList<Course> listOfAffectedCourses;

	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getSeniority() {
		return seniority;
	}

	public void setSeniority(double seniority) {
		this.seniority = seniority;
	}

	public LocalDate getHiringDate() {
		return hiringDate;
	}

	public void setHiringDate(LocalDate hiringDate) {
		this.hiringDate = hiringDate;
	}

	public Set<String> getSetOfDisciplines() {
		return setOfDisciplines;
	}

	public void setSetOfDisciplines(Set<String> setOfDisciplines) {
		this.setOfDisciplines = setOfDisciplines;
	}

	public ArrayList<Course> getListOfAffectedCourses() {
		return listOfAffectedCourses;
	}

	public void setListOfAffectedCourses(ArrayList<Course> listOfAffectedCourses) {
		this.listOfAffectedCourses = listOfAffectedCourses;
	}

	public Professor(int id, String name, double seniority, LocalDate hiringDate, Set<String> setOfDisciplines) {
		this.id = id;
		this.name = name;
		this.seniority = seniority;
		this.hiringDate = hiringDate;
		this.setOfDisciplines = setOfDisciplines;
		this.listOfAffectedCourses = null;
	}
	
	
	
	@Override
	public String toString() {
		return "Professor [id=" + id + ", name=" + name + ", seniority=" + seniority + ", hiringDate=" + hiringDate
				+ ", setOfDisciplines=" + setOfDisciplines + ", listOfAffectedCourses=" + listOfAffectedCourses + "]";
	}

	@Override
    public int compareTo(Professor p) {
		Professor professorObj = (Professor) p;
		if (this.seniority > professorObj.seniority) {
		    return 1;
		} else if (this.seniority < professorObj.seniority) {
		    return -1;
		} else {
		    int result = this.hiringDate.compareTo(professorObj.hiringDate);
		    return result == -1 ? 1 : result == 1 ? -1 : 0;
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