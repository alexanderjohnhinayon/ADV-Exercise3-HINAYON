import promp from "./promp.js";
import data from "./data.js";

const word = data[Math.floor(Math.random() * data.length)];

const maxAttempts = "HANGMAN".length;
let attempts = 0;

async function runGame() {

    const answer = await promp(`${word.question} `);

    if (answer.toLowerCase() === word.word.toLowerCase()) {
        console.log("Congratulations! You've guessed the word correctly.");
        return;
    } else {
        attempts++;
        console.log(`Progress: ${"HANGMAN".slice(0, attempts)}`);

        if (attempts === maxAttempts - 1) {
            console.log(`Hint: ${word.hint}`);
        }

        if (attempts >= maxAttempts) {
            console.log(`Game Over! The correct word was: "${word.word}".`);
            return;
        }
    }

    return runGame();
}

runGame();
