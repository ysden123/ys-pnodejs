'use strict';
/**
 * Test class
 */
class C1 {
    /**
     *
     * @param a
     * @param b
     * @param c
     */
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    print() {
        console.log(`a=${this.a}, b=${this.b}, c=${this.b}`);
    }
}

class C2 extends C1 {
    print2() {
        console.log('Just for test');
    }
}

class C3 extends C1 {
    constructor(a, b, c, d) {
        super(a, b, c);

        this.d = d;
    }

    print3() {
        console.log(`d=${this.d}`);
    }
}
var c1 = new C1('aaa', 2, 'ccc');
c1.print();

var c2 = new C2('bbb', 3, '4');
c2.print();
c2.print2();

var c3 = new C3(1, 2, 3, 4);
c3.print();
c3.print3();