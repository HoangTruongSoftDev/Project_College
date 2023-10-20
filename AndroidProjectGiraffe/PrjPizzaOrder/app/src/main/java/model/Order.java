package model;

import androidx.annotation.NonNull;

import java.io.Serializable;

public class Order implements Serializable {
    private int clNum;
    private String pizzaType;
    private int nbSlices;

    public Order(int clNum, String pizzaType, int nbSlices) {
        this.clNum = clNum;
        this.pizzaType = pizzaType;
        this.nbSlices = nbSlices;
    }

    public Order(int clNum, String pizzaType) {
        this.clNum = clNum;
        this.pizzaType = pizzaType;
        this.nbSlices = 1;
    }

    @NonNull
    @Override
    public String toString() {
        return "Client: " + clNum + "\tPizza: " + pizzaType + "\tNb Slices: " + nbSlices + "Amount: " + getAmount(pizzaType, nbSlices);
    }

    public int getClNum() {
        return clNum;
    }

    public void setClNum(int clNum) {
        this.clNum = clNum;
    }

    public String getPizzaType() {
        return pizzaType;
    }

    public void setPizzaType(String pizzaType) {
        this.pizzaType = pizzaType;
    }

    public int getNbSlices() {
        return nbSlices;
    }

    public void setNbSlices(int nbSlices) {
        this.nbSlices = nbSlices;
    }
    public static float getAmount(String pizzaType, int nbSlices) {
        try {
            return getPrice(pizzaType)*nbSlices;
        }
        catch (Exception e) {
            return -1;
        }

    }

    private static float getPrice(String pizzaType) throws Exception {
        float price = 0f;
        if (pizzaType.equals("Vegetarian"))
            price = 2.5f;
        else if (pizzaType.equals("Mexican"))
            price = 2.4f;
        else if (pizzaType.equals("Cheese"))
            price = 2.0f;
        else
            throw new Exception("Please select a pizza");
        return price;
    }
}
