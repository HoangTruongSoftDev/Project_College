"use strict";
/*
 here we want to implement a simple game to a little bit more review the concept of class
 in typescript. In fact, let's randomly egnerate a number, and the player will agve to guess that the game will provide feedback

* */
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var GuessMyNumber = /** @class */ (function () {
    function GuessMyNumber(minNumber, maxNumber) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.secretNumber = 12;
        // let's generate a random number between minNumber and maxNumber
        this.secretNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    }
    GuessMyNumber.prototype.guess = function (number) {
        if (number === this.secretNumber) {
            return "Congrats, you won!";
        }
        else if (number < this.secretNumber) {
            return "Too low, try again!";
        }
        else {
            return "Too high, try again!";
        }
    };
    return GuessMyNumber;
}());
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var minNumber = 1;
var maxNumber = 100;
var game = new GuessMyNumber(minNumber, maxNumber);
console.log("Welcome to play game! Guess a number between ".concat(minNumber, " and ").concat(maxNumber, ": "));
function getUserInput() {
    r1.question("Enter your guess ", function (input) {
        var guess = parseInt(input);
        var result = game.guess(guess);
        console.log(result);
        if (guess !== game.secretNumber) {
            getUserInput();
        }
        else {
            r1.close();
        }
    });
}
getUserInput();
