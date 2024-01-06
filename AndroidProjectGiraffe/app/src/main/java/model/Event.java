package model;

public class Event {
    private String eventName;
    private String eventLocation;
    private String picture;
    private int nbLike;
    private int nbDislike;

    public Event(String eventName, String eventLocation, String picture, int nbLike, int nbDislike) {
        this.eventName = eventName;
        this.eventLocation = eventLocation;
        this.picture = picture;
        this.nbLike = nbLike;
        this.nbDislike = nbDislike;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public int getNbLike() {
        return nbLike;
    }

    public void setNbLike(int nbLike) {
        this.nbLike = nbLike;
    }

    public int getNbDislike() {
        return nbDislike;
    }

    public void setNbDislike(int nbDislike) {
        this.nbDislike = nbDislike;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventName='" + eventName + '\'' +
                ", eventLocation='" + eventLocation + '\'' +
                ", picture='" + picture + '\'' +
                ", nbLike=" + nbLike +
                ", nbDislike=" + nbDislike +
                '}';
    }
}
