
import java.io.File;
import java.io.FileNotFoundException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;
import java.util.Set;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

public class Program {

	public static void main(String[] args) throws FileNotFoundException {
		// TODO Auto-generated method stub

		// Create the list of professor and profProcessingQueue

		ArrayList<Professor> listOfProfs = new ArrayList<>();

		MyPriorityQueue<Professor> profProcessingQueue = new MyPriorityQueue<>();

		

			// read the file profs.txt
			Application.processListOfProfessors(listOfProfs, profProcessingQueue);
		
			// create the department
			Department departmentComputerScience = new Department(listOfProfs);

			// read the file courses_f22.txt to get the course first
			Application.processListOfCourses(departmentComputerScience);

			// read the file profId_select.txt
			
			Application.processProfessorCourseSelection( profProcessingQueue, departmentComputerScience,  listOfProfs);

			System.out.println("\nPRINT THE FINAL RESULT======================\n");
			for (Professor pro : listOfProfs) {
				System.out.println(pro);
			}

		} 		
	}

