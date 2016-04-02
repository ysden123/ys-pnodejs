// Pattern decorator http://nickmeldrum.com/blog/decorators-in-javascript-using-monkey-patching-closures-prototypes-proxies-and-middleware?utm_source=javascriptweekly&utm_medium=email
'use strict';
function myComponentFactory() {
    let suffix = ''

    return {
        setSuffix: suf => suffix = suf,
        printValue: value => console.log(`value is ${value + suffix}`)
    }
}

const component = myComponentFactory();
component.setSuffix('!');
component.printValue('My Value');
