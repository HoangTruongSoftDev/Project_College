package com.example.prjpizzaorder;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.lang.reflect.Array;
import java.util.ArrayList;

import model.Order;

public class SecondActivity extends AppCompatActivity implements View.OnClickListener {

    TextView tvTotalOrders, tvClientOrder;
    Button btnReturn;
    ArrayList<Order> orderList;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);
        initialize();
    }

    private void initialize() {
        tvClientOrder = findViewById(R.id.tvClient);
        tvTotalOrders = findViewById(R.id.tvTotal);
        btnReturn = findViewById(R.id.btnFinish);

        btnReturn.setOnClickListener(this);

        //Reception of the orders
        orderList = (ArrayList<Order>) getIntent().getExtras().getSerializable("orders");

        StringBuilder list = new StringBuilder("");
        float totalOrders = 0;
        for (Order oneOrder : orderList) {
            list.append(oneOrder + "\n");
            float amount = Order.getAmount(oneOrder.getPizzaType(), oneOrder.getNbSlices());
            totalOrders += amount;
            tvClientOrder.setText(list);
        }
        tvTotalOrders.append("" + totalOrders);
    }

    @Override
    public void onClick(View v) {
        finish();
    }
}