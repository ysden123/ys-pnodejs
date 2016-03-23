// Playing with regular expressions.
'use strict';
var fs = require('fs'); 

function f1() {
    console.log('==>f1');
    let input = 'ads.williamhill.it/redirect.aspx?pid=183946190&lpid=1479235345&bid=1472468508&var5={keyword}&var6={yahooitaly289_ad001}'
    // let match = input.match(/var6={(.*)}_/);
    // let match = input.match(/var6=(.*)/);
    let match = input.match(/var6={(.*)_/);
    console.log(match);
    if (match && match[1]) {
        console.log(match[1]);
    } else {
        console.log('No match was found');
    }
}

f1();