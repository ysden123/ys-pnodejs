/*
 * Copyright (c) 2017. Yuriy Stul
 */
'use strict';
/**
 * Demo class with overriding toString() method
 */
class C2 {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    toString() {
        return `C2: {p1=${this.p1}, p2=${this.p2}}`
    }
}

module.exports.C2 = C2;