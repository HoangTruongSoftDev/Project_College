package Service;

public  class Service {
    public static String formatAppropriateWord(String rawWord) {
        String[] words = rawWord.split("\\s+");
        StringBuilder result = new StringBuilder();

        for (String word : words) {
            result.append(Character.toUpperCase(word.charAt(0)))
                    .append(word.substring(1).toLowerCase())
                    .append(" ");
        }
        return result.toString().trim();
    }

    public static boolean isValidPositiveNumber(String input) {
        if (input.matches("^\\d+$")) {
            return true;
        }
        return false;
    }
}
