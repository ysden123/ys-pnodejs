/*
 * Copyright (c) 2017. Yuriy Stul
 */

/**
 * Example of reporter with usage of closure
 */
'use strict';
const fs = require('fs');

// Function to create reporter (closure)
function reporter(writer, lineCounter) {
    let reportWriter = writer;
    return (line) => {
        reportWriter.write(line);
        lineCounter()
    }
}

// Function to generate a report - calls the function lineHandler(line) for each report line.
function generateReport(lineHandler) {
    for (let i = 1; i <= 10; ++i)
        lineHandler(`line no ${i}\n`)
}

// Create the writer. In this case it is the file stream writer.
// It may be any writer, e.g. database writer
let writer = fs.createWriteStream('test.txt');

// Function to count lines
function lineCounter() {
    count++
}

// Create the line handler with a writer.
// "lineHandler" is a function with one - a line to process.
let count = 0;
let lineHandler = reporter(writer, lineCounter);

// Generates the report and calls "lineHandler" for each report line.
generateReport(lineHandler);

// Close writer
writer.end();

console.log(`Report contains ${count} lines`);