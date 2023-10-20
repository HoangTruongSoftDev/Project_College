import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        // Scanner scanner = new Scanner(System.in);
        // System.out.println("Enter a number of month: ");
        // int number = scanner.nextInt();
        // scanner.close();
        // System.out.println("The total is: "  + String.valueOf(getSubTotal(number, 0.00f)));
        countNum(0);
    }
    // public static float getSubTotal(int numberOfMonths, float subTotal) {
    //     System.out.println(subTotal);
    //             // if (numberOfMonths >= 1 && numberOfMonths <= 11) {
    //             //     System.out.println(subTotal + " dau if 1");
    //             //     subTotal += numberOfMonths * 60;
    //             //     System.out.println(subTotal + " cuoi if 1");
    //             // }
    //             // else if (numberOfMonths >= 12 ) {
    //             //     System.out.println(subTotal + " dau if 2");
    //             //     subTotal += 600;
    //             //     int newNumberOfMonths = numberOfMonths - 12;
    //             //     System.out.println(subTotal + " Truong");
    //             //     if (newNumberOfMonths > 0)
    //             //     {
    //             //         System.out.println(subTotal + " ngu");
    //             //         subTotal = getSubTotal(newNumberOfMonths, subTotal);
    //             //         System.out.println(subTotal + " khon");
    //             //     }
    //             //     System.out.println(subTotal + " cuoi if 2");

    //             // }
    //             if (numberOfMonths >= 1 && numberOfMonths <=11) {
    //                 subTotal += numberOfMonths * 45;
    //             }
    //             else if (numberOfMonths >= 12) {
    //                 subTotal += 45 * 11;
    //                 int newNumberOfMonths = numberOfMonths - 12;
    //                 if (newNumberOfMonths > 0)
    //                     subTotal = getSubTotal(newNumberOfMonths, subTotal);
    //             }
    //             return subTotal;
    // }

    public static void countNum(int i){
        System.out.println("Trc if: " + i);
        if(i <= 1){
            System.out.println("Trong if: " + i);
            /*  countNum(i + 1); 
            // {
                num k = i + 1
                System.out.println("Trc if: " + i);
                    if(i <= 1){
                        System.out.println("Trong if: " + i);
                    }
                     System.out.println("Sau if: " + i);   
         }  */
            
        }
        System.out.println("Sau if: " + i);
        
    }
}

