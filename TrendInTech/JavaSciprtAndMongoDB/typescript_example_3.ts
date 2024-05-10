/*
In this example we want to practise how to read content of a text file
and assuming it has multiple numbers.txt and we want to compute average

Toward this end, we need to import the file system package for input/output operations

we need add this line of the code: import * as fs from "fs"

we need to install this in terminal to execute import above: npm install --save-dev @types/node
* */

import * as fs from "fs"

function readNumbersFromFile(filePath: string): number[] {
    // read file content synchronously
    const data: string = fs.readFileSync(filePath, 'utf-8');

    //split the content into an array of strings where each represents a number
    const numberAsString: string[] = data.trim().split('\n');

    // as you know the above line means read line by line and trim() removes spaces before and after the string
    // now we can convert each string into a number
    const numbers: number[] = numberAsString.map(numStr => parseInt(numStr));
    return numbers;
}

// we define another function for calculating average
function calculateAverage(numbers: number[]) :number {
    //calculate the sum of all numbers.txt
    const sum: number = numbers.reduce((acc, curr) => acc + curr, 0);
    // meaning that acc saves the accumulated and curr refers to the current value that should be added together, and 0 means, acc should be initialized to zero
    const average: number = sum / numbers.length;
    return average;
}

// we will give path to text file
const filePath: string = 'numbers.txt';
// read operation with calling the first method
const numbers: number[] = readNumbersFromFile(filePath);
//calculate the average
const average: number = calculateAverage(numbers);
// print the result
console.log('Average of numbers.txt: ', average);

// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>
