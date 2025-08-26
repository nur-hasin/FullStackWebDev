let divEl = document.querySelector('div');
let ulEl = document.querySelector('ul');
let liEls = document.querySelectorAll('li');

divEl.addEventListener('click', function () {
    console.log("box was clicked");
});

ulEl.addEventListener('click', function (e) {
    e.stopPropagation();
    console.log("unorder list was clicked");
});

for (let liEl of liEls) {
    liEl.addEventListener('click', function (e) {
    e.stopPropagation();
        console.log("list item was clicked");
    });
}    


let btnEl = document.querySelector('button');

btnEl.addEventListener('click', (e) => {
    console.log("Clicked A");
    e.stopImmediatePropagation(); 
});

btnEl.addEventListener('click', () => {
    console.log("Clicked B"); 
});

btnEl.addEventListener('click', () => {
    console.log("Clicked C");
});
