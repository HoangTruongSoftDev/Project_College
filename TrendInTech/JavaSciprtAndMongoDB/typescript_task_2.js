"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var node_fs_1 = require("node:fs");
function readNameFromFile(filePath) {
    var data = fs.readFileSync(filePath, 'utf-8');
    var names = data.trim().split('\n');
    return names;
}
var names = readNameFromFile('names.txt');
function writeNameIntoFile(filePath, names) {
    var data = "";
    names.forEach(function (name) { return data += name + ': ' + name.length + '\n'; });
    // Write sorted numbers to a new file
    try {
        (0, node_fs_1.writeFileSync)(filePath, data, 'utf-8');
    }
    catch (error) {
        console.error('Error writing file:', error);
    }
}
writeNameIntoFile('names.txt', names);
