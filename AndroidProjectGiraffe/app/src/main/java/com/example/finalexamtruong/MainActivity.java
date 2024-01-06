package com.example.finalexamtruong;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;

import java.util.ArrayList;

import model.Event;
import model.FileManagement;

// Hoang Truong Pham 2130169
public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    ListView lvStudentActivities;
    Button btnQuit, btnBestEvent;
    ArrayList<Event> eventList;
    ArrayAdapter<Event> eventAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        lvStudentActivities = findViewById(R.id.lvStudentActivities);
        btnQuit = findViewById(R.id.btnQuit);
        btnBestEvent = findViewById(R.id.btnBestEvent);

        btnQuit.setOnClickListener(this);
        btnBestEvent.setOnClickListener(this);

        eventList = new ArrayList<>();
        eventList = FileManagement.readFile(this, "events.txt");
        eventAdapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, eventList);
        lvStudentActivities.setAdapter(eventAdapter);
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnBestEvent) {

        }
        else if (v.getId() == R.id.btnQuit) {

        }
    }
}