package com.example.midtermexam_hoangtruongphamlatestversion;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;

import Model.Client;
import Model.Service;

public class StartActivity extends AppCompatActivity implements View.OnClickListener {

    Button btnSave, btnClearAll, btnQuit, btnShowAll;
    EditText edClientNumber, edNumberOfKmPerDay;
    RadioGroup rgTransport;
    RadioButton rbBus, rbMetro, rbPrivateTransport, rbTaxi;

    ArrayList<Client> listOfClients;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start);
        initialize();
    }

    private void initialize() {
        btnQuit = findViewById(R.id.btnQuit);
        btnSave = findViewById(R.id.btnSave);
        btnClearAll = findViewById(R.id.btnClearAll);
        btnShowAll = findViewById(R.id.btnShowAll);
        edClientNumber = findViewById(R.id.edClientNumber);
        edNumberOfKmPerDay = findViewById(R.id.edNumberOfKmPerDay);
        rgTransport = findViewById(R.id.rgTransport);
        rbBus = findViewById(R.id.rbBus);
        rbMetro = findViewById(R.id.rbMetro);
        rbPrivateTransport = findViewById(R.id.rbPrivateTransport);
        rbTaxi = findViewById(R.id.rbTaxi);

        btnQuit.setOnClickListener(this);
        btnSave.setOnClickListener(this);
        btnClearAll.setOnClickListener(this);
        btnShowAll.setOnClickListener(this);

        listOfClients = new ArrayList<>();
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnSave) {
            saveClient(v);
        }
        if (v.getId() == R.id.btnClearAll) {
            Service.clearAllTextBox(findViewById(R.id.rootLayout));
            rgTransport.clearCheck();
        }
        if (v.getId() == R.id.btnQuit) {
            System.exit(0);
        }
        if (v.getId() == R.id.btnShowAll) {
            showAllClients();
        }
    }
    private void showAllClients() {
        Intent intent = new Intent(this, ResultActivity.class);
        intent.putExtra("clients", listOfClients);
        startActivity(intent);
    }

    private void saveClient(View view) {

        if (edClientNumber.getText().toString().isEmpty()) {
            Snackbar.make(view, "The Client Number is empty", Snackbar.LENGTH_LONG).show();
            edClientNumber.requestFocus();
            return;
        }
        if (!Service.isNumber(edClientNumber.getText().toString())) {
            Snackbar.make(view, "The Client Number must be number", Snackbar.LENGTH_LONG).show();
            edClientNumber.setText(null);
            edClientNumber.requestFocus();
            return;
        }
        int clientNumber = Integer.valueOf(edClientNumber.getText().toString());
        int transport;
        if (rgTransport.getCheckedRadioButtonId() == R.id.rbBus) {
            transport = 1;
        } else if (rgTransport.getCheckedRadioButtonId() == R.id.rbMetro) {
            transport = 2;
        } else if (rgTransport.getCheckedRadioButtonId() == R.id.rbPrivateTransport) {
            transport = 3;
        } else if (rgTransport.getCheckedRadioButtonId() == R.id.rbTaxi) {
            transport = 4;
        } else {
            Snackbar.make(view, "Please select transport type", Snackbar.LENGTH_LONG).show();
            return;
        }
        if (edNumberOfKmPerDay.getText().toString().isEmpty()) {
            Snackbar.make(view, "The Number of km per day is empty", Snackbar.LENGTH_LONG).show();
            edNumberOfKmPerDay.requestFocus();
            return;
        }
        if (!Service.isNumber(edNumberOfKmPerDay.getText().toString())) {
            Snackbar.make(view, "The Number of km per day must be number", Snackbar.LENGTH_LONG).show();
            edNumberOfKmPerDay.setText(null);
            edNumberOfKmPerDay.requestFocus();
            return;
        }
        int numberOfKmPerDay = Integer.valueOf(edNumberOfKmPerDay.getText().toString());
        Client client = new Client(clientNumber, transport, numberOfKmPerDay);
        listOfClients.add(client);
        Snackbar.make(view, "Save Client Successfully with info: \n" + client, Snackbar.LENGTH_LONG).show();
        edClientNumber.requestFocus();
        Service.clearAllTextBox(findViewById(R.id.rootLayout));
        rgTransport.clearCheck();
    }
}