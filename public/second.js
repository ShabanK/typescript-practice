"use strict";
var foo;
foo = function () {
    return 2;
};
var fun = function (a, b, c) {
    if (c === void 0) { c = 20; }
    console.log(a + b);
    console.log(c);
};
fun(21, 21, "okay");
var minus = function (a, b) {
    return a - b;
};
console.log(minus(10, 20));
