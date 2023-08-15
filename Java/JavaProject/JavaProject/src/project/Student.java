package project;

public class Student {
	
	private int studentId;
    private String studentName;
    private Transcript transcript;
	// Relationship between Student and Transcript is composition. 
	// A transcript cannot exist without a student and therefore its a composition. 

	
    public Student(int studentId, String studentName, Transcript transcript) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.transcript = new Transcript();
    }


	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public Transcript getTranscript() {
		return transcript;
	}

	public void setTranscript(Transcript transcript) {
		this.transcript = transcript;
	}
	
	public void addPrevCourse(String courseId, int grade) {
	    transcript.addPrevCourse(courseId, grade);
	}
	
	public void editPrevCourse(String courseId, int newGrade) {
	    transcript.addPrevCourse(courseId, newGrade);
	}


	
	
}
