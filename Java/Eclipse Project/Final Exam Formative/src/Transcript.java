import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

public class Transcript {

    private Map<String, Integer> prevCourses;

    public Map<String, Integer> getPrevCourses() {
        return prevCourses;
    }
    public void setPrevCourses(Map<String, Integer> prevCourses) {
        this.prevCourses = prevCourses;
    }
    public Transcript() {
		this.prevCourses = new HashMap<>();
	}
    public void displayPrevCourses() {
        for (String currentCourse : prevCourses.keySet()) {
            System.out.println("Prerequisite: " + currentCourse);
        }
    } 
    public void displayPrevCourses(String displayGrade) {
        if (displayGrade == "displayGrade") {
            for (String currentCourse : prevCourses.keySet()) {
                System.out.println("Prerequisite: " + currentCourse + " and Grade: " + prevCourses.get(currentCourse));
            }
        }
    }
}
