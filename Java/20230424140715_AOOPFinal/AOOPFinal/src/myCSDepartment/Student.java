package myCSDepartment;

import java.util.Set;

public class Student {
	private String studentId;
	private String name;
	public Transcript transcript;
	
	public Student(String studentId, String name) {
		this.studentId = studentId;
		this.name = name;
		this.transcript = new Transcript();
	}
	public Transcript getTranscript() {
		return transcript;
	}
	public Set<String> getPrevCourses(){
		return transcript.getPrevCourses();
	}
	public void addPrevCourse(String courseId) {
		transcript.addPrevCourse(courseId,-1);
	}
	public void addPrevCourse(String courseId, int grade) {
		if(grade<0||grade>100) {
			System.out.println("Grade only between 0 - 100");
			return;
		}
		transcript.addPrevCourse(courseId, grade);
	}
	public void editPrevCourse(String courseId,int grade) {
		if(grade<0||grade>100) {
			System.out.println("Grade only between 0 - 100");
			return;
		}
		transcript.editPrevCourse(courseId, grade);
	}
}
