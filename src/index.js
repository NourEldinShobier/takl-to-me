import './styles.css'; 
import SiriWave from "siriwave";

document.addEventListener('DOMContentLoaded', function () {
    const SW9 = new SiriWave({
        style: "ios9",
        container: document.getElementById("siri-container"),
        autostart: true,
        });
})