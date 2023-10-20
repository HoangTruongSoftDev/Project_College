package Model;

import java.io.Serializable;

public class InternetProvider implements Serializable {

    private int clientNumber, numberOfMonths;
    private String provider;
    private float subTotal = 0f, total, tps, tvq;
    public int getClientNumber() {
        return clientNumber;
    }
    public void setClientNumber(int clientNumber) {
        this.clientNumber = clientNumber;
    }

    public String getProvider() {
        return provider;
    }

    public void setProvider(String provider) {
        this.provider = provider;
    }

    public int getNumberOfMonths() {
        return numberOfMonths;
    }

    public void setNumberOfMonths(int numberOfMonths) {
        this.numberOfMonths = numberOfMonths;
    }

    public float getSubTotal(int numberOfMonths) {
        switch (provider) {
            case "Bell":
                if (numberOfMonths >= 1 && numberOfMonths <= 11) {
                    subTotal += numberOfMonths * 60;
                }
                else if (numberOfMonths >= 12 ) {
                    subTotal += 600;
                    int newNumberOfMonths = numberOfMonths - 12;
                    if (newNumberOfMonths > 0)
                    {
                        subTotal = getSubTotal(newNumberOfMonths);
                    }

                }
                break;
            case "Videotron":
                if (numberOfMonths >= 1 && numberOfMonths <= 5) {
                    subTotal += numberOfMonths * 70;
                }
                else if (numberOfMonths >= 6 && numberOfMonths <= 11) {
                    subTotal += (numberOfMonths * 70) - 5;
                }
                else if (numberOfMonths >= 12 ) {
                    subTotal += (70 * 12) * 0.7f;
                    int newNumberOfMonths = numberOfMonths - 12;
                    if (newNumberOfMonths > 0)
                        subTotal = getSubTotal(newNumberOfMonths);
                }
                break;
            case "Acanac":
                if (numberOfMonths >= 1 && numberOfMonths <=11) {
                    subTotal += numberOfMonths * 45;
                }
                else if (numberOfMonths >= 12) {
                    subTotal += 45 * 11;
                    int newNumberOfMonths = numberOfMonths - 12;
                    if (newNumberOfMonths > 0)
                        subTotal = getSubTotal(newNumberOfMonths);
                }
                break;
            default:
                subTotal = 0;
                break;
        }
        return subTotal;
    }
    public float getTotal() {
        tps = subTotal * 0.06f;
        tvq = tps * 0.095f;
        total = tps + tvq + subTotal;
        return total;

    }
    public float getTps() {
        tps = subTotal * 0.06f;
        return tps;
    }
    public float getTvq() {
        tvq = subTotal * 0.095f;
        return tvq;
    }
    @Override
    public String toString() {
        return "- Client Number: " + clientNumber + "\n\t+ Number Of Months: " + numberOfMonths + "\n\t+ Provider: " + provider + "\n\t+ SubTotal: " + subTotal + "\n\t+ Total: " + total + "\n\t+ TPS: " + tps + "\n\t+ TVQ: " + tvq;
    }
}
