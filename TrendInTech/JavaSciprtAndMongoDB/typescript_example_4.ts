/*
 here we want to implement a simple game to a little bit more review the concept of class
 in typescript. In fact, let's randomly egnerate a number, and the player will agve to guess that the game will provide feedback

* */

import * as readline from "readline";

class GuessMyNumber {
    public readonly secretNumber: number = 12;
    constructor(private readonly  minNumber: number, private readonly maxNumber: number) {
        // let's generate a random number between minNumber and maxNumber
        this.secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }
    public guess(number: number): string {
        if (number === this.secretNumber) {
            return "Congrats, you won!";
        }
        else if (number < this.secretNumber) {
            return "Too low, try again!";
        }
        else {
            return "Too high, try again!";
        }
    }
}

const r1: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const minNumber = 1;
const maxNumber = 100;

const game = new GuessMyNumber(minNumber, maxNumber);

console.log(`Welcome to play game! Guess a number between ${minNumber} and ${maxNumber}: `);

function getUserInput() {
    r1.question("Enter your guess ", (input) => {
        const guess = parseInt(input);
        const result = game.guess(guess);
        console.log(result);
        if (guess !== game.secretNumber) {
            getUserInput();
        }
        else {
            r1.close();
        }
    })
}
getUserInput();