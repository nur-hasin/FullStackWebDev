const calculator1 = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    }
};

console.log(calculator1.add(10, 5));
console.log(calculator1.sub(10, 5));

const calculator2 = {
    prod(a, b) {
        return a * b;
    },
    quot(a, b) {
        return a / b;
    }
};

console.log(calculator2.prod(10, 5));
console.log(calculator2.quot(10, 5));