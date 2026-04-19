export default function outer() {
    let b = 10;

    function inner() {        
        let a = 10;
        console.log(a+b);
    }

    return inner;
}

console.log(outer());

let inner = outer();
console.log(inner());
