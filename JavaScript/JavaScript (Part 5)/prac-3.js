const max = Number(prompt("Enter the maximum number:"));

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the maximum number:");

while (true) {
    if (guess === "quit") {
        console.log("You quit the game.");
        break;
    }

    const guessNum = Number(guess);

    if (guessNum === random) {
        console.log("Congratulation! You guessed the correct number:", random);
        break;
    } else if (guessNum < random) {
        guess = prompt("Your guess is too small. Please try again:");
    } else if (guessNum > random) {
        guess = prompt("Your guess is too large. Please try again:");
    } else {
        guess = prompt("Invalid input. Please enter a number:");
    }
} 