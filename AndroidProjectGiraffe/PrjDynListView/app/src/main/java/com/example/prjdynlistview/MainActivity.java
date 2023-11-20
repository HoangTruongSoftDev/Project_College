package com.example.prjdynlistview;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import com.google.android.material.snackbar.Snackbar;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;

import model.Country;
import model.FileManagement;

public class MainActivity extends AppCompatActivity implements View.OnClickListener,
        AdapterView.OnItemClickListener, AdapterView.OnItemLongClickListener, DialogInterface.OnClickListener {

    EditText edCName, edCCapital;
    Button btnAdd, btnUpdate, btnSort;

    ListView lvCountries;

    ArrayList<Country> countryList;

    ArrayAdapter<Country> countryAdapter;

    AlertDialog.Builder alertDialog;

    int pos = -1;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        edCName = findViewById(R.id.edCName);
        edCCapital = findViewById(R.id.edCCapital);
        btnAdd = findViewById(R.id.btnAdd);
        btnUpdate = findViewById(R.id.btnUpdate);
        btnSort = findViewById(R.id.btnSort);

        btnAdd.setOnClickListener(this);
        btnUpdate.setOnClickListener(this);
        btnSort.setOnClickListener(this);

        alertDialog = new AlertDialog.Builder(this);
        alertDialog.setTitle("Deletion");
        alertDialog.setMessage("Do you want to remove (Y/N)");
        alertDialog.setPositiveButton("Yes", this);
        alertDialog.setNegativeButton("No", this);


        countryList = new ArrayList<>();
        /*countryList.add(new Country("France", "Paris"));
        countryList.add(new Country("India", "Delhi"));*/
        countryList = FileManagement.readFile(this, "countries.txt");


        lvCountries = findViewById(R.id.lvCountries);
        lvCountries.setOnItemClickListener(this);
        lvCountries.setOnItemLongClickListener(this);


        // android.R.layout.simple_list_item_1: is a built-in listview style of android, you can customize your listview layout and put it here
 //countryAdapter = new ArrayAdapter<Country>(this, android.R.layout.simple_list_item_1, countryList);

        // this is custom list view by using the text view one_item customization
        countryAdapter = new ArrayAdapter<Country>(this, R.layout.one_item, countryList);
        lvCountries.setAdapter(countryAdapter);


    }
    @Override
    public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
//        countryList.rAemove(position);
//        countryAdapter.notifyDataSetChanged();
        pos = position;
        alertDialog.create().show();
        return false;
    }
    // connect to dialog interface only
    @Override
    public void onClick(DialogInterface dialog, int which) {
        if (which == Dialog.BUTTON_POSITIVE) {
            countryList.remove(pos);
            countryAdapter.notifyDataSetChanged();
        }
        else if (which == Dialog.BUTTON_NEGATIVE) {

        }
    }
    // connect to the view, the widgets of view only
    @Override
    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.btnAdd)
            addCountry(view);
        if (id == R.id.btnUpdate)
            updateCountry(view);
        if (id == R.id.btnSort)
            sortList(view);
    }

    private void sortList(View view) {
        Collections.sort(countryList);
        countryAdapter.notifyDataSetChanged();
    }

    private void updateCountry(View view) {
        String name = edCName.getText().toString();
        String capital = edCCapital.getText().toString();
        Country country = new Country(name, capital);
        int pos = countryExists(country);
        if (pos != -1) {
            countryList.set(pos, country);

            // to sync between the arrayList of adapter and listView, we need the function notifyDataSetChanged()
            // to notify that I have changed something in ArrayList of adapter please sync to ListView

            countryAdapter.notifyDataSetChanged();
        }
        else {
            Snackbar.make(view, "The country with name " + country.getcName() + "\ndoesn't exist", Snackbar.LENGTH_LONG).show();

        }
    }
    @Override
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        // int position is a position of clicked item
        String name = countryList.get(position).getcName();
        String capital = countryList.get(position).getcCapital();
        edCName.setText(name);
        edCCapital.setText(capital);
    }
    private void addCountry(View view) {
        String name = edCName.getText().toString();
        String capital = edCCapital.getText().toString();
        Country country = new Country(name, capital);
        if (countryExists(country) == -1 && !name.equals("") && !capital.equals("")) {
            countryList.add(country);
            countryAdapter.notifyDataSetChanged();
            Snackbar.make(view, "The country with name " + country.getcName() + "\nhas been added successfully", Snackbar.LENGTH_LONG).show();
            clearWidgets();
        }
        else {
            Snackbar.make(view, "The country with name " + country.getcName() + "\nis already added", Snackbar.LENGTH_LONG).show();

        }
    }

    private int countryExists(Country country) {
        // if it doesn't exist, it will return -1, otherwise it will return its index in array
        return countryList.indexOf(country);

    }

    private void clearWidgets() {
        edCName.setText(null);
        edCCapital.setText(null);
        edCName.requestFocus();
    }





}