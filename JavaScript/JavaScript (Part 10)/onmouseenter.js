let btnEls = document.querySelectorAll('button');

console.dir(btnEls);

for (let btnEl of btnEls) {
    btnEl.onclick = function () {
        console.log("Like me");
    };
    btnEl.onmouseenter = function () {
        console.log("you entered a button");
    };
}
