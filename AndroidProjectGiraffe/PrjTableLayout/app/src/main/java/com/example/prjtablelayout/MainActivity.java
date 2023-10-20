package com.example.prjtablelayout;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;
import android.widget.TextView;

import Model.Schedule;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    TextView[] tvList;
    int widgets[] = {R.id.tvMondayMorning, R.id.tvMondayAfternonEvening, R.id.tvTuesdayMorningAfternoon, R.id.tvTuesdayEvening};
    Schedule[] scheduleList;
    // Other declaration
    ActivityResultLauncher<Intent> actResL;
    TextView clickedTv; // set this one as global variable because when I click to this textView, I go to second activity to process it and when I return to main activity, I still process the same this textview
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
        initialize();
    }

    private void initialize() {
        tvList = new TextView[widgets.length];
        scheduleList = new Schedule[widgets.length];
        scheduleList[0] = new Schedule(100, "Android", Color.BLUE);
        scheduleList[1] = new Schedule(200, "Sport", Color.BLACK);
        scheduleList[2] = new Schedule(300, "Project");
        scheduleList[3] = new Schedule(400, "Shopping", Color.RED);

        for(int i = 0; i < widgets.length; i++) {
            tvList[i] = findViewById(widgets[i]);
            tvList[i].setText(scheduleList[i].toString());
            tvList[i].setTextColor(scheduleList[i].getTxtColor());
            tvList[i].setOnClickListener(this);
        }
        registerActResL();
    }
// Registration of Activity Result Launcher

    private void registerActResL() {
        actResL = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(), // call second activity and wait the result from it
                new ActivityResultCallback<ActivityResult>() { // when the second acttivity send the result, you will process that result through the function below
                    @Override
                    public void onActivityResult(ActivityResult o) {
                        if (o.getResultCode() == RESULT_OK) {
                            String newData = o.getData().getStringExtra("new_schedule");
                            clickedTv.setText(newData);
                        }
                    }
                }
        );
    }

    @Override
    public void onClick(View v) {
        clickedTv = (TextView)v;

        Intent intent = new Intent(this, SecondActivity.class);
        intent.putExtra("schedule", clickedTv.getText().toString());
        actResL.launch(intent);
    }
}