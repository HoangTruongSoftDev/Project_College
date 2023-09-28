package com.example.calculationapp;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText edNumber1, edNumber2;
    TextView tvResult;
    RadioButton rbAdd, rbMultiply, rbSubtraction;
    RadioGroup rgCalculator;
    Button btnCalculate, btnClear, btnQuit;


    private void initialize() {
        edNumber1 = findViewById(R.id.edNumber1);
        edNumber2 = findViewById(R.id.edNumber2);

        tvResult = findViewById(R.id.tvResult);


        rbAdd = findViewById(R.id.rbAdd);
        rbMultiply = findViewById(R.id.rbMultiply);
        rbSubtraction = findViewById(R.id.rbSubtract);
        rgCalculator = findViewById(R.id.rgCalculator);


        btnCalculate = findViewById(R.id.btnCalculate);
        btnClear = findViewById(R.id.btnClear);
        btnQuit = findViewById(R.id.btnQuit);


    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialize();
    }

    public void processButton(View v) {

        int btnId = v.getId();
        if (btnId == R.id.btnCalculate) {
            if (edNumber1.getText().toString().isEmpty()) {
                Toast.makeText(this, R.string.missing_number_1, Toast.LENGTH_LONG).show();
                return;
            }

            if (edNumber2.getText().toString().isEmpty()) {
                Toast.makeText(this, R.string.missing_number_2,Toast.LENGTH_LONG).show();
                return;
            }

            if (!isNumber(edNumber1.getText().toString())) {
                Toast.makeText(this, R.string.not_number_1, Toast.LENGTH_LONG).show();
                return;
            }

            if (!isNumber(edNumber2.getText().toString())) {
                Toast.makeText(this, R.string.not_number_2, Toast.LENGTH_LONG).show();
                return;
            }

            double result;

            if (rgCalculator.getCheckedRadioButtonId() == R.id.rbAdd) {
                result = Double.valueOf(edNumber1.getText().toString()) + Double.valueOf(edNumber2.getText().toString());
                tvResult.setText(String.valueOf(result));
            }
            else if (rgCalculator.getCheckedRadioButtonId() == R.id.rbMultiply) {
                result = Double.valueOf(edNumber1.getText().toString()) * Double.valueOf(edNumber2.getText().toString());
                tvResult.setText((String.valueOf(result)));
            }
            else if (rgCalculator.getCheckedRadioButtonId() == R.id.rbSubtract) {
                result = Double.valueOf(edNumber1.getText().toString()) - Double.valueOf(edNumber2.getText().toString());
                tvResult.setText((String.valueOf(result)));
            }

            rgCalculator.clearCheck();
            clearAllEditText((ViewGroup)findViewById(R.id.rootLayout));

        }
        else if (btnId == R.id.btnClear) {
            rgCalculator.clearCheck();
            clearAllEditText((ViewGroup)findViewById(R.id.rootLayout));
            tvResult.setText("[........................]453");
            edNumber1.requestFocus();
        }
        else if (btnId == R.id.btnQuit) {
            Toast.makeText(this,"Thank you for using our app", Toast.LENGTH_LONG);
            finish();
        }
    }
    public boolean isNumber(String number) {
        if (number.matches("^[-+]?(\\d+[.])?\\d+$")) {
            return true;
        }
        return false;
    }

    public void clearAllEditText(ViewGroup viewGroup) {
        for (int i = 0; i < viewGroup.getChildCount(); i++) {

            View child = viewGroup.getChildAt(i);

            if (child instanceof ViewGroup) {
                clearAllEditText((ViewGroup)child);
            }

            else if (child instanceof EditText) {
                ((EditText) child).setText(null);
            }
        }

    }
}