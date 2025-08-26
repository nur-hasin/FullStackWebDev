let btnEl = document.querySelector('button');
let ulEl = document.querySelector('ul');
let inputEl = document.querySelector('input');

btnEl.addEventListener('click', () => {
    let liEls = document.createElement('li');
    liEls.innerText = inputEl.value;
    ulEl.appendChild(liEls);
    inputEl.value = "";

    let remBtnEl = document.createElement('button');
    remBtnEl.classList.add("remItem");
    remBtnEl.innerText = "Remove";
    liEls.appendChild(remBtnEl);
});

ulEl.addEventListener('click', (e) => {
    if (e.target.classList.contains("remItem")) {
        e.target.parentElement.remove();
    }
});