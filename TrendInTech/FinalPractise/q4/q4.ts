import * as fs from 'fs';

function analyzeText(filePath: string): void {
    const passage: string = fs.readFileSync(filePath, 'utf-8');

    const wordDict = getWordCount(passage);

    const vowelCount = getVowelOccurrences(passage);
    getResult(wordDict, vowelCount);

}
function getResult(wordDict: { [key: string]: number }, vowelCount: number) {
    console.log("Word Count:");
    for (const [word, count] of Object.entries(wordDict)) {
        console.log(`${word}: ${count}`);
    }
    console.log("Total Vowel Occurrences:", vowelCount);
}
function getWordCount(passage: string) : { [key: string]: number } {
    const words = passage.toLowerCase().split(" ");
    const wordDict: { [key: string]: number } = {};
    for (const word of words) {
        wordDict[word] = (wordDict[word] || 0) + 1;
    }
    return wordDict;
}

function getVowelOccurrences(passage: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
    for (const char of passage.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

// Usage
const filePath = 'q4Test.txt';
analyzeText(filePath);
