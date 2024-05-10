/*
implement a project in javascript which opens a text file and detects the language of the text. For example,
you will give the address and the name of the file which inside of it you have some texts in French then your
code should print French. If the text is in Spanish, then you should print Spanish.
* */

const fs = require('fs'); // File system module for Node.js
const franc = require('franc'); // Language detection library

const filePath = 'detectLanguage'; // Replace with actual path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const text = data.toString();
    const language = franc(text);

    console.log('Detected language:', language);
});