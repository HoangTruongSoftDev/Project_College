const fs = require('langdetect');
const franc = require('franc');

// Function to read the text file
function readTextFile(filePath) {
    let file = filePath.files[0];

    let reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function() {
        console.log(reader.result);
    };

    reader.onerror = function() {
        console.log(reader.error);
    };
}

// Function to detect the language of the text
function detectLanguage(text) {
    const languageCode = franc(text);
    return franc.all(text).find(lang => lang[0] === languageCode)[1];
}

// Main function
function detectLanguageOfFile(filePath) {
    const text = readTextFile(filePath);
    if (text) {
        const language = detectLanguage(text);
        console.log('Detected language:', language);
    }
}

// Usage example
const filePath = 'path/to/your/textfile.txt';
detectLanguageOfFile(filePath);