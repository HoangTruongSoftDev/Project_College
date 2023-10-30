package Model;

import java.io.Serializable;

public class Client implements Serializable {
    private int clNumber;
    private int transType;
    private int nbKlm;

    @Override
    public String toString() {
        return "Client{" +
                "clNumber=" + clNumber +
                ", transType=" + transType +
                ", nbKlm=" + nbKlm +
                '}';
    }

    public int getClNumber() {
        return clNumber;
    }

    public void setClNumber(int clNumber) {
        this.clNumber = clNumber;
    }

    public int getTransType() {
        return transType;
    }

    public void setTransType(int transType) {
        this.transType = transType;
    }

    public int getNbKlm() {
        return nbKlm;
    }

    public void setNbKlm(int nbKlm) {
        this.nbKlm = nbKlm;
    }

    public Client(int clNumber, int transType, int nbKlm) {
        this.clNumber = clNumber;
        this.transType = transType;
        this.nbKlm = nbKlm;
    }
}
