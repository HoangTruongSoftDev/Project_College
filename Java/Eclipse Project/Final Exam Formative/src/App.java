import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Set;

public class App {
    public static void main(String[] args) throws Exception {
		try {
			
			List<Course> listOfCourses = new ArrayList<>();
			String pathFilCourses = "src/courses_f22.txt";
			File coursesFile = new File(pathFilCourses);
			if (!coursesFile.exists()) {
				throw new Exception("Missing File Courses");
			}
			Scanner scanner = new Scanner(coursesFile);
			while (scanner.hasNext()) {
				String currentLine = scanner.nextLine();
				String[] partOfCourse = currentLine.split(":");
				Course newCourse = new Course(
					partOfCourse[0].strip(),
					partOfCourse[1].strip(),
					partOfCourse[2].strip(),
					Integer.parseInt(partOfCourse[3].strip()),
					Integer.parseInt(partOfCourse[5].strip())
				);
				if (!partOfCourse[4].strip().equals("none")) {
					String[] listOfPrerequisite = partOfCourse[4].split(",");
					for (String currPre : listOfPrerequisite) {
						newCourse.addPrerequisite(currPre.strip());
					}
				}
				listOfCourses.add(newCourse);
			}
			scanner.close();
			Student student1 = new Student("1", "Truong");
			student1.addPrevCourse("420AS2AS", 80);
			student1.addPrevCourse("420CT2AS", 70);
			Student student2 = new Student("2", "Hoang");
			student2.addPrevCourse("420AP1AS", 80);
			List<Student> listOfStudent = new ArrayList<Student>();
			listOfStudent.add(student1);
			listOfStudent.add(student2);
			Department department = new Department(listOfStudent);
			for (Course currentCourse : listOfCourses) {
				department.addCourse(currentCourse);
			}
		
			boolean check = department.registerCourse(student2, "420TT4AS");
			if (check) {
				System.out.println("\nRegister Sucessfully");
			}
			else {
				System.out.println("\nRegister UnSucessfully");
			}
			System.out.println("========================================");
			student1.getTranscript().displayPrevCourses("displayGrade");
			System.out.println("========================================");
			System.out.println(department.getCourseMap().get("420TT4AS"));
		}catch (Exception exception) {
            System.out.println("The problem is: " + exception.getMessage());
        }
        
    }
}
