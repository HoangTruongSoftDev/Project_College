package model;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.prjcompositelistview.R;

import java.util.ArrayList;

public class PlayerAdapter extends BaseAdapter {
    private Context context;
    private ArrayList<Player> playerList;
    Player onePlayer;
    public PlayerAdapter(Context context, ArrayList<Player> playerList) {
        this.context = context;
        this.playerList = playerList;
    }

// getCount() function will set how many rows in your list view
    @Override
    public int getCount() {
        return playerList.size();
    }
// return the item based on its position in List View
    @Override
    public Object getItem(int position) {
        return playerList.get(position);
    }

    // return the item id based on its position in List View
    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        // 1 = Required declaration
        View oneItem = null;
        ImageView imPhoto, imMore;
        TextView tvFullName, tvTeamName;
        // 2- Convert the layout one.otem.xml --> Java View Object
        //LayoutInflater
        LayoutInflater inflater = LayoutInflater.from(context);
        oneItem = inflater.inflate(R.layout.one_item, (ViewGroup) convertView,false);
        // 3- Reference the widgets of the one_item.xml
        tvFullName = oneItem.findViewById(R.id.tvFullName);
        imPhoto = oneItem.findViewById(R.id.imPhoto);
        imMore = oneItem.findViewById(R.id.imMore);
        tvTeamName = oneItem.findViewById(R.id.tvTeamName);
        imMore = imMore.findViewById(R.id.tvTeamName);
        imMore.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onePlayer = (Player) getItem(position);
                Toast.makeText(context, onePlayer.getYearOfBirth(), Toast.LENGTH_SHORT).show();
            }
        });
        // 4- populate the widgets of one_item.xml
        onePlayer = (Player) getItem(position);
        tvFullName.setText(onePlayer.getFullName());
        tvTeamName.setText(onePlayer.getTeamName());
        String photoName = onePlayer.getPhoto();
        int imPhotoRes = context.getResources().getIdentifier("drawable/"+photoName, null,context.getPackageName());

        imPhoto.setImageResource(imPhotoRes);

        return oneItem;
    }
}
