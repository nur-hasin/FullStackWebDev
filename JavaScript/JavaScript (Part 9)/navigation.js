let headingObj = document.querySelector('h4');

console.log(headingObj.parentElement);
console.log(headingObj.children);

let boxObj = document.querySelector('.box');

console.log(boxObj.children);
console.log(boxObj.childElementCount);

let listObj = document.querySelector('ul');

console.log(listObj.parentElement);
console.log(listObj.children);
console.log(listObj.childElementCount);
console.log(listObj.children[0]);
console.log(listObj.children[1]);
console.log(listObj.children[2]);
console.log(listObj.children[1].previousElementSibling);
console.log(listObj.children[1].nextElementSibling);

let imgObj = document.querySelector('img');

console.log(imgObj.previousElementSibling);
console.log(imgObj.previousElementSibling.style.color = "green");
