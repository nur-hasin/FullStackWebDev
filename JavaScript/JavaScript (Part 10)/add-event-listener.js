let btnEls = document.querySelectorAll('button');

for (let btnEl of btnEls) {
    btnEl.addEventListener('click', sayHello);
    btnEl.addEventListener('click', sayName);
    btnEl.addEventListener('dblclick', function () {
        console.log("you double clicked");
    });
}

function sayHello() {
    console.log("Hello!");
}

function sayName() {
    console.log("Jojo");
}


let pEl = document.querySelector('p');

pEl.addEventListener('click', function () {
    console.log("paragraph was clicked");
});

let divEl = document.querySelector('div');

divEl.addEventListener('mouseenter', function () {
    console.log("mouse inside the box");
});