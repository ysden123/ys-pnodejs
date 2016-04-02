// Playing with boolean.
// Any number (positive or negative) that not equal to zero gives true, zero give false.
function t(v) {
    console.log(`v: ${v} => ${v ? 'true' : 'false'}`);
}
t(0);
t(1);
t(10);
t(-1);
t(-10);

function tNot(v) {
    console.log(`v: ${v}, NOT v(${~v}) => ${~v ? 'true' : 'false'}`);
}
tNot(0);
tNot(1);
tNot(10);
tNot(-1);
tNot(-10);