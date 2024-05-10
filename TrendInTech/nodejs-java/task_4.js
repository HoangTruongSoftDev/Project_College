/*
 Implement a simple UI which should be presented over the browser and it should have one
 textbox form reading the youtube url and a button when the user clicks on the button, the
 transcription should appear in it

 Note: We have practise, launching website using javascript before midterm and the previous
 example was about reading transcription from youtube link

 The current task asks for combining the 2 operations of UI design and transcription
* */

function getTranscription(){
    let url = document.getElementById("urlInput");
    let transcription = downloadTranscription(url.value);
    let labelTranscription = document.getElementById("labelTranscription");
    labelTranscription.textContent = transcription
}
const ytdl = require('ytdl-core');
async function downloadTranscription(videoUrl) {
    try {
        const info = await ytdl.getInfo(videoUrl);
        const transcription = info.player_response.captions.playerCaptionsTracklistRenderer.captionTracks[0];
        console.log(transcription);
        return transcription;
    }
    catch (error) {
        console.error('Error fetching transcription:', error);
    }
}