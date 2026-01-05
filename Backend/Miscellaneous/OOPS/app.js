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


// Constructors
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

Person.prototype.talk = function() {
    console.log(`Hi, my name is ${this.name}`);
}

let p3 = new Person("adam", 25);
let p4 = new Person("eve", 23);

console.log(p3.talk === p4.talk);


// Classes
class Person2{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
2
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5 = new Person2("adam", 25);
let p6 = new Person2("eve", 23);

console.log(p5);
console.log(p6);

console.log(p5.talk === p6.talk);


// Inheritance
class Person3{
    constructor(name, age) {
        console.log("person class constructor");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person3 {
    constructor(name, age, marks) {
        console.log("student class constructor");
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person3 {
    constructor(name, age, subject) {
        console.log("teacher class constructor");
        super(name, age);
        this.subject = subject;
    }
}

let s1 = new Student("bob", 22, 97);

console.log(s1);
console.log(s1.name);
console.log(s1.age);
console.log(s1.marks);
console.log(s1.talk());

let t1 = new Teacher("Eve", 43, "Science");

console.log(t1);
console.log(t1.name);
console.log(t1.age);
console.log(t1.subject);
console.log(t1.talk());


class Mammal {
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat() {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name);
    }
    bark() {
        console.log("ghauuu..");
    }
    eat() {
        console.log("dog is eating");
    }
}

class Cat extends Mammal {
    constructor(name) {
        super(name);
    }
    meow() {
        console.log("meowww..");
    }
}

let d1 = new Dog("juby");

console.log(d1);
console.log(d1.name);
console.log(d1.type);
console.log(d1.bark());
console.log(d1.eat());

let c1 = new Cat("Lucy");

console.log(c1);
console.log(c1.eat());