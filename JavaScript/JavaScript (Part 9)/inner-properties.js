let paragraphObj = document.querySelector('p');

console.dir(paragraphObj);
console.log(paragraphObj.innerText);
console.log(paragraphObj.textContent);
console.log(paragraphObj.innerHTML);
console.log(paragraphObj.innerText = "Hi, I'm Peter Parker");

let headingObj = document.querySelector('h1');
console.dir(headingObj);
console.log(headingObj.innerHTML = `<u>${headingObj.innerText}</u>`);
