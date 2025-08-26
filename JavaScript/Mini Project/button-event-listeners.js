let gameSeq = [];
let userSeq = [];

let btns = ["yello", "red", "blue", "green"];

let started = false;
let level = 0;

let h2El = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add('flash');

    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userFlash');

    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 250);
}

function levelUp() {
    level++;
    h2El.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);

    gameFlash(randBtn);
}

function btnPress() {
    console.log(this);

    let btn = this;
    userFlash(btn);
}

let btnEls = document.querySelectorAll('.btn');

for (let btn of btnEls) {
    btn.addEventListener('click', btnPress);
}