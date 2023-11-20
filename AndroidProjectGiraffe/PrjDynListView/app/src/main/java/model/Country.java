package model;

import androidx.annotation.Nullable;

public class Country implements Comparable {
    private String cName;
    private String cCapital;



    public Country(String cName, String cCapital) {
        this.cName = cName;
        this.cCapital = cCapital;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getcCapital() {
        return cCapital;
    }

    public void setcCapital(String cCapital) {
        this.cCapital = cCapital;
    }

    @Override
    public String toString() {
        return cName;
    }

    @Override
    public boolean equals (@Nullable Object obj) {
        Country otherC = (Country)obj;
        if (otherC.getcName().equals( this.getcName())) {
            return true;
        }
        return false;
    }

    @Override
    public int compareTo(Object o) {
        Country otherCountry = (Country)o;
        return cName.compareTo(otherCountry.cName);
    }
}
