package com.example.temperaturemetrixconversion;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MetrixActivity extends AppCompatActivity implements View.OnClickListener {

    EditText edMeter;
    TextView tvCentimeter, tvKilometer, tvDeveloperName;
    Button btnConvert, btnReturn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_metrix);
        initialze();
    }
    private void initialze() {
        edMeter = findViewById(R.id.edMeter);
        tvCentimeter = findViewById(R.id.tvCentimeter);
        tvKilometer = findViewById(R.id.tvKilometer);
        tvDeveloperName = findViewById(R.id.tvDeveloperName);
        btnConvert = findViewById(R.id.btnConvert);
        btnReturn = findViewById(R.id.btnReturn);

        btnConvert.setOnClickListener(this);
        btnReturn.setOnClickListener(this);

        String developerName = getIntent().getStringExtra("developerName");
        tvDeveloperName.setText(developerName);
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnConvert) {
            Double metrixInKilometer = Double.valueOf(edMeter.getText().toString()) / 1000;
            Double metrixInCentimeter = Double.valueOf(edMeter.getText().toString()) * 100;
            tvCentimeter.setText(metrixInCentimeter.toString());
            tvKilometer.setText(metrixInKilometer.toString());
        }
        else if (v.getId() == R.id.btnReturn) {
System.exit(0);
        }
    }
}