
import * as fs from "fs"
import {writeFileSync} from "node:fs";

function readNameFromFile(filePath: string): string[] {
    const data: string = fs.readFileSync(filePath, 'utf-8');
    const names: string[] = data.trim().split('\n');
    return names;
}

const names = readNameFromFile('names.txt');

function writeNameIntoFile(filePath: string, names: string[]) {
    var data = ""
    names.forEach(name => data += name + ': ' + name.length + '\n');
    // Write sorted numbers to a new file
    try{
        writeFileSync(filePath, data, 'utf-8');
    } catch (error) {
        console.error('Error writing file:', error);
    }
}
writeNameIntoFile('names.txt', names);

