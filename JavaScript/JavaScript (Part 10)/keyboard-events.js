let inputEl = document.querySelectorAll('input');

inputEl[0].addEventListener('keydoDn', function (event) {
    console.log(event);
    console.log("Key pressed:", event.key);
    console.log("Code:", event.code);
    console.log("key was pressed"); 
});

inputEl[1].addEventListener('keyup', function () {
    console.log("key was pressed");
});

inputEl[2].addEventListener('keydown', function (event) {
    console.log(event.code);

    if (event.code == "ArrowUp") {
        console.log("character moves forward");
    } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
    } else if (event.code == "ArrowLeft") {
        console.log("character moves Left");
    } else if (event.code == "ArrowRight") {
        console.log("character moves Right");
    }
});

inputEl[3].addEventListener('keydown', function (event) {
    console.log(event.code);

    if (event.code == "KeyW") {
        console.log("character moves up");
    } else if (event.code == "KeyS") {
        console.log("character moves down");
    } else if (event.code == "KeyA") {
        console.log("character moves Left");
    } else if (event.code == "KeyD") {
        console.log("character moves Right");
    }
});