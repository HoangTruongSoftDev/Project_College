package model;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class FileManagement {
    public static ArrayList<Player> readFile (Context context, String filename) {
        ArrayList<Player> playerList = new ArrayList<>();

        // 1 - Access to assets manager
        AssetManager assetManager = context.getResources().getAssets();

        // 2 - Open the file
        try {
            InputStreamReader isr = new InputStreamReader(assetManager.open(filename));

            // 3 - Read the content of the file
            BufferedReader br = new BufferedReader(isr);
            String oneline = br.readLine();
            while (oneline != null) {
                StringTokenizer st = new StringTokenizer(oneline, ",");
                String fName = st.nextToken();
                String tName = st.nextToken();
                try {
                    int yearOfBirth = Integer.valueOf(st.nextToken());
                    String photo = st.nextToken();
                    playerList.add(new Player(fName, tName, yearOfBirth, photo));
                 }
                catch (Exception e) {
                    Log.d("Error", e.getMessage());
                }
                oneline = br.readLine();

            }
            // 4 - Closing buffer and files
            br.close();
            isr.close();
        } catch (IOException e) {
            Toast.makeText(context, e.getMessage(), Toast.LENGTH_SHORT).show();
        }
        return playerList;
    }
}
