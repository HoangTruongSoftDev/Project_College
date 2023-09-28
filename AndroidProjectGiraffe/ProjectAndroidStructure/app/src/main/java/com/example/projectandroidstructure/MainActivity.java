package com.example.projectandroidstructure;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    // 2- Declaration of the Objects
    EditText edName, edAge;
    Button btnShow, btnQuit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initialize();

        // 4 - Manipulate the objects ==> automatically manipulate the widgets

    }

    private void initialize() {
        // 3 - Link between the objects and the widgets
        edName = findViewById(R.id.edName);
        edAge = findViewById(R.id.edAge);
        btnShow = findViewById(R.id.btnShow);
        btnQuit = findViewById(R.id.btnQuit);
    }
/*
    public void showInfo(View v) {
        // Display the name and the age in the window
        String name = edName.getText().toString();
        int age = Integer.valueOf(edAge.getText().toString());
        String message = "My name is : " + name + "\n" + "My age is : " + age;
        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
    }

    public void quit(View v) {
        System.exit(0);
    }
    */

    public void processButton(View v) {
        int btnId = v.getId();
        if (btnId == R.id.btnShow) {
            String name = edName.getText().toString();
            int age = Integer.valueOf(edAge.getText().toString());
            String message = "My name is : " + name + "\n" + "My age is : " + age;
            Toast.makeText(this, message, Toast.LENGTH_LONG).show();
        }
        else if (btnId == R.id.btnQuit) {
            System.exit(0);
        }
    }
}