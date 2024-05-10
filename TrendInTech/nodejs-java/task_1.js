/*
    Using arrow function, read an integer number and detect it is odd or even
* */

let isOddOrEven = (number) => {
    // if (number % 2 === 0) {
    //     return "Even"
    // }
    // else {
    //     return "Odd"
    // }
    return number % 2 === 0 ? "Even" : "Odd"
}
console.log(isOddOrEven(11))

// Teacher's way
// In JavaScript the symbol for comparison is === not ==
const OddEvenDetector = (number) => {
    if (number % 2 === 0) {
            return "Even";
    }
    else {
        return "Odd";
    }
};

// Read a number from the user
// const userInput = prompt("Enter an integer number: ")
// parse the input
// const number = parseInt(userInput)
// call the methods above and pass argument to it
// const result = OddEvenDetector(number)
// console.log(`The number ${number} is ${result}`)

// in JS we have to use $ sign before {} if we want to replace the variable inside of {} with an actual value
const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
r1.question("Enter an integer number: ", (userInput) => {
    const number = parseInt(userInput);
    const result = OddEvenDetector(number)
    console.log(`The number ${number} is ${result}`)
    r1.close();
})
