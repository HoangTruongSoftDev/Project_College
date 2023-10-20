package com.example.temperaturemetrixconversion;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    EditText edDeveloperName;
    Button btnTemperature, btnMetrix, btnQuit;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();

    }
    private void initialize() {
        edDeveloperName = findViewById(R.id.edDeveloperName);
        btnTemperature = findViewById(R.id.btnTemperature);
        btnMetrix = findViewById(R.id.btnMetrix);
        btnQuit = findViewById(R.id.btnQuit);

        btnTemperature.setOnClickListener(this);
        btnMetrix.setOnClickListener(this);
        btnQuit.setOnClickListener(this);
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.btnQuit) {
            System.exit(0);
        }
        else if (id == R.id.btnMetrix || id == R.id.btnTemperature) {
            Class<?> destination = (id == R.id.btnMetrix) ? MetrixActivity.class : TemperatureActivity.class;
            Intent intent = new Intent(this, destination);
            intent.putExtra("developerName", edDeveloperName.getText().toString());
            startActivity(intent);
        }
//        if (id == R.id.btnTemperature) {
//                Intent intent = new Intent(this, TemperatureActivity.class);
//                intent.putExtra("developerName", edDeveloperName.getText().toString());
//                startActivity(intent);
//        }
//        else if (id == R.id.btnMetrix) {
//            Intent intent = new Intent(this, MetrixActivity.class);
//            String developerName = edDeveloperName.getText().toString();
//            intent.putExtra("developerName", developerName);
//            startActivity(intent);
//        }
//        else if (id == R.id.btnQuit) {
//           System.exit(0);
//        }
    }
}