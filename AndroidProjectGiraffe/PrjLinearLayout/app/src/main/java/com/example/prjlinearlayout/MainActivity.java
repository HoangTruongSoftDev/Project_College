package com.example.prjlinearlayout;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioGroup;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    EditText edName;
    RadioGroup rgSport;
    Button btnClear, btnNext;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialize();
    }

    private void initialize() {
        edName = findViewById(R.id.edName);
        rgSport = findViewById(R.id.rgSport);
        btnClear = findViewById(R.id.btnClear);
        btnNext = findViewById(R.id.btnNext);

        btnClear.setOnClickListener(this);
        btnNext.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.btnClear) {
            clearWidgets();
        }
        else if (id == R.id.btnNext) {
            navigateToActivitySecond();
        }
    }

    private void navigateToActivitySecond() {
        Intent intent = new Intent(this, SecondActivity.class);
        String name = edName.getText().toString();
        intent.putExtra("name", name);
        int checkRadioButton = rgSport.getCheckedRadioButtonId();
        int whichRbButton = -100;
        if (checkRadioButton == R.id.rbSoccer) {
            whichRbButton = 0;
        }
        else if (checkRadioButton == R.id.rbHandball) {
            whichRbButton = 1;
        }
        else if (checkRadioButton == R.id.rbHockey) {
            whichRbButton = 2;
        }
        intent.putExtra("sport", whichRbButton);
        startActivity(intent);
    }

    private void clearWidgets() {
        edName.setText(null);
        rgSport.clearCheck();
    }
}