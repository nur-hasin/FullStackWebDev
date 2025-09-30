async function greet() {

}

console.log(greet());


async function greet2() {
    return "hi";
}

console.log(greet2());


async function greet3() {
    abc.abc();
}

console.log(greet3());


async function greet4() {
    throw "some random error";
}

console.log(greet4());


async function greet5() {
    return "hello";
}

greet5()
    .then((result) => {
        console.log("promise was resolved with result: " + result);
    })
    .catch((error) => {
        console.log("promise was rejected with error: " + error);
    });


async function greet6() {
    throw "weak connection";
}

greet6()
    .then((result) => {
        console.log("promise was resolved with result: " + result);
    })
    .catch((error) => {
        console.log("promise was rejected with error: " + error);
    });


let greet7 = async () => {
    return "as-salamu alaykum";
};

console.log(greet7());
