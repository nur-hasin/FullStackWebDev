sayHello(); //hoisting 

function sayHello() {
    console.log("Hello, World!");
}

function outerFunc() { 
    let x = 5;
    let y = 6;

    function innerFunc() { //lexical scope
        return (x + y);
    }

    return innerFunc();
}

console.log(outerFunc());

