let newParaObj = document.createElement('p');

console.dir(newParaObj);
console.log(newParaObj.innerText = "This is new paragraph.");

let bodyObj = document.querySelector('body');

console.log(bodyObj.appendChild(newParaObj));

let boxObj = document.querySelector('.box');
let newClonedPara = newParaObj.cloneNode(true);

console.log(boxObj.appendChild(newClonedPara));
newClonedPara.append(" This is another new paragraph.");
console.log(newClonedPara.innerText);
console.log(newClonedPara);

let btnObj = document.createElement('button');

console.dir(btnObj);
console.log(btnObj.innerText = "Click me!");
console.log(boxObj.appendChild(btnObj));

newClonedPara.append(btnObj.cloneNode(true));
newClonedPara.append(" This is another new paragraph.");
console.log(newClonedPara.innerText);
console.log(newClonedPara);

let anotherNewClonedPara = newClonedPara.cloneNode(true);
boxObj.prepend(anotherNewClonedPara);

let newBtnObj = document.createElement('button');

console.log(newBtnObj.innerText = "New Button!!");

let paraObj = document.querySelector('p');

console.dir(paraObj);
console.log(paraObj.insertAdjacentElement('beforebegin', newBtnObj));

let clonedBtn1 = newBtnObj.cloneNode(true);

console.log(paraObj.insertAdjacentElement('afterbegin', clonedBtn1));

let clonedBtn2 = newBtnObj.cloneNode(true);

console.log(paraObj.insertAdjacentElement('beforeend', clonedBtn2));

let clonedBtn3 = newBtnObj.cloneNode(true);

console.log(paraObj.insertAdjacentElement('afterend', clonedBtn3));


paraObj.removeChild(clonedBtn1);
paraObj.removeChild(clonedBtn2);

boxObj.remove();
