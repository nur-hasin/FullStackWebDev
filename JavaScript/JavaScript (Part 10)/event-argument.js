let btnEl = document.querySelector('button');

btnEl.addEventListener('click', function (event) {
    console.log(event);
    console.log("button clicked");
});

btnEl.addEventListener('dblclick', function (event) {
    console.log(event);
    console.log("button clicked");
});