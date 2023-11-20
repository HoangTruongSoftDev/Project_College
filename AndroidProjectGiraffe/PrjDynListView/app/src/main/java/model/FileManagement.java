package model;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class FileManagement {
    public static ArrayList<Country> readFile(Context context, String filename) {

        ArrayList<Country> countryList = new ArrayList<>();

        // Process reading a file
        // Step 1: Access to the assets folder
        AssetManager assetManager = context.getResources().getAssets();

        try {
            // Step 2: Open the file countries.txt
            InputStreamReader inputStreamReader = new InputStreamReader(assetManager.open(filename));

            // Step 3: Process the data of the file
            BufferedReader br = new BufferedReader(inputStreamReader);
            String oneLine = br.readLine();
            while (oneLine != null) {
                StringTokenizer st = new StringTokenizer(oneLine, ",");
                String cName = st.nextToken();
                String cCapital = st.nextToken();
                countryList.add(new Country(cName, cCapital));
                oneLine = br.readLine();
            }

            // Step 4: Close the file and return the result
            br.close();
            inputStreamReader.close();

        } catch (Exception e) {
            Log.d("ERROR", e.getMessage());
        }
        return countryList;
    }
}
