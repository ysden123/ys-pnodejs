// Pattern decorator http://nickmeldrum.com/blog/decorators-in-javascript-using-monkey-patching-closures-prototypes-proxies-and-middleware?utm_source=javascriptweekly&utm_medium=email
// Pattern with closure.
'use strict';
function myComponentFactory() {
    let suffix = ''

    return {
        setSuffix: suf => suffix = suf,
        printValue: value => console.log(`value is ${value + suffix}`)
    }
}

function toLowerDecorator(inner) {
    return {
        setSuffix: inner.setSuffix,
        printValue: value => inner.printValue(value.toLowerCase())
    }
}

function validatorDecorator(inner) {
    return {
        setSuffix: inner.setSuffix,
        printValue: value => {
            const isValid = ~value.indexOf('My')

            setTimeout(() => {
                if (isValid) inner.printValue(value)
                else console.log('not valid man...')
            }, 500)
        }
    }
}

const component = validatorDecorator(toLowerDecorator(myComponentFactory()))
component.setSuffix('!')
component.printValue('My Value')
component.printValue('Invalid Value')