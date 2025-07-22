let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(getElements(arr, num));


let str1 = "abcdabcdefgggh";

function getUniqueChar(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (result.indexOf(str[i]) === -1) {
            result += str[i];
        }
    }

    return result;
}

console.log(getUniqueChar(str1));


let countries = ["Australia", "Germany", "United States of America"];

function getlongestName(countries) {
    let result = "";
    
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > result.length) {
            result = countries[i];
        }
    }
    
    return result;
}

console.log(getlongestName(countries));


let str2 = "apnacollege";

function getVowels(str2) {
    let count = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str2[i] === 'a' ||
            str2[i] === 'e' ||
            str2[i] === 'i' ||
            str2[i] === 'o' ||
            str2[i] === 'u') {
            count++;
        }
    }

    return count;
}

console.log(getVowels(str2));


let start = 100;
let end = 200;

function getRandomNum(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

console.log(getRandomNum(start, end));