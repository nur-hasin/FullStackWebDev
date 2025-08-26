let btnEl = document.querySelector('button');
let ulEl = document.querySelector('ul');
let inputEl = document.querySelector('input');

btnEl.addEventListener('click', () => {
    let liEls = document.createElement('li');
    liEls.innerText = inputEl.value;
    ulEl.appendChild(liEls);
    inputEl.value = "";

    let remBtnEl = document.createElement('button');
    remBtnEl.innerText = "Remove";
    liEls.appendChild(remBtnEl);

    remBtnEl.addEventListener('click', () => {
        remBtnEl.parentElement.remove();
    });
});

