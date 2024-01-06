package model;

import android.content.Context;
import android.content.res.AssetManager;
import android.util.Log;
import android.widget.Toast;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Locale;
import java.util.StringTokenizer;

import Service.Service;

public class FileManagement {
    public static ArrayList<Event> readFile (Context context, String filename) {
        ArrayList<Event> eventList = new ArrayList<>();

        AssetManager assetManager = context.getResources().getAssets();

        try {
            InputStreamReader isr = new InputStreamReader(assetManager.open(filename));

            BufferedReader br = new BufferedReader(isr);
            String oneline = br.readLine();
            while (oneline != null) {

                StringTokenizer st = new StringTokenizer(oneline, ",");
                String eventNameRaw = Service.formatAppropriateWord(st.nextToken());
                String eventLocation = st.nextToken().trim();
                String picture = st.nextToken().trim();
                String nbLike = st.nextToken().trim();
                String nbDislike = st.nextToken().trim();
                if (Service.isValidPositiveNumber(nbLike) && Service.isValidPositiveNumber(nbDislike)) {
                    eventList.add(new Event(eventNameRaw,eventLocation,picture,Integer.valueOf(nbLike),Integer.valueOf(nbDislike)));
                }
                else {
                    Log.d("Error", nbLike + " | " + nbDislike);
                }
                oneline = br.readLine();
            }
            br.close();
            isr.close();
        } catch (IOException e) {
            Toast.makeText(context, e.getMessage(), Toast.LENGTH_SHORT).show();
        }
        return eventList;
    }

//    private String eventName;
//    private String eventLocation;
//    private String picture;
//    private int nbLike;
//    private int nbDislike;
}
