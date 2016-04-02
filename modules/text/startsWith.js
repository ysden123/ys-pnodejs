// Playing with ~ operator
'use strict';
function contains(text, check) {
    let test = text.indexOf(check);
    let isContains = ~test;
    let b = isContains ? true : false;
    console.log({ text: text, check: check, test: test, isContains: isContains, b: b });
}

contains('Mytext', 'My');
contains('text', 'My');
contains('teMyxt', 'My');