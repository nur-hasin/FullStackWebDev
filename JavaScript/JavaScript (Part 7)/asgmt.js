let arr = [1, 2, 3, 4, 5, 6];

const arrayAverage = (arr) => {
    let total = 0;

    for (let num of arr) {
        total += num;
    }

    return total / arr.length;
};

console.log(arrayAverage(arr));


let num = 6;

const isEven = (num) => {
    if (num % 2 == 0) {
        return "Even number";
    } else {
        return "Not an even number";
    }
};

console.log(isEven(num));


const object1 = {
    message: 'Hello, World!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object1.logMessage, 1000);


let length = 4;

function callback() {
    console.log(this.length);
}

const object2 = {
    length: 5,

    method(callback) {
        callback();
    }
};

object2.method(callback, 1, 2);
