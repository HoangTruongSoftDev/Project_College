
public class Course {
	private String id;
	private String title;
	private String dicipline;
	private int numberOfHours;
	private int numOfGroups;
	
	public Course (String id, String title, String dicipline, int numberOfHours) {
		this.id = id ;
		this.title = title;
		this.dicipline = dicipline;
		this.numberOfHours = numberOfHours;
		this.numOfGroups = 0;
	}
	public Course(String id, String title, String dicipline, int numberOfHours, int numOfGroups) {
		this(id, title, dicipline, numberOfHours);
		this.numOfGroups = numOfGroups;
	}
	public Course(Course course) {
		this(course.id, course.title, course.dicipline, course.numberOfHours, course.numOfGroups);
	}
	
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
	public String getDicipline() {
		return dicipline;
	}
	public void setDicipline(String dicipline) {
		this.dicipline = dicipline;
	}
	public int getNumberOfHours() {
		return numberOfHours;
	}
	public void setNumberOfHours(int numberOfHours) {
		this.numberOfHours = numberOfHours;
	}
	public int getNumOfGroups() {
		return numOfGroups;
	}
	public void setNumOfGroups(int numOfGroups) {
		this.numOfGroups = numOfGroups;
	}
	@Override
	public String toString() {
		return "\n\tThe Course Information: "
			 + "\n\t\t - ID: " + this.id 
			 + "\n\t\t - Title: " + this.title
			 + "\n\t\t - Discipline: " + this.dicipline
			 + "\n\t\t - Number Of Hours: " + this.numberOfHours
			 + "\n\t\t - Number Of Groups: " + this.numOfGroups;
	}
	
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
