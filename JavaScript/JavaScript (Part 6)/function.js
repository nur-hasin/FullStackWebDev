function hello() {
    console.log("hello");
}

hello();

function printName() {
    console.log("apna college");
    console.log("shradha khapra");
}

printName();

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

print1to5();

function isVoter(age) {
    if (age >= 18) { 
        console.log("You can vote");
    } else {
        console.log("You can not vote");
    }
}

isVoter(15);
isVoter(20);