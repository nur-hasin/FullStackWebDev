let arr1 = [1, 2, 3, 4, 5];

let newArr = [...arr1];

console.log(...arr1);
console.log(arr1);
console.log(newArr);
arr1.push(6);
console.log(arr1);
console.log(newArr);


let chars = [..."hello"];

console.log(chars);
console.log(..."hello");


let odd = [1, 3, 5, 7, 9];

let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];

console.log(nums);
console.log(...even, ...odd);


const data = {
    email: "yoko@gmail.com",
    password: "abc123"
};

const dataCopy = {...data, id: 10, country: "USA"};

console.log(dataCopy);


let arr2 = [1, 2, 3, 4, 5];

let obj1 = { ...arr2 };

console.log(obj1);


let str = ["hello", "world"];

let obj2 = { ...str };

console.log(obj2);


let obj3 = { ..."hello" };

console.log(obj3);