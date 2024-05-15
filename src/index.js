import './styles.css'; 
import SiriWave from "siriwave";
import { graph } from './graph';

document.addEventListener('DOMContentLoaded', function () {
    const SW9 = new SiriWave({
        style: "ios9",
        container: document.getElementById("siri-container"),
        autostart: true,
        });
})

document.addEventListener('click', ()=>{
    renderer(graph[0])
});

function playAudio(filePath, callback) {
    const audio = new Audio(filePath);

    audio.addEventListener('ended', function() {
        callback();
    });
 
    audio.play().then(() => {
        console.log('Audio is playing.');
    }).catch(error => {
        console.error('Error playing audio:', error);
    });
}

//////////////////

function renderer(node) {
    if(node.type === 'tts'){ renderTTS(node)}
    else if(node.type === 'mcq'){ renderMCQ(node) }
    else if(node.type === 'game'){ renderGame(node) }
}

function renderTTS(node){
    playAudio(node.file, ()=> {
        if(node.data.next) {
            setTimeout(()=> {renderer(graph.find(item => item.id === node.data.next))}, 300)
        }
    });
}

function renderMCQ(node){

}

function renderGame(params) {
    
}