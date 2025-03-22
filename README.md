🎮 Node.js Guess the Number Game
Welcome to the Guess the Number game! 🔢 This is a simple command-line game built with Node.js, where the player must guess a randomly generated number between 1 and 100.

🚀 How to Play
The game will pick a random number between 1 and 100.

You will be prompted to enter a guess.

The game will give you hints:

📉 Too low! → Try a higher number.

📈 Too high! → Try a lower number.

🎉 Correct! → You win!

The game will track the number of attempts until you guess correctly.

⚡ Installation & Setup
Make sure you have Node.js installed. Then, follow these steps:

# Clone the repository (or create the file manually)
git clone https://github.com/your-username/guess-the-number-game.git

# Navigate to the project folder
cd guess-the-number-game

# Run the game
node game.js
📜 Code Overview
The game is written in JavaScript (Node.js) and utilizes the readline module for user input.

Generates a random number using Math.random().

Takes user input and checks if the guess is correct.

Provides hints if the guess is too high or too low.

Counts the number of attempts before the correct guess.

📌 Example Gameplay
sh

Welcome to Guess the Number!
I’ve picked a number between 1 and 100. Try to guess it!

Enter your guess: 50
Too low! Try again.

Enter your guess: 75
Too high! Try again.

Enter your guess: 63
Too low! Try again.

Enter your guess: 68
You got it! The number was 68. It took you 4 attempts.
🛠️ Future Improvements
🔹 Add a difficulty mode (easy, medium, hard).
🔹 Implement a timer to track how long the player takes.
🔹 Allow multiple rounds without restarting the script.

📜 License
This project is open-source. Feel free to modify and share it! 🚀
