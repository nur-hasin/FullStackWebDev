let paraEl1 = document.createElement('p');

paraEl1.innerText = "Hey I'm red!";
paraEl1.style.color = 'red';
document.querySelector('body').append(paraEl1);


let headingEl1 = document.createElement('h3');

headingEl1.innerText = "I'm a blue h3!";
headingEl1.style.color = 'blue';
document.querySelector('body').append(headingEl1);


let divEl = document.createElement('div');

divEl.style.backgroundColor = 'pink';
divEl.style.border = '1px solid black';
document.querySelector('body').append(divEl);

let headingEl2 = document.createElement('h1');

headingEl2.innerText = "I'm in a div";
divEl.append(headingEl2);

let paraEl2 = document.createElement('p');

paraEl2.innerText = "ME TOO!";
divEl.append(paraEl2);
