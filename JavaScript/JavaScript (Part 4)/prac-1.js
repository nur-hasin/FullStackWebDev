const favMovie = "avator";

let guessMovie = prompt("What is my favorite movie?");

while((guessMovie !== favMovie) && (guessMovie !== "quit")) {
    guessMovie = prompt("Wrong! Try again or type 'quit' to exit.");
}

if (guessMovie === favMovie) {
    console.log(`You got it right. My favorite movie is ${favMovie}.`);
} else {
    console.log("You gave up!");
}
