'use strict';
/**
 * Created by Yuriy Stul on 1/13/2017.
 */
function Foo() {
    if (!new.target) throw new Error('Foo() must be called with new');
    console.log('Foo instantiated with new')
}

try {
    Foo();       // throws "Foo() must be called with new"
}
catch (err) {
    console.error(err.toString())
}

new Foo();   // logs "Foo instantiated with new"