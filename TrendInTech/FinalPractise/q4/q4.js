"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function analyzeText(filePath) {
    var passage = fs.readFileSync(filePath, 'utf-8');
    // Calculate word frequencies
    var wordFreqs = calculateWordFrequencies(passage);
    // Calculate vowel occurrences
    var vowelCount = calculateVowelOccurrences(passage);
    // Output results
    console.log("Word Frequencies:");
    for (var _i = 0, _a = Object.entries(wordFreqs); _i < _a.length; _i++) {
        var _b = _a[_i], word = _b[0], frequency = _b[1];
        console.log("".concat(word, ": ").concat(frequency));
    }
    console.log("Total Vowel Occurrences:", vowelCount);
}
function calculateWordFrequencies(passage) {
    var words = passage.toLowerCase().split(" ");
    console.log("===================" + words);
    var wordFreqs = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        wordFreqs[word] = (wordFreqs[word] || 0) + 1;
    }
    return wordFreqs;
}
function calculateVowelOccurrences(passage) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var vowelCount = 0;
    for (var _i = 0, _a = passage.toLowerCase(); _i < _a.length; _i++) {
        var char = _a[_i];
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}
// Usage
var filePath = 'q4Test.txt';
analyzeText(filePath);
