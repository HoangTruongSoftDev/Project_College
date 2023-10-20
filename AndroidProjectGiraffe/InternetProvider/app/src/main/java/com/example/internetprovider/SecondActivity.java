package com.example.internetprovider;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

import Model.InternetProvider;

public class SecondActivity extends AppCompatActivity implements View.OnClickListener {

    ArrayList<InternetProvider> listOfInternetProviders;

    TextView tvInformation;

    Button btnReturn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        initialize();

    }



    private void initialize(){
        tvInformation = findViewById(R.id.tvInformation);
        btnReturn = findViewById(R.id.btnReturn);
        btnReturn.setOnClickListener(this);

        listOfInternetProviders = (ArrayList<InternetProvider>) getIntent().getExtras().getSerializable("listOfInternetProviders");

        StringBuilder list = new StringBuilder();
        for (InternetProvider currentProvider : listOfInternetProviders){
            String currentInformation = currentProvider.toString() + "\n\n";
            list.append(currentInformation);
        }

        tvInformation.setText(list);
    }

    @Override
    public void onClick(View v) {
        if(v.getId() == R.id.btnReturn){
            finish();
        }
    }
}