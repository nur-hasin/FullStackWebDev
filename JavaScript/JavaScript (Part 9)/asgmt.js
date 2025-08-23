let bodyEl = document.querySelector('body');


let inputEl = document.createElement('input');

bodyEl.append(inputEl);

let btnEl1 = document.createElement('button');

btnEl1.innerText = "Click me";
bodyEl.append(btnEl1);


inputEl.setAttribute('placeholder', 'username');
btnEl1.setAttribute('id', 'btn');


let btnEl2 = document.querySelector('#btn');

btnEl2.style.backgroundColor = 'blue';
btnEl2.style.color = 'white';


let h1El = document.createElement('h1');

h1El.innerText = "DOM Practice";
h1El.style.textDecoration = 'underline';
h1El.style.color = 'purple';
bodyEl.append(h1El);


let pEl = document.createElement('p');


pEl.innerHTML = "Apna College <b>Delta</b> Practice";
bodyEl.append(pEl);