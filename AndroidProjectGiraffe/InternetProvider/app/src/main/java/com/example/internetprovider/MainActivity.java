package com.example.internetprovider;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

import Model.InternetProvider;
import Model.Validator;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    EditText edClientNumber, edNumberOfMonths;
    RadioButton rbBell, rbVideotron, rbAcanac;
    TextView tvSubTotal, tvTps, tvTvq, tvTotal, tvTesting;
    Button btnSave, btnShowAll, btnExit;
    RadioGroup rgProvider;
    ArrayList<InternetProvider> listOfInternetProviders;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        edClientNumber = findViewById(R.id.edClientNumber);
        edNumberOfMonths = findViewById(R.id.edNumberOfMonths);
        rbBell = findViewById(R.id.rbBell);
        rbVideotron = findViewById(R.id.rbVideotron);
        rbAcanac = findViewById(R.id.rbAcanac);
        tvSubTotal = findViewById(R.id.tvSubTotal);
        tvTps = findViewById(R.id.tvTps);
        tvTvq = findViewById(R.id.tvTvq);
        tvTotal = findViewById(R.id.tvTotal);
        btnSave = findViewById(R.id.btnSave);
        btnShowAll = findViewById(R.id.btnShowAll);
        btnExit = findViewById(R.id.btnExit);
        rgProvider = findViewById(R.id.rgProvider);
        tvTesting = findViewById(R.id.tvTesting);
        listOfInternetProviders = new ArrayList<>();
        btnSave.setOnClickListener(this);
        btnShowAll.setOnClickListener(this);
        btnExit.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnSave) {
            InternetProvider internetProvider = new InternetProvider();
            if (edClientNumber.getText().toString().isEmpty()) {
                Toast.makeText(this, "You have to enter the Client Number", Toast.LENGTH_LONG).show();

                return;
            }
            if (!Validator.isValidId(edClientNumber.getText().toString())) {
                Toast.makeText(this, "Client Number must be integer", Toast.LENGTH_LONG).show();
                edClientNumber.setText(null);
                return;
            }
            internetProvider.setClientNumber(Integer.valueOf(edClientNumber.getText().toString()));
            if (rgProvider.getCheckedRadioButtonId() == R.id.rbBell) {
                internetProvider.setProvider("Bell");
            }
            else if (rgProvider.getCheckedRadioButtonId() == R.id.rbVideotron) {
                internetProvider.setProvider("Videotron");
            }
            else if (rgProvider.getCheckedRadioButtonId() == R.id.rbAcanac) {
                internetProvider.setProvider("Acanac");
            }
            else {
                Toast.makeText(this, "You have to choose the Provider first", Toast.LENGTH_LONG).show();
                return;
            }
            if (edNumberOfMonths.getText().toString().isEmpty()){
                Toast.makeText(this, "You have to enter the Number of Months first", Toast.LENGTH_LONG).show();
                return;
            }
            if (!Validator.isValidId(edNumberOfMonths.getText().toString())) {
                Toast.makeText(this, "Number of month must be integer", Toast.LENGTH_LONG).show();
                return;
            }
            internetProvider.setNumberOfMonths(Integer.valueOf(edNumberOfMonths.getText().toString()));
            tvSubTotal.setText(String.valueOf(internetProvider.getSubTotal(internetProvider.getNumberOfMonths())));
            tvTps.setText(String.valueOf(internetProvider.getTps()));
            tvTvq.setText(String.valueOf(internetProvider.getTvq()));
            tvTotal.setText(String.valueOf(internetProvider.getTotal()));
            tvTesting.setText(internetProvider.toString());
            listOfInternetProviders.add(internetProvider);
            Toast.makeText(this, "Saving Information Successfully", Toast.LENGTH_LONG).show();
        } else if (v.getId() == R.id.btnShowAll) {
            Intent intent = new Intent(this, SecondActivity.class);
            intent.putExtra("listOfInternetProviders", listOfInternetProviders);
            startActivity(intent);
        } else if (v.getId() == R.id.btnExit) {
            System.exit(0); // use this one if you want to close the whole app
            finish(); // use this one if you just want to close the current activity not the whole app
        }
    }
}