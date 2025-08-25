let divEl1 = document.querySelector('#box');

divEl1.addEventListener('mouseout', (event) => {
    console.log(event.target);
    console.log(event.relatedTarget);

    console.log("mouse left the box");
    console.log("From:", event.target);
    console.log("To:", event.relatedTarget);
});


let inputEl1 = document.querySelector('#keypress');

inputEl1.addEventListener('keypress', (event) => {
    console.log("Key pressed:", event.key);
    console.log("Code:", event.code);
});


let divEl2 = document.querySelector('#scrollBox');

divEl2.addEventListener('scroll', () => {
    console.log("Top:", Math.round(divEl2.scrollTop), "Left:", Math.round(divEl2.scrollLeft));
});


let imgEl = document.querySelector('#randomImg');

imgEl.addEventListener('load', () => {
    console.dir(imgEl);

    console.log("Image loaded:", imgEl.src);
    console.log("Natural size:", imgEl.naturalWidth, "x", imgEl.naturalHeight);
}); 



let btnEl = document.createElement('button');

btnEl.innerText = "Click me!";
document.querySelector('body').appendChild(btnEl);

btnEl.addEventListener('click', () => {
    btnEl.style.color = "green";
});



let inputEl2 = document.querySelector('#inputName');
let h2El = document.querySelector('h2');

inputEl2.addEventListener('input', () => {
    let filtered = inputEl2.value.replace(/[^a-zA-Z\s]/g, "");
    
    inputEl2.value = filtered;
    h2El.innerText = inputEl2.value;
});
