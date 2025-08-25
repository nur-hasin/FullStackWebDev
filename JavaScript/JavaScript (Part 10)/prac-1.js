let btnEl = document.querySelector('button');

btnEl.addEventListener('click', function () {
    const h3El = document.querySelector('h3');
    h3El.innerText = getRandomColor();

    const divEl = document.querySelector('div');
    divEl.style.backgroundColor = getRandomColor();

    console.log("color updated");
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}