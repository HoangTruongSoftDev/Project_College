package Model;

public class Car {
    private int id;
    private String brand;
    private String status;
    private double price;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Car(int id, String brand, String status, double price) {
        this.id = id;
        this.brand = brand;
        this.status = status;
        this.price = price;
    }


}
