import './styles.css'; 
import SiriWave from "siriwave";
import myAudioResource from './audio/1234213.mp3';

document.addEventListener('DOMContentLoaded', function () {
    const SW9 = new SiriWave({
        style: "ios9",
        container: document.getElementById("siri-container"),
        autostart: true,
        });
})

document.addEventListener('click', ()=>{
    playAudio(myAudioResource)
});

function playAudio(filePath) {
    const audio = new Audio(filePath);
 
    audio.play().then(() => {
        console.log('Audio is playing.');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}