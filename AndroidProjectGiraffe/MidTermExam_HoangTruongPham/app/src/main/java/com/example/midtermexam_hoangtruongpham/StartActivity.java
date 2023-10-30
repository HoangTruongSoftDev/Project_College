package com.example.midtermexam_hoangtruongpham;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.EditText;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;

import model.User;

public class StartActivity extends AppCompatActivity implements View.OnClickListener {

    EditText edUsername;
    CheckBox checkBoxBus, checkBoxMetro, checkBoxCar, checkBoxBike;
    Button btnSave, btnClearAll, btnQuit, btnShowAll;

    ArrayList<User> listOfUsers;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_start);

        initialize();
    }

    private void initialize() {
        edUsername = findViewById(R.id.edUsername);
        checkBoxBus = findViewById(R.id.checkBoxBus);
        checkBoxMetro = findViewById(R.id.checkBoxMetro);
        checkBoxCar = findViewById(R.id.checkBoxCar);
        checkBoxBike = findViewById(R.id.checkBoxBike);
        btnSave = findViewById(R.id.btnSave);
        btnClearAll = findViewById(R.id.btnClearAll);
        btnQuit = findViewById(R.id.btnQuit);
        btnShowAll = findViewById(R.id.btnShowAll);

        btnSave.setOnClickListener(this);
        btnClearAll.setOnClickListener(this);
        btnQuit.setOnClickListener(this);
        btnShowAll.setOnClickListener(this);

        listOfUsers = new ArrayList<User>();
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnSave) {
            saveUser(v);
        }
        else if (v.getId() == R.id.btnClearAll) {
            clearAll();
        }
        else if (v.getId() == R.id.btnQuit) {
                exit();
        }
        else if (v.getId() == R.id.btnShowAll) {
            showAll();
        }
    }

    private void saveUser(View view) {
        if (edUsername.getText().toString().isEmpty()) {
            Snackbar.make(view, "The Username is empty!!!", Snackbar.LENGTH_LONG).show();
            return;
        }
        String username = edUsername.getText().toString();
        String bus = "No", metro = "No", car = "No", bike = "No";
        if (checkBoxBus.isChecked()) {
            bus = "Yes";
        }
        if (checkBoxMetro.isChecked()) {
            metro = "Yes";
        }
        if (checkBoxCar.isChecked()) {
            car = "Yes";
        }if (checkBoxBike.isChecked()) {
            bike = "Yes";
        }
        User user = new User(username, bus, metro, car, bike);

        listOfUsers.add(user);
        Snackbar.make(view, "Adding the User successfully. Added User Information: \n" +  user, Snackbar.LENGTH_LONG).show();

    }

    private void clearAll() {
        edUsername.setText(null);
        checkBoxBus.setChecked(false);
        checkBoxCar.setChecked(false);
        checkBoxMetro.setChecked(false);
        checkBoxBike.setChecked(false);
        edUsername.requestFocus();
    }

    private void exit() {
        System.exit(0);
    }

    private void showAll() {
        Intent intent = new Intent(this, ResultActivity.class);
        intent.putExtra("listOfUsers", listOfUsers);
        startActivity(intent);
    }
}