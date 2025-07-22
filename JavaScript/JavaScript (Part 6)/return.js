function calcSum(a, b) {
    console.log(`Calculating sum: ${a} + ${b}`);
    return (a + b);
}

console.log(calcSum(3, 7));
console.log(calcSum(calcSum(3, 7), 5));

function isVoter(age) {
    if (age >= 18) {
        return "You can vote";
    } else {
        return "You can not vote";
    }
}

console.log(isVoter(17));
console.log(isVoter(25));
