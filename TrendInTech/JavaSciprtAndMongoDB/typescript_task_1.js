"use strict";
/*
This is your in-class task and it is NOT graded. Thus, no submission is required.

Now that you have learned how to work with files in typescript, develop a code to read
content of a text file and sort the numbers and then replace the sorted numbers with the original
numbers in the text file. Please note that you have to run three steps:

    1. open a file and read numbers -- do not forget to convert them into numbers
    2. copy them into an array and sort them.
    3. Overwrite the array into the text file. Obviously, after this step, the text file should
    contain sorted numbers only.
* */
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var node_fs_1 = require("node:fs");
function readNumbersFromFile(filePath) {
    var data = fs.readFileSync(filePath, 'utf-8');
    var numberAsString = data.trim().split('\n');
    var numbers = numberAsString.map(function (numStr) { return parseInt(numStr); });
    return numbers;
}
function writeNumbersIntoFile(filePath, numbers) {
    var data = numbers.map(function (num) { return num.toString() + '\n'; }).join('');
    // Write sorted numbers to a new file
    try {
        (0, node_fs_1.writeFileSync)(filePath, data, 'utf-8');
    }
    catch (error) {
        console.error('Error writing file:', error);
    }
}
var numbers = readNumbersFromFile("numbers.txt");
var sortedNumbers = numbers.sort(function (a, b) { return a - b; });
writeNumbersIntoFile("numbers.txt", sortedNumbers);
