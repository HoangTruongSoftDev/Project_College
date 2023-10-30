package com.example.prjfirebase;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.google.android.material.snackbar.Snackbar;
import com.google.firebase.database.ChildEventListener;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

import org.json.JSONArray;

import Model.Person;

public class MainActivity extends AppCompatActivity implements View.OnClickListener, ValueEventListener, ChildEventListener {

    // ValueEventListener is interface that has an override method named "onDataChange()" to find one child
    // ChildEventListener is interface that has override methods named "onChildAdded()" and "onChildChanged()" to find all child
    EditText edId,edName,edAge;
    Button btnAdd,btUpdate,btnUpdate,btnDelete,btnFind,btnFindAll;
    // JSONArray and JSONObject are used to add the JSON file to firebase database
    DatabaseReference personDatabase;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        edId=findViewById(R.id.edId);
        edName=findViewById(R.id.edName);
        edAge=findViewById(R.id.edAge);
        btnDelete=findViewById(R.id.btnDelete);
        btnFind=findViewById(R.id.btnFind);
        btnDelete.setOnClickListener(this);
        btnFind.setOnClickListener(this);
        btnFindAll=findViewById(R.id.btnFindAll);
        btnFindAll.setOnClickListener(this);


        btnAdd=findViewById(R.id.btnAdd);
        btnAdd.setOnClickListener(this);
        btnUpdate=findViewById(R.id.btnUpdate);
        btnUpdate.setOnClickListener(this);


        personDatabase = FirebaseDatabase.getInstance().getReference("Person");
    }


    @Override
    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.btnAdd) {
            addUpdatePerson(view, " has been added successfully");
        }
        else if (id == R.id.btnUpdate) {
            addUpdatePerson(view, " has been updated successfully");
        }
        else if (id == R.id.btnDelete) {
            deletePerson(view);
        }
        else if (id == R.id.btnFind) {
            findOnePerson();
        }
        else if (id == R.id.btnFindAll) {
            findAll();
        }
    }

    private void findAll() {
        personDatabase.addChildEventListener(this); // it will call the onChildAdded function
    }
    @Override
    public void onChildAdded(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {
        Person person = snapshot.getValue(Person.class);
        // if you have 100 documents under collection person (like 100, 200, 300, ...) it will execute 100 times
        Toast.makeText(this, person.toString(), Toast.LENGTH_LONG).show();
//        Log.d("FIREBASE", person.toString());

        // this function will add the child and display that child right away
    }
    @Override
    public void onChildChanged(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {
        Person person = snapshot.getValue(Person.class);
        Log.d("FIREBASE", person.toString());
        // if you update or access the data on another application or database,
        // it gonna trigger this function to allow you to see or access that changes

    }
    private void deletePerson(View view) {
        String id = edId.getText().toString();
        personDatabase.child(id).removeValue();
        Snackbar.make(view, "The person with the id: " + id + "\nhash been removed successfully", Snackbar.LENGTH_LONG).show();
    }

//    private void updatePerson(View view) {
//        try {
//            String id = edId.getText().toString();
//            String name = edName.getText().toString();
//            String age = edAge.getText().toString();
//            Person person = new Person(Integer.valueOf(id), name, Integer.valueOf(age));
//            personDatabase.child(id).setValue(person); // mention which key, and set Value for that key based on the documents (documents are id, age name) for it
//            // if the key existing, it will override the documents
//            // personDatabase.child(id) go to point the child, if not existing, added, otherwise it will override the documents under that child
//            Snackbar.make(view, "The person with the id: " + id + "  has been updated successfully", Snackbar.LENGTH_LONG).show();
//            clearWidgets();
//        }
//        catch (Exception e) {
//            Snackbar.make(view, e.getMessage(), Snackbar.LENGTH_LONG).show();
//        }
//    }

    private void findOnePerson() {
        String id = edId.getText().toString();
        personDatabase.child(id).addValueEventListener(this); // this command will call the function onDataChange() function below
    }
    @Override
    public void onDataChange(@NonNull DataSnapshot snapshot) { // this function will find the child based on the key id
        if (snapshot.exists()) {
            String name = snapshot.child("name").getValue().toString();
            String age = snapshot.child("age").getValue().toString();
            edName.setText(name);
            edAge.setText(age);
        }
        else {
            Toast.makeText(this, "No document", Toast.LENGTH_LONG).show();
        }
    }
    private void addUpdatePerson(View view, String message) {
        try {
            String id = edId.getText().toString();
            String name = edName.getText().toString();
            String age = edAge.getText().toString();
            Person person = new Person(Integer.valueOf(id), name, Integer.valueOf(age));
            personDatabase.child(id).setValue(person); // mention which key, and set Value for that key based on the documents (documents are id, age name) for it
            // if the key existing, it will override the documents
            Snackbar.make(view, "The person with the id: " + id  + message, Snackbar.LENGTH_LONG).show();
            clearWidgets();
        }
        catch (Exception e) {
            Snackbar.make(view, e.getMessage(), Snackbar.LENGTH_LONG).show();
        }
    }

    private void clearWidgets() {
        edId.setText(null);
        edName.setText(null);
        edAge.setText(null);
        edId.requestFocus();
    }






    @Override
    public void onChildRemoved(@NonNull DataSnapshot snapshot) {

    }

    @Override
    public void onChildMoved(@NonNull DataSnapshot snapshot, @Nullable String previousChildName) {

    }

    @Override
    public void onCancelled(@NonNull DatabaseError error) {

    }
}