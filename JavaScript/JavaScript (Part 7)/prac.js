const square = n => n * n;

console.log(square(5));

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Interval cleared after 10 seconds");
}, 10000);