/*
    Using arrow function, read multiple numbers and store them in array. Then print the average of the array

* */

// This code is an extension for task_2. The difference is that,  here we want to read numbers from console

const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calculateAverage = numbers => {
    if (numbers.length === 0) {
        return 0;
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    return average;
};

// Function to read numbers from the console
const readNumbersFromConsole = () => {
    const numbers = [];

    // Recursive function to read numbers asynchronously
    const readNumber = () => {
        r1.question('Enter a number (press Enter on an empty line to finish): ', (userInput) => {
            if (userInput === '') {
                r1.close();
            } else {
                const number = parseInt(userInput);
                if (!isNaN(number)) {
                    numbers.push(number);
                    readNumber(); // Continue reading numbers
                } else {
                    console.log('Invalid input. Please enter a valid number.');
                    readNumber(); // Continue reading numbers
                }
            }
        });
    };

    // Start reading numbers
    readNumber();

    return new Promise((resolve) => {
        r1.on('close', () => resolve(numbers));
    });
};

// Call the readNumbersFromConsole function to get an array of numbers
readNumbersFromConsole().then((inputNumbers) => {
    // Call the calculateAverage function with the array
    const result = calculateAverage(inputNumbers);

    // Display the average
    console.log(`The average of the entered numbers is: ${result}`);
});