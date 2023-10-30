package com.example.midtermexam_hoangtruongphamlatestversion;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.ArrayList;

import Model.Client;

public class ResultActivity extends AppCompatActivity implements View.OnClickListener {

    TextView tvResult;
    Button btnReturn;
    ArrayList<Client> listClients;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_result);
        initialize();
    }

    private void initialize() {
        tvResult = findViewById(R.id.tvResult);
        btnReturn = findViewById(R.id.btnReturn);

        listClients = (ArrayList<Client>) getIntent().getExtras().getSerializable("clients");
        btnReturn.setOnClickListener(this);
        String result = "";
        for (Client currClient : listClients) {
            result += "\n" + currClient;
        }
        tvResult.setText(result);
    }


    @Override
    public void onClick(View v) {
        finish();
    }
}