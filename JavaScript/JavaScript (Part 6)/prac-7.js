let greet = "hello"; //global scope

function changeGreet() {
    let greet = "assalamu alaykum"; //function scope
    console.log(greet);

    function innerGreet() {
        console.log(greet); //lexical scope
    }

    innerGreet();
}

console.log(greet);
changeGreet();