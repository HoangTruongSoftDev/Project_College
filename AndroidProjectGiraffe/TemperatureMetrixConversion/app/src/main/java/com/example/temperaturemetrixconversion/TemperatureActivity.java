package com.example.temperaturemetrixconversion;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class TemperatureActivity extends AppCompatActivity implements View.OnClickListener {

    TextView tvDeveloperName, tvTempInF;
    EditText edTempInC;
    Button btnConvert, btnReturn;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_temperature);
        initialize();


    }

    private void initialize() {
        tvDeveloperName = findViewById(R.id.tvDeveloperName);
        tvTempInF = findViewById(R.id.tvTempInF);
        edTempInC = findViewById(R.id.edTempInC);

        btnConvert = findViewById(R.id.btnConvert);
        btnReturn = findViewById(R.id.btnReturn);

        btnConvert.setOnClickListener(this);
        btnReturn.setOnClickListener(this);

        tvDeveloperName.setText(getIntent().getStringExtra("developerName"));
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.btnConvert) {
            double tempInF = (Double.valueOf(edTempInC.getText().toString()) * 1.8) + 32;
            tvTempInF.setText(String.valueOf(tempInF));
        }
        else if (id == R.id.btnReturn) {
            System.exit(0);
        }
    }
}