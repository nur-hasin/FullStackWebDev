let inputEl = document.querySelector('input');
let pEl = document.querySelector('p');

inputEl.addEventListener('input', function () {
    console.log(inputEl.value);
    pEl.innerText = inputEl.value;
});
