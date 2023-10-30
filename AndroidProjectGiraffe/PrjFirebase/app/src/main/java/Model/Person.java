package Model;

public class Person {
    private int id; // the name "id" must be matched with the documents in the database

    private String name; // the name "name" must be matched with the documents in the database
    private int age; // the name "age" must be matched with the documents in the database

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return  "ID: " + id +
                "\tName: " + name +
                "\tAge: " + age;
    }

    public Person(int id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    public Person() {

    }
}
