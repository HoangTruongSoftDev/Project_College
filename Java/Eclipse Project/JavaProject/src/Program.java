
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

		try {

			// read the file profs.txt
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
			// create the department
			Department departmentComputerScience = new Department(listOfProfs);

			// read the file courses_f22.txt to get the course first
			String path_file_listOfCourses = "src/fileTxt/courses_f22.txt";

			File coursesFile = new File(path_file_listOfCourses);

			if (!coursesFile.exists()) {

				throw new Exception("\nThe file of list of Courses doesn't exist");

			}

			scanner = new Scanner(coursesFile);

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
			// read the file profId_select.txt
			while (!profProcessingQueue.isEmpty()) {

				ArrayList<Course> listOfAffectedCourses = new ArrayList<>();

				Professor currentProfessor = profProcessingQueue.dequeue();

				String path_file_selectCourses = "src/fileTxt/" + currentProfessor.getId() + "_select.txt";

				File professorFile = new File(path_file_selectCourses);

				if (!professorFile.exists()) {

					throw new Exception("\nThe file of professor " + currentProfessor.getId() + " doesn't exist");
				}

				scanner = new Scanner(professorFile);

				Integer requestedHour = Integer.parseInt(scanner.nextLine().strip());

				if (requestedHour > 30) {
					requestedHour = 30;
				}

				while (scanner.hasNext()) {
					String[] partOfRequestedCourse = scanner.nextLine().split(",");
					String requestedCourse = partOfRequestedCourse[0].strip();
					int requestedNumGroups = Integer.parseInt(partOfRequestedCourse[1].strip());

					if (departmentComputerScience.getCourseMap().containsKey(requestedCourse)) {
						Course currentCourse = departmentComputerScience.getCourseMap().get(requestedCourse);
						if (currentCourse.getNumOfGroups() > 0) {

							if (currentProfessor.getSetOfDisciplines().contains(currentCourse.getDicipline())) {

								if (requestedHour >= 3) {

									int potentialGroupAllocation = Math.min(requestedNumGroups,
											currentCourse.getNumOfGroups());

									while (potentialGroupAllocation > 0) {

										if (potentialGroupAllocation
												* currentCourse.getWeeklyHours() <= requestedHour) {

											Course affectedCourse = new Course(currentCourse);
											affectedCourse.setNumOfGroups(potentialGroupAllocation);

											listOfAffectedCourses.add(affectedCourse);

											requestedHour -= potentialGroupAllocation * currentCourse.getWeeklyHours();
											currentCourse.setNumOfGroups(
													currentCourse.getNumOfGroups() - potentialGroupAllocation);
											departmentComputerScience.getCourseMap().get(currentCourse.getId())
													.setNumberOfHours(currentCourse.getNumberOfHours());
											break;
										}
										potentialGroupAllocation--;
									}
								}

							}
						}
					}
				}
				for (int j = 0; j < listOfProfs.size(); j++) {

					if (listOfProfs.get(j).getId() == currentProfessor.getId()) {

						listOfProfs.get(j).setListOfAffectedCourses(listOfAffectedCourses);
						break;
					}
				}
			}

			scanner.close();
			System.out.println("\nPRINT THE FINAL RESULT======================\n");
			for (Professor pro : listOfProfs) {
				System.out.println(pro);
			}

		} 
		
		catch (Exception e) {
			System.out.println("The exception message: " + e.getMessage());
		}
	}
}
