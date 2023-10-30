package Model;

enum Brand {
    TOYOTA("Toyota"), MAZDA("Mazda"), HYUNDAI("Hyundai");
    private String brand;
    private Brand(String brand) {
        this.brand = brand;
    }
    public String getBrand() {
        return this.brand;
    }
}


