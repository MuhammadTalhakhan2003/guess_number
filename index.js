const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to Guess the Number!");
console.log("I’ve picked a number between 1 and 100. Try to guess it!");

// Prompt the player for a guess
function askGuess() {
  rl.question("Enter your guess: ", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess) || guess < 1 || guess > 100) {
      console.log("Please enter a valid number between 1 and 100.");
    } else if (guess < secretNumber) {
      console.log("Too low! Try again.");
    } else if (guess > secretNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(`You got it! The number was ${secretNumber}. It took you ${attempts} attempts.`);
      rl.close();
      return;
    }

    askGuess(); 
  });
}

askGuess();