let btnEl = document.querySelector('button');
let pEl = document.querySelector('p');
let h1El = document.querySelector('h1');
let h3El = document.querySelector('h3');

btnEl.addEventListener('click', function () {
    console.log(this);
    this.style.color = "red";
});

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "lightgreen";
}

btnEl.addEventListener('click', changeColor);

pEl.addEventListener('click', changeColor);

h1El.addEventListener('click', changeColor);

h3El.addEventListener('click', changeColor);

