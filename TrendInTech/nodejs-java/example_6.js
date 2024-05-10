/*
    It is possible to reimplement example_5 without arrow function. See below
* */
const readline = require('readline')
const r2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function countCharacters(text) {
    return text.length
}

r2.question("Please enter a paragraph for the 2nd time: ", function (paragraph) {
    const numberOfCharacters = countCharacters(paragraph)
    console.log('The paragraph has '+ numberOfCharacters + ' characters.')
    r2.close()
})