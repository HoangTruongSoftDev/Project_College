package com.example.midtermexam_hoangtruongpham;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

import model.User;

public class ResultActivity extends AppCompatActivity implements View.OnClickListener {

    TextView tvResult;
    Button btnReturn;
    ArrayList<User> listOfUsers;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);
        initialize();
    }

    private void initialize() {
        tvResult = findViewById(R.id.tvResult);
        btnReturn = findViewById(R.id.btnReturn);
        btnReturn.setOnClickListener(this);
        listOfUsers = (ArrayList<User>) getIntent().getExtras().getSerializable("listOfUsers");
        String result = "";
        for (User currentUser : listOfUsers) {
            result += currentUser + "\n";
        }
        tvResult.setText(result);
    }

    @Override
    public void onClick(View v) {
        if (v.getId() == R.id.btnReturn) {
            finish();
        }
    }
}