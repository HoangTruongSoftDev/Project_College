/*
    Using arrow function, read multiple numbers and store them in array. Then print the average of the array

* */

// myArray = []
//
// let readline = require('readline')
// r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function inputNumber() {
//     r1.question("Enter a number you want to store: ", (userInput) => {
//         let number = parseInt(userInput);
//         storeNumber(number)
//         r1.question("Do you want to continue (y/n): ", (userInput) => {
//             if (userInput === "y") {
//                 inputNumber();
//             }
//             else if (userInput === "n"){
//                 r1.close()
//                 myArray.forEach((element) => {
//                     sum += element;
//                 });
//                 console.log(`The average of array is: ${sum / myArray.length}`);
//             }
//
//         })
//     })
// }
// let storeNumber = (number) => {
//     myArray.push(number)
// }
// inputNumber()
// let sum = 0
// myArray.forEach((element)=> {
//     sum += element
// })
// console.log(`The average of array is: ${sum / myArray.length}`)

// Another way
// let myArray = [];
// let readline = require('readline');
// let r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// let storeNumber = (number) => {
//     myArray.push(number);
// };
//
// let sum = 0;
//
// function askQuestion() {
//     r1.question("Enter a number you want to store: ", (userInput) => {
//         let number = parseInt(userInput);
//         storeNumber(number);
//
//         r1.question("Do you want to continue (y/n): ", (userInput) => {
//             if (userInput === "y") {
//                 askQuestion(); // Ask the next question recursively
//             } else if (userInput === "n") {
//                 r1.close(); // Close the interface when done
//                 myArray.forEach((element) => {
//                     sum += element;
//                 });
//                 console.log(`The average of array is: ${sum / myArray.length}`);
//             }
//         });
//     });
// }
//
// askQuestion(); // Start asking questions


// teacher ways
const calculateAverage = (numbers) => {
    // check if the array is empty
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) =>
        acc + num, 0
    )
    /*
        Regarding the above line of code
        numbers: is th array

        reduce(): this is built-in method available for arrays in JS. It is used to reduce an array to a single value by applying a function to each element

        (acc, num) => acc + num: This is the callback function provided to reduce which takes 2 parameters of acc and num. More specifically, acc is the accumulator which stores accumulated result of the previous iterations.
            Also, num is the current element being processed in the array.
            The callback function adds the current element (num) to the accumulator (acc), effectively accumulating the sum

        0: the number zero in above line is the initial value for the accumulator. In this case start from 0

        Overall: The reduce methods iterates over each element in the number array and for each element, it adds the element to the accumulator. The final result stores the sum variable which is the sum of all elements  in the array

        For example of numbers is like [1,2,3,4], then the reduce method would perform the following operation:
            1. Iteration 1: acc = 0, num = 1, then acc+num = 1
            2. Iteration 2: acc = 1, num = 2, then acc+num = 3
            3. Iteration 1: acc = 3, num = 3, then acc+num = 6
            4. Iteration 1: acc = 6, num = 4, then acc+num = 10

    * */
    // compute the average
    const avg = sum / numbers.length;
    return avg
}

// example for array of numbers
const inputNumbers = [12, 89, -3, 47, 108]
// call the above method and pass the array
const result = calculateAverage(inputNumbers)
console.log(`The average of the numbers is: ${result}`)