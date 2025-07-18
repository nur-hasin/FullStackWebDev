let arr1 = [7, 9, 0, -2];
let n1 = 3;
let ans1 = arr1.slice(0, n1);

console.log(ans1);


let arr2 = [7, 9, 0, -2];
let n2 = 3;
let ans2 = arr2.slice(arr2.length - n2);

console.log(ans2);


let str1 = prompt("Please enter a string:");

if (str1.length == 0) {
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");
}


let char = prompt("Please enter a character:");
let charIdx = prompt("Please enter a character index:");

if (char[charIdx] == char[charIdx].toLowerCase()) {
    console.log("The character is lowercase.");
} else {
    console.log("The character is not lowercase.");
}


let str2 = prompt("Please enter a string:");

console.log(`The string is: ${str2}`);
console.log(`The string without spaces: ${str2.trim()}`);


let arr3 = prompt("Please enter a array:");
let element = prompt("Please enter an element:");

if (arr3.indexOf(element) != -1) {
    console.log("The element exists in the array.");
} else {
    console.log("The element doesn't exist in the array.");
}


