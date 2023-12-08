package model;

import androidx.annotation.NonNull;

public class Player {

    private String fullName;
    private String teamName;
    private int yearOfBirth;
    private String photo;

    public Player(String fullName, String teamName, int yearOfBirth, String photo) {
        this.fullName = fullName;
        this.teamName = teamName;
        this.yearOfBirth = yearOfBirth;
        this.photo = photo;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public void setYearOfBirth(int yearOfBirth) {
        this.yearOfBirth = yearOfBirth;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getFullName() {
        return fullName;
    }

    public String getTeamName() {
        return teamName;
    }

    public int getYearOfBirth() {
        return yearOfBirth;
    }

    public String getPhoto() {
        return photo;
    }

    @NonNull
    @Override
    public String toString() {
        return fullName;
    }
}
