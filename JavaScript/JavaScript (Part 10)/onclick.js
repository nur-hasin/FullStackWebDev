let btnEls = document.querySelectorAll('button');
console.dir(btnEls);

btnEls[0].onclick = function () {
    console.log("button 1 was clicked");
};

btnEls[1].onclick = function () {
    console.log("button 2 was clicked");
};

function sayHello() {
    alert("Hello!");
}

btnEls[2].onclick = sayHello;

