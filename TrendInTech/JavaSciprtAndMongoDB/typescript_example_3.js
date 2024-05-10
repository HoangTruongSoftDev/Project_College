"use strict";
/*
In this example we want to practise how to read content of a text file
and assuming it has multiple numbers.txt and we want to compute average

Toward this end, we need to import the file system package for input/output operations

we need add this line of the code: import * as fs from "fs"

we need to install this in terminal to execute import above: npm install --save-dev @types/node
* */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function readNumbersFromFile(filePath) {
    // read file content synchronously
    var data = fs.readFileSync(filePath, 'utf-8');
    //split the content into an array of strings where each represents a number
    var numberAsString = data.trim().split('\n');
    // as you know the above line means read line by line and trim() removes spaces before and after the string
    // now we can convert each string into a number
    var numbers = numberAsString.map(function (numStr) { return parseInt(numStr); });
    return numbers;
}
// we define another function for calculating average
function calculateAverage(numbers) {
    //calculate the sum of all numbers.txt
    var sum = numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
    // meaning that acc saves the accumulated and curr refers to the current value that should be added together, and 0 means, acc should be initialized to zero
    var average = sum / numbers.length;
    return average;
}
// we will give path to text file
var filePath = 'numbers.txt';
// read operation with calling the first method
var numbers = readNumbersFromFile(filePath);
//calculate the average
var average = calculateAverage(numbers);
// print the result
console.log('Average of numbers.txt: ', average);
// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>
