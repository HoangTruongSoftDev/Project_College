package com.example.prjpizzaorder;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;
import android.widget.Toast;

import java.util.ArrayList;

import model.Order;

public class MainActivity extends AppCompatActivity implements View.OnClickListener, TextWatcher {

    EditText edClNum, edNbSlices;
    RadioGroup rgPizza;
    TextView tvAmount;
    Button btnSave, btnShowAll, btnQuit;
    RadioButton rbCheese, rbVegetarian, rbMexican;
    Order order;
    String pizzaType ="";
    float amount;
    float price;
    ArrayList<Order> orderList;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        edClNum = findViewById(R.id.edClNum);
        edNbSlices = findViewById(R.id.edNbSlices);
        edNbSlices.addTextChangedListener(this);
        rgPizza = findViewById(R.id.rgPizza);
        tvAmount = findViewById(R.id.tvAmount);
        btnSave = findViewById(R.id.btnSave);
        btnShowAll = findViewById(R.id.btnShowAll);
        btnQuit = findViewById(R.id.btnQuit);
        rbCheese = findViewById(R.id.rbCheese);
        rbVegetarian = findViewById(R.id.rbVegetarian);
        rbMexican = findViewById(R.id.rbMexican);



        btnSave.setOnClickListener(this);
        btnShowAll.setOnClickListener(this);
        btnQuit.setOnClickListener(this);

        rbCheese.setOnClickListener(this);
        rbVegetarian.setOnClickListener(this);
        rbMexican.setOnClickListener(this);

        orderList = new ArrayList<>();
    }

    @Override
    public void onClick(View v) {
        int id = v.getId();
        if (id == R.id.btnSave)
            saveOrder();
        else if (id == R.id.btnQuit)
            System.exit(0);
        else if (id == R.id.btnShowAll)
            showAllOrders();
        if (id == R.id.rbCheese)
        {
            pizzaType = rbCheese.getText().toString();
            showAmount();
        }
        else if (id == R.id.rbVegetarian)
        {
            pizzaType = rbVegetarian.getText().toString();
            showAmount();
        }
        else if (id == R.id.rbMexican)
        {
            pizzaType = rbMexican.getText().toString();
            showAmount();
        }
    }

    private void showAmount() {

    try {

        int nbSlices = Integer.valueOf(edNbSlices.getText().toString());
        float amount = order.getAmount(pizzaType, nbSlices);
        tvAmount.setText(String.valueOf(amount));
    }

    catch (Exception e) {
        Toast.makeText(this, e.getMessage(), Toast.LENGTH_LONG).show();
    }
    }



    private void clearWidgets(ViewGroup parent) {
        for (int i = 0; i < parent.getChildCount(); i++) {
            View currentView = parent.getChildAt(i);
            if (currentView instanceof EditText)
                ((EditText)currentView).setText(null);

            else if (currentView instanceof ViewGroup)
                clearWidgets((ViewGroup)currentView);
        }
    }
    private void showAllOrders() {
            Intent intent = new Intent( this, SecondActivity.class);
            intent.putExtra("orders", orderList);
            startActivity(intent);

    }

    private void saveOrder() {
        // The task of save order is save one order (clnum, pizza, nbslices) in the array list orderlist

        try  {
            int clientNumber = Integer.valueOf(edClNum.getText().toString());
            int nbOfSlices = Integer.valueOf(edNbSlices.getText().toString());
            order = new Order(clientNumber, pizzaType, nbOfSlices);
            orderList.add(order);
            Toast.makeText(this, "the Order of the client + " + clientNumber + " has been save successfully", Toast.LENGTH_LONG).show();
            clearWidgets((ViewGroup) findViewById(R.id.rootLayout));
            rgPizza.clearCheck();
            edClNum.requestFocus();
        }
        catch (Exception e) {
            Toast.makeText(this, e.getMessage(), Toast.LENGTH_LONG).show();
        }
    }

    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {

    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {

    }

    @Override
    public void afterTextChanged(Editable s) {
        showAmount();
    }
}