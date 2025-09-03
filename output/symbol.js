"use strict";
var sym3 = Symbol("abc");
var sym4 = Symbol("abc");
console.log(sym3);
console.log(sym4);
const dId = Symbol('id');
const obj = {
    [dId]: 100,
    name: 'Akshay'
};
console.log(obj[dId]);
