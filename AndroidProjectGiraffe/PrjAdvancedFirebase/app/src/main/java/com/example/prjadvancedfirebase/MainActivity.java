package com.example.prjadvancedfirebase;

import androidx.activity.result.ActivityResult;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;
import com.google.firebase.storage.FirebaseStorage;
import com.google.firebase.storage.StorageReference;
import com.squareup.picasso.Picasso;

import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

import model.Car;
import model.Person;

public class MainActivity extends AppCompatActivity implements View.OnClickListener,
        OnSuccessListener, OnFailureListener, OnCompleteListener, ValueEventListener {

    EditText edId;
    Button btnAdd, btnFind, btnBrowse, btnUpload;
    ImageView imPhoto;

    // Reference to Realtime database
    DatabaseReference personDatabase;

    // Reference to Firebase Storage
    FirebaseStorage storage;
    StorageReference storageReference, sRef;

    // The path of the image in the device
    Uri filePath;

    // For the progression of uploading the file to firebase storage
    ProgressDialog progressDialog;

    // for receiving results (image) when we click the button browse
    ActivityResultLauncher aResL;

    String fileUrl;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        initialize();
    }

    private void initialize() {
        edId = findViewById(R.id.edId);
        btnAdd = findViewById(R.id.btnAdd);
        btnFind = findViewById(R.id.btnFind);
        btnBrowse = findViewById(R.id.btnBrowse);
        btnUpload = findViewById(R.id.btnUpload);
        imPhoto = findViewById(R.id.imPhoto);

        btnAdd.setOnClickListener(this);
        btnFind.setOnClickListener(this);
        btnBrowse.setOnClickListener(this);
        btnUpload.setOnClickListener(this);

        // Initialization of objects to Firebase database & Storage
        personDatabase = FirebaseDatabase.getInstance().getReference("Person");

        storage = FirebaseStorage.getInstance();
        storageReference = storage.getReference();

        // registration of Activity Result Launcher
        runActivityResLauncher();
    }

    private void runActivityResLauncher() {
        aResL = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                new ActivityResultCallback<ActivityResult>() {
                    @Override
                    public void onActivityResult(ActivityResult o) {
                        getPhoto(o);
                    }
                }
        );
    }

    private void getPhoto(ActivityResult result) {
        if (result.getResultCode() == RESULT_OK) {
            filePath = result.getData().getData();
            try {
                Bitmap bitmap = MediaStore.Images.Media.getBitmap(getContentResolver(), filePath);
                // MediaStore is a place of image, sound,...
                imPhoto.setImageBitmap(bitmap);
            }
            catch (Exception e) {
                Toast.makeText(this,  e.getMessage(), Toast.LENGTH_LONG).show();
            }
        }
    }

    @Override
    public void onClick(View view) {
        int id = view.getId();
        if(id==R.id.btnAdd)
            addPerson();
        if(id== R.id.btnFind)
            findPerson();
        if(id== R.id.btnBrowse)
            selectPhoto();
        if(id== R.id.btnUpload)
            uploadPhoto();
    }
    private void addPerson() {
        ArrayList<String> hobbies = new ArrayList<String>();
        hobbies.add("Soccer"); hobbies.add("Handball"); hobbies.add("Music");
        Car car = new Car("M300", "Mazda", "Mazda6");
        Person p = new Person(300, "Richard", fileUrl, car, hobbies);
        personDatabase.child("300").setValue(p);
        Toast.makeText(this, "One document has been added successfully", Toast.LENGTH_LONG).show();
    }
    private void uploadPhoto() {
        if (filePath != null) {
            progressDialog = new ProgressDialog(this);
            progressDialog.setTitle("Uploading the photo in progress");
            progressDialog.show();
            sRef = storageReference.child("images/" + UUID.randomUUID()); // UUID.randomUUID() gonna creates random ID to create random file
            // "images/" is a folder in storage firebase
            //sRef = storageReference.child("images/" + UUID.randomUUID());

            sRef.putFile(filePath).addOnSuccessListener(this); // if it's success, it will trigger the function onSuccess below
            sRef.putFile(filePath).addOnFailureListener(this); // if it's fail, it will trigger the function onFailure below
        }
        else {
            Toast.makeText(this, "No photo to upload", Toast.LENGTH_LONG).show();
        }
    }
    @Override
    public void onFailure(@NonNull Exception e) {
        Toast.makeText(this, e.getMessage(), Toast.LENGTH_LONG).show();
        progressDialog.dismiss();
    }

    @Override
    public void onSuccess(Object o) {
        Toast.makeText(this, "The photo has been uploaded successfully", Toast.LENGTH_LONG).show();
        progressDialog.dismiss();
        sRef.getDownloadUrl().addOnCompleteListener(this); // this will trigger the function onComplete
    }
    @Override
    public void onComplete(@NonNull Task task) {
        fileUrl = task.getResult().toString();
        Log.d("ADV_FIREBASE", fileUrl);
    }
    private void selectPhoto() {
        // Access to the emulator and select the photo
        // in order to upload it into Firebase storage

        Intent intent = new Intent();
        intent.setType("image/*"); // just browse the files have type images (it will redirect to download folder)
        intent.setAction(Intent.ACTION_GET_CONTENT);
        aResL.launch(Intent.createChooser(intent, "Select the photo"));
    }

    private void findPerson() {
        String id = edId.getText().toString();
        personDatabase.child(id).addValueEventListener(this); // it will call the function onDataChange()
    }


    @Override
    public void onDataChange(@NonNull DataSnapshot snapshot) {
        if (snapshot.exists()) {
            String name = snapshot.child("name").getValue().toString();
            ArrayList<String> hobbies = (ArrayList)snapshot.child("hobbies").getValue();
            Log.d("ADV_FIREBASE", hobbies.toString());
            Map car = (Map)snapshot.child("car").getValue();
            Log.d ("ADV_FIREBASE_CAR_ID", "Car id: " + car.get("id"));
            Log.d ("ADV_FIREBASE_CAR_BRAND", "Car brand: " + car.get("brand"));
            Log.d ("ADV_FIREBASE_CAR_MODEL", "Car model: " + car.get("model"));

            // get the photo
            String urlPhoto = snapshot.child("photo").getValue().toString();

            /*
                 In the code Picasso.with(this), this refers to the current context,
                 which is often an instance of an Android Activity or Application.
                 This context is necessary for Picasso to know where in the app it should load and display the image.
                 So, with(this) is essentially saying, "Use the context of this activity or application for the image loading operation
             */
            // load(urlPhoto): it will take the urlPhoto and take 1-2 seconds to store the destination
            // placeholder(R.drawable.loadingimage): while 1-2 seconds to store the image we need into destination, this placeholder we show until that photo appear
            // into(imPhoto): this is the destination where the image of urlPhoto and the placeholder is stored and appeared

            Picasso.with(this).load(urlPhoto).placeholder(R.drawable.loadingimage).into(imPhoto);
        }
        else {
            Toast.makeText(this, "No document", Toast.LENGTH_LONG).show();
        }
    }

    @Override
    public void onCancelled(@NonNull DatabaseError error) {

    }
}