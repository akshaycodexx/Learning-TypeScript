var sym3=Symbol("abc");
var sym4=Symbol("abc");

console.log(sym3)
console.log(sym4)


// use case

const dId=Symbol('id');

const obj={
    [dId]:100,
    name:'Akshay'
}
console.log(obj[dId])