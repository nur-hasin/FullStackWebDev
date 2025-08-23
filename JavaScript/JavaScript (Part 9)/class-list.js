let imgObj = document.querySelector('img');

console.log(imgObj.classList);

let headingObj = document.querySelector('h1');

console.log(headingObj.classList.add("heading"));
console.log(headingObj.classList);

console.log(headingObj.classList.add("box"));
console.log(headingObj.classList);

console.log(headingObj.classList.add("oldImg"));
console.log(headingObj.classList);

console.log(headingObj.classList.remove("oldImg"));
console.log(headingObj.classList);

console.log(headingObj.classList.contains("oldImg"));
console.log(headingObj.classList.contains("box"));

console.log(headingObj.classList.toggle("oldImg"));
console.log(headingObj.classList.toggle("oldImg"));
