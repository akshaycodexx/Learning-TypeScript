"use strict";
function classLogger(constructor) {
    console.log(constructor.name);
}
@classLogger
class CustomMaths {
    value1;
    value2;
    constructor(x, y) {
        this.value1 = x;
        this.value2 = y;
    }
}
var cm1 = new CustomMaths(12, 15);
