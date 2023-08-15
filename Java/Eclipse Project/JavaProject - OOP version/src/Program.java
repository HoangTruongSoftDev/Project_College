
import java.io.FileNotFoundException;
import java.util.ArrayList;
public class Program {

	/**
	 * [main description: It will process the whole project]
	 *
	 * @param String[] args
	 * 
	 * @return  void   
	 */
	public static void main(String[] args) throws FileNotFoundException {
		System.out.println();
		// TODO Auto-generated method stub

		// Create the list of professor and profProcessingQueue

		ArrayList<Professor> listOfProfs = new ArrayList<>();

		MyPriorityQueue<Professor> profProcessingQueue = new MyPriorityQueue<>();

	
		// read the file profs.txt
		Application.processListOfProfessors(listOfProfs, profProcessingQueue);

		System.out.println("\nPRINT THE Professor Queue======================\n");
		profProcessingQueue.displayAllElement();
		
		// create the department
		Department departmentComputerScience = new Department(listOfProfs);

		// read the file courses_f22.txt to get the course list of course and add to the courseMap of departmentComputerScience
		Application.processListOfCourses(departmentComputerScience);

		// read the file profId_select.txt
		
		Application.processProfessorCourseSelection(profProcessingQueue, departmentComputerScience,  listOfProfs);

		System.out.println("\nPRINT THE FINAL RESULT======================\n");
		for (Professor pro : listOfProfs) {
			System.out.println(pro);
		}
	} 		
}

