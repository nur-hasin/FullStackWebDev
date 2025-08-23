let imgObj = document.querySelector('img');

console.dir(imgObj);

console.log(imgObj.getAttribute('id'));
console.log(imgObj.setAttribute('id', 'spidermanImg'));

console.log(imgObj.getAttribute('src'));
console.log(imgObj.setAttribute('src', "assets/creation_3.jpeg"));

console.log(imgObj.getAttribute('class'));
console.log(imgObj.setAttribute('class', 'images'));
console.log(imgObj.getAttribute('class'));


let headingObj = document.querySelector('h1');

console.dir(headingObj);
console.log(headingObj.style);
console.log(headingObj.style.color = 'purple');
console.log(headingObj.style.backgroundColor = 'skyblue');

let linkObj = document.querySelectorAll('.box a');

console.dir(linkObj);

for (link of linkObj) {
    link.style.color = "darkgreen";
}

let boxObj = document.querySelector('.box');

console.dir(boxObj);
console.log(boxObj.style);

