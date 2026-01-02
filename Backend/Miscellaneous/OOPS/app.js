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
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${this.name}`);
        }
    };

    return person;
}

let p1 = PersonMaker("adam", 25);
let p2 = PersonMaker("eve", 23);

console.log(p1);
console.log(p2);

console.log(p1.talk());
console.log(p2.talk());

console.log(p1.talk === p2.talk);


// Constructor


