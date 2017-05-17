/*
 * Copyright (c) 2017. Yuriy Stul
 */

/**
 * Example of reporter with usage of closure
 */
'use strict';
const fs = require('fs');

// Function to create reporter (closure)
function reporter(writer) {
    let reportWriter = writer;
    return (line) => {
        reportWriter.write(line)
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

// Create the line handler with a writer.
// "lineHandler" is a function with one parameter - a line to process.
let lineHandler = reporter(writer);

// Generates the report and calls "lineHandler" for each report line.
generateReport(lineHandler);

// Close writer
writer.end();
