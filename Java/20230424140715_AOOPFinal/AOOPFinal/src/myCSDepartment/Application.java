package myCSDepartment;

import java.io.File;
import java.io.FileNotFoundException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Application {

	public static void main(String[] args) throws FileNotFoundException {
		// TODO Auto-generated method stub
		
		String basePath = new File("").getAbsolutePath();

		
		Scanner sc = new Scanner(new File(basePath+"\\txts\\courses_f22.txt"));
		
		Department dept = new Department();

		while(sc.hasNextLine()) {
			String courseLine = sc.nextLine();
			String[] temps = courseLine.split(":");
			String id = temps[0].trim();
			String title = temps[1].trim() ;
			String discipline = temps[2].trim();
			
			short numOfHours= (short) Integer.parseInt(temps[3].trim());
			
			String prqString = temps[4].trim();
			Set<String> prerequisites = new HashSet<String>();
			
			if(!prqString.equals("none")) {
				String[] prqs = prqString.split(",");
				prerequisites.addAll(Arrays.asList(prqs));
			}
			
			byte  numOfGrps = (byte) Integer.parseInt(temps[5].trim());
			Course c = new Course(id,title,discipline,numOfHours,prerequisites,numOfGrps);
			System.out.println(c);
			
			dept.add(id, c);
		}
		
		
		Student stu = new Student("2023","Khoi");
		stu.addPrevCourse("420AS2AS");
		stu.addPrevCourse("420AP1AS", 101);		

		stu.addPrevCourse("420AP1AS", 100);		
		
		stu.transcript.displayPrevCourses();
		stu.transcript.displayPrevCourse(true);
		dept.registerCourse(stu, "420PA3AS");
		
	}

}
