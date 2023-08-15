import java.io.File;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class App {
    public static void main(String[] args) throws Exception {
        try {

            ArrayList<Professor> listOfProfs = new ArrayList<>();

            // Read the file list Of professor
            File fileOfProfs = new File("src/profs.txt");

            if (!fileOfProfs.exists()) {

                throw new Exception("The file of list of professor doesn't exist");
            }

            Scanner scanner = new Scanner(fileOfProfs);
            
            while (scanner.hasNext()) {
    
                String line = scanner.nextLine();
    
                String[] professorComponent = line.split(":");
    
                Set<String> myProfDisciplines = new HashSet<String>();
    
                for (String discipline : professorComponent[4].strip().split(",")) {

                    myProfDisciplines.add(discipline);

                }
                
                LocalDate hiringDate = LocalDate.parse(professorComponent[3].strip(),
                        DateTimeFormatter.ofPattern("d-M-yyyy"));
    
                Professor professor = new Professor(Integer.parseInt(professorComponent[0].strip()),
                        professorComponent[1].strip(),
                        Double.parseDouble(professorComponent[2].strip()),
                        hiringDate,
                        myProfDisciplines);
    
                listOfProfs.add(professor);
            }

            Department departmentComputerScience = new Department(listOfProfs);


            // Read the file list Of courses

            String pathFileListOfCourses = "src/courses_f22.txt";

			File coursesFile = new File(pathFileListOfCourses);

			if (!coursesFile.exists()) {
                scanner.close();
				throw new Exception("\nThe file of list of Courses doesn't exist");

			}

			scanner = new Scanner(coursesFile);

			while (scanner.hasNext()) {

				String eachLine = scanner.nextLine();

				String[] partOfCourse = eachLine.split(":");
                
				departmentComputerScience.addCourse(

						new Course(partOfCourse[0].strip(),
								partOfCourse[1].strip(),
								partOfCourse[2].strip(),
								Integer.parseInt(partOfCourse[3].strip()),
								Integer.parseInt(partOfCourse[4].strip())));

			}

            // Read the file list Of equivalent courses

			String pathFileEquivCourse = "src/equiv_courses.txt";

			File coursesEquivFile = new File(pathFileEquivCourse);

			if (!coursesFile.exists()) {

                scanner.close();
				throw new Exception("Missing File Equivalent Courses");

			}
            
			scanner = new Scanner(coursesEquivFile);

            while (scanner.hasNext()) {

                String line = scanner.nextLine();

                
                String[] partOfEquivCourse = line.split(":");

                // if the list of equivalent courese is none, I will ignore it
                if (!partOfEquivCourse[1].strip().equals("none") ) {

                    String[] listOfEquivalentCourse = partOfEquivCourse[1].split(",");

                    for (String currentEquivCourse : listOfEquivalentCourse) {

                        departmentComputerScience.addEquivCourse(partOfEquivCourse[0].strip(), currentEquivCourse.strip());

                    }
                }
            }
            scanner.close();

            // Question 5

            System.out.println("=============Testing Question 3===========");

            // Question 3: testing
            SessionCourse SessionCourse1 = new SessionCourse(departmentComputerScience.getCourseMap().get("420AS2AS"), "Fall 2022", 7224);

            System.out.println(SessionCourse1);

            SessionCourse SessionCourse2 = new SessionCourse(departmentComputerScience.getCourseMap().get("420PA3AS"), "Fall 2022", 7050);

            System.out.println(SessionCourse2);

            // Question 4: testing

            System.out.println("=============Testing Question 4 ===========");

            Set<SessionCourse> setOfSessionCourses = new HashSet<>();

            setOfSessionCourses.add(SessionCourse2);
            
            setOfSessionCourses.add(SessionCourse1);

            Professor prof = departmentComputerScience.getListOfProfs().get(0);

            System.out.println("===============Before adding contract ===============");
            
            System.out.println(prof);

            prof.addContract(new Contract("Fall 2022", setOfSessionCourses));

            System.out.println("==============After adding contract================");

            System.out.println(prof);

            // Question 2: Testing
            // test not equivalent
            System.out.println("=============Testing Question 2 ===========");

            Course comparedCourse = departmentComputerScience.getCourseMap().get("420JV4AS");

            if (comparedCourse.compareTo("420LS3AS") == 0) {

                System.out.println("Two of this course equivalent");

            }
            else {

                System.out.println("Two of this course not equivalent");

            }

            System.out.println("================== Before Delete ===============");
            // test equivalent
            Course comparedCourse1 = departmentComputerScience.getCourseMap().get("420LS3AS");

            if (comparedCourse1.compareTo("420PA3AS") == 0) {

                System.out.println("Two of this course equivalent");

            }
            else {

                System.out.println("Two of this course not equivalent");

            }
            // test equivalent vice versa
            Course comparedCourse3 = departmentComputerScience.getCourseMap().get("420PA3AS");

            if (comparedCourse3.compareTo("420LS3AS") == 0) {

                System.out.println("Two of this course equivalent");

            }
            else {

                System.out.println("Two of this course not equivalent");

            }
            System.out.println("================== Display Equivalent Course of 420LS3AS before deleting 420PA3AS ===============");

            departmentComputerScience.displayEquivCourse("420LS3AS");


            System.out.println("================== After Delete ===============");

            departmentComputerScience.deleteEquivCourse("420LS3AS", "420PA3AS");

            // test equivalent
            if (comparedCourse1.compareTo("420PA3AS") == 0) {

                System.out.println("Two of this course equivalent");

            }
            else {

                System.out.println("Two of this course not equivalent");

            }
            // test equivalent vice versa
            if (comparedCourse3.compareTo("420LS3AS") == 0) {

                System.out.println("Two of this course equivalent");

            }
            else {

                System.out.println("Two of this course not equivalent");

            }

            System.out.println("================== Display Equivalent Course of 420LS3AS after deleting 420PA3AS ===============");

            departmentComputerScience.displayEquivCourse("420LS3AS");


            System.out.println("=============Testing Question 1 ===========");

            for (String currentCourse : Department.equivCourses.keySet()) {

                System.out.println("The key: " + currentCourse);

                System.out.println("The list of equivalent course:");

                for (String currentEquivalentCourse : Department.equivCourses.get(currentCourse)) {

                    System.out.println("\t"+currentEquivalentCourse);

                }
            }
        } catch (Exception exception) {

            System.out.println("The problem is: " + exception.getMessage());

        }
    }
}
