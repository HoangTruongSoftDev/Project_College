package Model;

import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;

public class Service {
    public static boolean isNumber(String input) {
        if (input.matches("^\\d+(.\\d+)?$")) {
            return true;
        }
        return false;
    }

    public static void clearAllTextBox(ViewGroup viewGroup) {
        for (int i = 0; i < viewGroup.getChildCount(); i++) {
            View child = viewGroup.getChildAt(i);
            if (child instanceof ViewGroup) {
                clearAllTextBox((ViewGroup) child);
            }
            else if (child instanceof EditText) {
                ((EditText) child).setText(null);
            }
        }
    }
}
