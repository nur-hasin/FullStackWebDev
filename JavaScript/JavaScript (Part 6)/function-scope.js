let sum = 0; // Global Scope

function calcSum(a, b) {
    let sum = a + b; // Function Scope
    console.log(sum);
}

calcSum(1, 2);
console.log(sum);
