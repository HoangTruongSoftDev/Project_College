/*
 Implement a code with arrow function which reads multiple numbers from terminal
 and print the square root of all of them. For example if [2,4,8] are given as input, your
 code should print [4,16,64] into the console
*/

const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var array = []
// while (true) {
//     r1.question('Enter a number you want: ', function (number){
//         array.push(parseInt(number))
//         r1.close()
//     })
//     r1.question('Do you want to continue(y/n): ', function (answer){
//         if (answer === 'y') {
//             break
//         }
//         r1.close()
//     })
// }

function getInput() {
    r1.question('Enter a number: ', function (number) {
        array.push(parseInt(number));
        r1.question('Do you want to continue (y/n)? ', function (answer) {
            if (answer.toLowerCase() === 'y') {
                getInput(); // Recursive call to continue getting input
            } else {
                const sqrt = (number) => number * number
                var squareRootArray = []
                squareRootArray = array.map(num => sqrt(num))
                // for (let i = 0; i < array.length; i++) {
                //     squareRootArray.push(sqrt(array[i]))
                // }
                console.log('Result: ' + squareRootArray)
                r1.close();
            }
        });
    });
}
getInput()