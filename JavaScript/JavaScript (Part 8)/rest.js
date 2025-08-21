function sum(...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log(sum(1, 2, 3, 4, 5));


function getMin(msg, ...args) {
    console.log(msg);
    
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    });
}

console.log(getMin("hello", 3, 8, -9, 23));
