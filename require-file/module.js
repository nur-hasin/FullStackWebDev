const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;

// module.exports = 123;
// module.exports = "hello!";

let obj = {
    sum: sum,
    mul: mul,
    g: g,
    PI: PI
};

// module.exports = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI
// };

module.exports = obj;




