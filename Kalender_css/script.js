const button = document.getElementById("moveButton");

let position = 0;

function move() {
    position += 2; // Geschwindigkeit
    button.style.left = position + "px";

    if (position > window.innerWidth) {
        position = -150; // wieder von links starten
    }
}

setInterval(move, 10);
