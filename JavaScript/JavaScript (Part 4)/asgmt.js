let arr1 = [1, 2, 3, 4, 5, 6, 2, 3];
let num1 = 2;

for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == num1) {
        arr1.splice(i, 1);
    }
}

console.log(arr1);


let num2 = 287152;
let count = 0;

let copy1 = num2;  

while (copy1 > 0) {
    count++;
    copy1 = Math.floor(copy1 / 10);
}

console.log(count);


let sum = 0;

let copy2 = num2;

while (copy2 > 0) {
    let digit = copy2 % 10;
    sum += digit;
    copy2 = Math.floor(copy2 / 10);
}

console.log(sum);


let n = 7;
let fact = 1;

for (let i = 1; i <= n; i++) {
    fact *= i;
}

console.log(fact);


let arr2 = [2, 5, 10, 4, 2, 7, 1, 9];
let large = 0;

for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] > large) {
        large = arr2[i];
    }
}

console.log(large);