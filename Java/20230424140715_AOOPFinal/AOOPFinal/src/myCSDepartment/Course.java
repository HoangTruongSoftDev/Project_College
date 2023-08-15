package myCSDepartment;

import java.util.Set;

public class Course {

	

	private String id;
	private String title;
	private String discipline;
	private short numberOfHours;
	private byte numberOfGroups;
	private Set<String> prerequisites;
	
	/* The chosen data structure is set
	 * because the prerequisites are unique
	 * and you don't want to have the same
	 * course id multiple times
	 * 
	 * It won't need a setter because there are add/delete prerequisites methods
	 * and the information come from the files, not for the developer to modify.
	 * 
	 * We will need a setter to access the prerequisites
	 */
	
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDiscipline() {
		return discipline;
	}

	public void setDiscipline(String discipline) {
		this.discipline = discipline;
	}

	public short getNumberOfHours() {
		return numberOfHours;
	}

	public void setNumberOfHours(short numberOfHours) {
		this.numberOfHours = numberOfHours;
	}

	public byte getNumberOfGroups() {
		return numberOfGroups;
	}

	public void setNumberOfGroups(byte numberOfGroups) {
		this.numberOfGroups = numberOfGroups;
	}

	public void addPrerequisite(String id) {
		prerequisites.add(id);
	}
	
	public void deletePrerequisite(String id) {
		prerequisites.remove(id);
	}

	public Set<String> getPrerequisite() {
		return this.prerequisites;
	}
	public void displayPrerequisites() {

		System.out.println(prerequisites.toString());
	}
	public Course(String id, String title, String discipline, short numberOfHours,Set<String> prerequisites, byte numberOfGroups) {
		super();
		this.id = id;
		this.title = title;
		this.discipline = discipline;
		this.numberOfHours = numberOfHours;
		this.numberOfGroups = numberOfGroups;
		this.prerequisites = prerequisites;
	}

	@Override
	public String toString() {
		return "Course [id=" + id + ", title=" + title + ", discipline=" + discipline + ", numberOfHours="
				+ numberOfHours +", prerequisites="+prerequisites+", numberOfGroups=" + numberOfGroups + "]";
	}
	
	public Course(Course c,int numOfGrp) {
		//this(c.id,c.title,c.discipline,c.numberOfHours,c.numberOfGroups);
		//this.numberOfGroups = numOfGroups;
		
		this.id = new String(c.id);
		this.title = new String(c.title);
		this.discipline = new String(c.discipline);
		this.numberOfHours = c.numberOfHours;
		this.numberOfGroups =(byte) numOfGrp;
 	}
	
	public void decreaseGroup() {
		if(this.numberOfGroups==0)
			return;
		this.numberOfGroups -=1;
	}
	
}
