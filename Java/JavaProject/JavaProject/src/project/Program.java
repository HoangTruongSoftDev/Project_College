package project;


import java.io.File;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
import java.util.Set;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;


public class Program {

	public static void main(String[] args) throws Exception {
		// TODO Auto-generated method stub
		
		// Question 1: Read the modified courses_f22.txt file to construct your course
		String path_file_listOfCourses = "src/fileTxt/courses_f22.txt";

		File coursesFile = new File(path_file_listOfCourses);
					
		ArrayList<Course> listOfCourse = new ArrayList<>();
					

		if (!coursesFile.exists()) {

			throw new Exception("\nThe file of list of Courses doesn't exist");

		}

		Scanner scanner = new Scanner(coursesFile);

		while (scanner.hasNext()) {

		String eachLine = scanner.nextLine().strip();

		String[] partOfCourse = eachLine.split(":");
		String[] prerequisiteIds = partOfCourse[4].split(",");
		List<String> prerequisites = new ArrayList<>();
		
		for (String currPrere : prerequisiteIds) {
			prerequisites.add(currPrere.strip());
		}

		listOfCourse.add(

		new Course(partOfCourse[0].strip(),
					partOfCourse[1].strip(),
					partOfCourse[2].strip(),
					Integer.parseInt(partOfCourse[3].strip()),
					prerequisites,
					Integer.parseInt(partOfCourse[5].strip())));

					}			
			scanner.close();

		System.out.println("===================Printing Course====================");
			
		for(Course anCourese :listOfCourse ) {
				System.out.println(anCourese);
		}
		
		System.out.println("===================Course Printed=====================");
		
		
		Department department = new Department(listOfCourse);
		
		Student student1 = new Student(123, "John Doe", new Transcript());
		
		//student1.getTranscript().addPrevCourse("420AP1AS", 80);
		student1.getTranscript().addPrevCourse("420AS2AS", 85);
		student1.getTranscript().addPrevCourse("420CT2AS", 90);

		
	    boolean registrationSuccessful = department.registerCourse(student1, "420AP1AS");
	    if (registrationSuccessful) {
	        System.out.println("Registration successful!");
	    } else {
	        System.out.println("Registration unsuccessful.");
	    }
		
	}
}


