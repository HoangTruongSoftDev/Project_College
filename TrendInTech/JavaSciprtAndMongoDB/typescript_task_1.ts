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

import * as fs from "fs"
import {writeFile, writeFileSync} from "node:fs";

function readNumbersFromFile(filePath: string): number[] {
    const data: string = fs.readFileSync(filePath, 'utf-8');
    const numberAsString: string[] = data.trim().split('\n');
    const numbers: number[] = numberAsString.map(numStr => parseInt(numStr));
    return numbers;
}



function writeNumbersIntoFile(filePath: string, numbers: number[]) {
    const data = numbers.map(num => num.toString() + '\n').join('');
    // Write sorted numbers to a new file
    try{
        writeFileSync(filePath, data, 'utf-8');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}

const numbers = readNumbersFromFile("numbers.txt");
const sortedNumbers = numbers.sort((a,b) => a - b);
writeNumbersIntoFile("numbers.txt", sortedNumbers);

