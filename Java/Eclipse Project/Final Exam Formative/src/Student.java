public class Student {
    private String studentId;
    private String name;
    private Transcript transcript;

    public String getStudentId() {
        return studentId;
    }
    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Transcript getTranscript() {
        return transcript;
    }
    public void setTranscript(Transcript transcript) {
        this.transcript = transcript;
    }
    
    // the Student class is composed of an Transcript class
    public Student(String studentId, String name) {
        this.studentId = studentId;
        this.name = name;
        transcript = new Transcript();
    }

    public void addPrevCourse(String courseId, int grade) {
        if (grade < 0 || grade > 100) {
            transcript.getPrevCourses().put(courseId, -1);
        }
        else {
            transcript.getPrevCourses().put(courseId, grade);
        }
    }
    public void addPrevCourse(String courseId) {
        transcript.getPrevCourses().put(courseId, -1);
    }
    public void editPrevCourse(String courseId, int grade) {
        if (transcript.getPrevCourses().containsKey(courseId)) {
            transcript.getPrevCourses().replace(courseId, grade);
        }
        else {
            System.out.println("The Student doesn't have that "+ courseId +" in transript to update th grade");
        }
    }
}
