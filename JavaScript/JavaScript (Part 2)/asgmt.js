let num = 130;

if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}


let userName = prompt("Please enter your name:");
let age = prompt("Please enter your age:");
alert(`${userName} is ${age} years old.`);


let quarter = 3;

switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Not a QUARTER!");
} 


let str = "Angel";

if ((str[0] === 'a' || str[0] === 'a') && (str.length > 5)) {
    console.log("golden string");
} else {
    console.log("not a golden string");
}


let num1 = 74;
let num2 = 7;
let num3 = 234;

if (num1 > num2) {
    if (num1 > num3) {
        console.log(num1, "is largest");
    } else {
        console.log(num3, "is largest");
    }
} else {
    if (num2 > num3) {
        console.log(num2, "is largest");
    } else {
        console.log(num3, "is largest");
    }
}


let num4 = 32;
let num5 = 47852;

let lastDigit1 = num4 % 10;
let lastDigit2 = num5 % 10;

if (lastDigit1 == lastDigit2) {
    console.log("numbers have the same last digit which is", lastDigit1);
} else {
    console.log("numbers don't have the same last digit");
}