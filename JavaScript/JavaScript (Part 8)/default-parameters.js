function sum1(a, b = 2) {
    return a + b;
}

console.log(sum1(1));
console.log(sum1(1, 4));
console.log(sum1());

function sum2(a = 3, b) {
    return a + b;
} 

console.log(sum2(1));
console.log(sum2(1, 4));
console.log(sum2());






