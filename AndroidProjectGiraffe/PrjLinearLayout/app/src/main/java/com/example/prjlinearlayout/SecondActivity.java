package com.example.prjlinearlayout;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class SecondActivity extends AppCompatActivity implements View.OnClickListener {

    TextView tvName, tvSport;
    Button btnFinish;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        initialize();
    }

    private void initialize() {
        tvName = findViewById(R.id.tvName);
        tvSport = findViewById(R.id.tvSport);
        btnFinish = findViewById(R.id.btnFinish);
        btnFinish.setOnClickListener(this);

        // receiving data
        String name = getIntent().getStringExtra("name");
        int sport = getIntent().getIntExtra("sport", -1);
        String strSport = "";
        switch (sport) {
            case 0:
                strSport = "Soccer";
                break;
            case 1:
                strSport = "Handball";
                break;
            case 3:
                strSport = "Hockey";
                break;
            default:
                strSport = "no Sport";
                break;
        }
        tvSport.setText(strSport);
        tvName.setText(name);

    }

    @Override
    public void onClick(View v) {
        finish();
    }
}