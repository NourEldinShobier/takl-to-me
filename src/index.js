import './styles.css'; 
import SiriWave from "siriwave";
import { graph as rootGraph } from './graph';
import { renderer } from './utils';

document.addEventListener('DOMContentLoaded', function () {
    const SW9 = new SiriWave({
        style: "ios9",
        container: document.getElementById("siri-container"),
        autostart: true,
        });
})

var stared = false;

document.addEventListener('click', ()=>{
    if (!stared){
        renderer(rootGraph[0], rootGraph);
        stared = true;
    }
});
