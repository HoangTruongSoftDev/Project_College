import java.io.File;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

/**
 * [Application This class is used to process with the objects of MyPriorityQueue<Professor>, Department, ArrayList<Professor> followed by the some txt files]
 * 
 */
public class Application {

    /**
     * [processListOfProfessors 
     * Description: 
     * This static function will pass the arguments which are object of ArrayList<Professor> and MyPriorityQueue<Professor> to add the professors from the profs.txt into the listOfProfs and profProcessingQueue based on their senority]
     *
     * @param   ArrayList<Professor>    listOfProfs
     * 
     * @param   MyPriorityQueue<Professor>  profProcessingQueue
     * 
     * @return  void    [return description]
     */
    public static void processListOfProfessors(ArrayList<Professor> listOfProfs, MyPriorityQueue<Professor> profProcessingQueue) {
        try {
            File fileOfProfs = new File("src/fileTxt/profs.txt");

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
    
                profProcessingQueue.enqueue(professor);
            }
            scanner.close();
        }
        catch (Exception exception) {
                System.out.println("The problem is: " + exception.getMessage());
        }        
    }

    /**
     * [processListOfCourses
     * Description: 
     * This static function will pass the arguments which are object of Department to add the Courses from the courses_f22.txt into the courseMap of departmentComputerScience]
     *
     * @param   Department  departmentComputerScience
     * 
     * @return  void    [return description]
     */
    public static void processListOfCourses(Department departmentComputerScience) {
        try {
            String path_file_listOfCourses = "src/fileTxt/courses_f22.txt";

			File coursesFile = new File(path_file_listOfCourses);

			if (!coursesFile.exists()) {

				throw new Exception("\nThe file of list of Courses doesn't exist");

			}

			Scanner scanner = new Scanner(coursesFile);

			while (scanner.hasNext()) {

				String eachLine = scanner.nextLine();

				System.out.println(eachLine);

				String[] partOfCourse = eachLine.split(":");
                
				departmentComputerScience.addCourse(

						new Course(partOfCourse[0].strip(),
								partOfCourse[1].strip(),
								partOfCourse[2].strip(),
								Integer.parseInt(partOfCourse[3].strip()),
								Integer.parseInt(partOfCourse[4].strip())));

			}
            scanner.close();
        }
        catch(Exception exception) {
            System.out.println("The problem is: " + exception.getMessage());
        }
    }

    /**
     * [processProfessorCourseSelection 
     * Description: 
     * This static function will pass the arguments which are object of MyPriorityQueue<Professor>, Department and ArrayList<Professor> to add the  filter from professor's course selection and add the qualified Courses into AffectedCourses of the Professor]
     *
     * @param MyPriorityQueue<Professor> profProcessingQueue
     * 
     * @param Department departmentComputerScience
     * 
     * @param ArrayList<Professor> listOfProfs
     * 
     * @return  void    [return description]
     */
    public static void processProfessorCourseSelection(MyPriorityQueue<Professor> profProcessingQueue, Department departmentComputerScience, ArrayList<Professor> listOfProfs) {
        try {
            while (!profProcessingQueue.isEmpty()) {

                ArrayList<Course> listOfAffectedCourses = new ArrayList<>();
    
                Professor currentProfessor = profProcessingQueue.dequeue();
    
                String path_file_selectCourses = "src/fileTxt/" + currentProfessor.getId() + "_select.txt";

                File professorFile = new File(path_file_selectCourses);
                
                try {
                    if (!professorFile.exists()) {
    
                        throw new Exception("\nThe file of professor " + currentProfessor.getId() + " doesn't exist");
                    
                    }
                }
                catch (Exception subException) {

                    System.out.println("The problem is: " + subException.getMessage());
                    continue;

                }
                    
                Scanner scanner = new Scanner(professorFile);
    
                Integer requestedHour = Integer.parseInt(scanner.nextLine().strip());
    
                if (requestedHour > 30) {
                    requestedHour = 30;
                }
    
                while (scanner.hasNext()) {

                    String[] partOfRequestedCourse = scanner.nextLine().split(",");

                    String requestedCourse = partOfRequestedCourse[0].strip();

                    int requestedNumGroups = Integer.parseInt(partOfRequestedCourse[1].strip());
                        
                    if (!departmentComputerScience.getCourseMap().containsKey(requestedCourse)) {

                        System.out.println("The course which is " + requestedCourse + " and selected by " + currentProfessor.getName() + " isn't available");
                        continue;
                    }

                    Course currentCourse = departmentComputerScience.getCourseMap().get(requestedCourse);

                    if (currentCourse.getNumOfGroups() <= 0) {

                        System.out.println("The course which is " + currentCourse.getId() + " and selected by " + currentProfessor.getName() + " is out of stock");
                        continue;

                    }   

                    if (currentProfessor.getSetOfDisciplines().contains(currentCourse.getDiscipline()) && requestedHour >= 3) {
    
                        int potentialGroupAllocation = Math.min(requestedNumGroups, currentCourse.getNumOfGroups());
    
                        while (potentialGroupAllocation > 0) {
    
                            if (potentialGroupAllocation*currentCourse.getWeeklyHours() <= requestedHour) {
    
                                Course affectedCourse = new Course(currentCourse);
                                                
                                affectedCourse.setNumOfGroups(potentialGroupAllocation);
    
                                listOfAffectedCourses.add(affectedCourse);
    
                                requestedHour -= potentialGroupAllocation * currentCourse.getWeeklyHours();

                                currentCourse.setNumOfGroups(currentCourse.getNumOfGroups() - potentialGroupAllocation);

                                departmentComputerScience.getCourseMap().get(currentCourse.getId()).setNumberOfHours(currentCourse.getNumberOfHours());
                                                
                                break;
                            }
                            potentialGroupAllocation--;
                        }
                    } 
                        
                    else {
                        System.out.println("The course which is " + currentCourse.getId() + " and selected by " + currentProfessor.getName() + " is not acceptable for this professor");
                    }                      
                }
                for (int j = 0; j < listOfProfs.size(); j++) {
                           
                    if (listOfProfs.get(j).getId() == currentProfessor.getId()) {
    
                        listOfProfs.get(j).setListOfAffectedCourses(listOfAffectedCourses);
                        break;
                    }
                }
                scanner.close();
            }
                
        }
        catch (Exception exception) {
            System.out.println("The problem is: " + exception.getMessage());
        }
    }
}
