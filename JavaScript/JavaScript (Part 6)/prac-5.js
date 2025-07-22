function getSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(10));
console.log(getSum(100));
console.log(getSum(1000));
