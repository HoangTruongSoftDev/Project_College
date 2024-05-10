/*
 In this example,  we will learn a nice example about using transcription api which world
 with youtube. In fact,  we provide a link and connect to api, then we can download the transcription using JS.
 It is funny to mention that, these kind of api which they are linked to AI, often are implemented in JS

 Note: install the youtube api by: npm install youtube-dll
 the above code gives error, use this command: npm install ytdl-core
* */
const ytdl = require('ytdl-core');

async function downloadTranscription(videoUrl) {
    try {
        const info = await ytdl.getInfo(videoUrl);
        const transcription = info.player_response.captions.playerCaptionsTracklistRenderer.captionTracks[0];

        console.log('Transcription:');
        console.log(transcription);
    } catch (error) {
        console.error('Error fetching transcription:', error);
    }
}

const videoUrl = 'https://www.youtube.com/watch?v=kTiZDozT2NU';
downloadTranscription(videoUrl);


