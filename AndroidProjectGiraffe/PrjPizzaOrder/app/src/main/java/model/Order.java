package model;

import androidx.annotation.NonNull;

public class Order {
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
        return "Client: " + clNum + "\tPizza: " + pizzaType + "\tNb Slices: " + nbSlices + "Amount: " + getAmount();
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
    private float getAmount() {
        float amount = 0f;
        if (pizzaType.equals("Vegetarian"))
            amount = nbSlices * 2.5f;
        else
            if (pizzaType.equals("Cheese"))
                amount = nbSlices * 2.0f;
            else
                if (pizzaType.equals("Mexican"))
                    amount = nbSlices * 2.4f;
                return amount;

    }
}
