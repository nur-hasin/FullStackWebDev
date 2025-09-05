function hello() {
    console.log("inside hello func");
    console.log("hello");
}

function demo() {
    console.log("calling hello func");
    hello();
}

console.log("calling demo func");
demo();
console.log("done, bye!");


function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    return ans;
}

console.log(three());
