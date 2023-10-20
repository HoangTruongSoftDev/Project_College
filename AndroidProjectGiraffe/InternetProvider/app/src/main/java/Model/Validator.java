package Model;


public class Validator {
    public static boolean isValidId(String id) {
        if (id.matches("^\\d+$"))
            return true;
        return false;
    }
}
