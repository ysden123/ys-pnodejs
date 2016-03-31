// Playing with calback - named callback.

function f(arg, callback) {
    callback(arg);
}

f('named function', function onArg(a) {
    console.log('onArg, a:', a);
});

f('anonymous function', function(a) {
    console.log('onArg, a:', a);
});

f('arrow function', a => {
    console.log('onArg, a:', a);
});