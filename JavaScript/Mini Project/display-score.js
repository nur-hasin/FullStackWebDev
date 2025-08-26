let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "blue", "green"];

let started = false;
let level = 0;
let highScore = 0;

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
    userSeq = [];

    level++;
    h2El.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.getElementById(randColor);

    gameFlash(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkRes(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 100);
        }
    } else {
        if (level > highScore) {
            highScore = level;
        }

        h2El.innerHTML = `Game Over! <br> Your score was: <b>${level}</b> | High Score: <b>${highScore}</b> <br> Press any key to start`;

        gameOverEffect();
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    console.log(userSeq);

    checkRes(userSeq.length - 1);
}

let btnEls = document.querySelectorAll('.btn');

for (let btn of btnEls) {
    btn.addEventListener('click', btnPress);
}

function gameOverEffect() {
    document.body.classList.add('game-over');

    setTimeout(function () {
        document.body.classList.remove('game-over');
    }, 150);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

