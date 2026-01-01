// Object Prototypes
let arr1 = [1, 2, 3];
arr1.sayHello = () => {
    console.log("Hello, i am arr");
};

console.log(arr1);
console.log(arr1.__proto__);

arr1.__proto__.push = (n) => {
    console.log(`pushing number: ${n}`);
};

console.log(arr1.push(5));
console.log(arr1);

console.log(Array.prototype);
console.log(String.prototype);

let arr2 = [1, 2, 3];
arr2.sayHello = () => {
    console.log("Hello, i am arr");
};

console.log(arr1.sayHello === arr2.sayHello);
console.log("abc".toUpperCase === "xyz".toUpperCase);


// Factory Functions
