let h1El = document.querySelector('h1');

// setTimeout(() => {
//     h1El.style.color = 'red';
// }, 1000);

// setTimeout(() => {
//     h1El.style.color = 'orange';
// }, 2000);

// setTimeout(() => {
//     h1El.style.color = 'green';
// }, 3000);


// function changeColor(color) {
//     h1El.style.color = color;
// }

// setTimeout(() => changeColor("red"), 1000);

// setTimeout(() => changeColor("orange"), 2000);

// setTimeout(() => changeColor("green"), 3000);


// function changeColor(color, delay) {
//     setTimeout(() => {
//         h1El.style.color = color;
//     }, delay);
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);


function changeColor(color, delay, nextChangeColor) {
    setTimeout(() => {
        h1El.style.color = color;
        if (nextChangeColor) nextChangeColor();
    }, delay);
}

changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("blue", 1000, () => {
                changeColor("purple", 1000);
            });
        });
    });
});


// Using Promise
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1El.style.color = color;
//             resolve(`${color} color was completed`);
//         }, delay);
//     });
// }

// changeColor("red", 1000)
//     .then((msg) => {
//         console.log(msg);
//         return changeColor("orange", 1000);
//     }).then((msg) => {
//         console.log(msg);
//         return changeColor("green", 1000);
//     }).then((msg) => {
//         console.log(msg);
//         return changeColor("blue", 1000);
//     }).then((msg) => {
//         console.log(msg);
//         return changeColor("purple", 1000);
//     }).then((msg) => {
//         console.log(msg);
//     });
