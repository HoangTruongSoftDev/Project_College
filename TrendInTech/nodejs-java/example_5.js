/*
    In order to quickly review the arrow function in javascript, today we will implement a code which
    reads a paragragh from the terminal and counts how many character does it have
* */

const readline = require('readline')
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question('Please enter a paragraph: ', (paragraph) => {
    const countCharacters = (text) => text.length
    const numberOfCharacters = countCharacters(paragraph)
    console.log(`The paragraph has ${numberOfCharacters} characters.`)
    r1.close()
})

