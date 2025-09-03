"use strict";
class EmpInfo {
    _name = "Anil";
    _email = "anil@gmail.com";
    get name() {
        return "Mr. " + this._name;
    }
    set email(val) {
        this._email = "emp" + val;
    }
}
var emp1 = new EmpInfo();
emp1.email = "akshay@gmail.com";
console.log(emp1.name);
console.log(emp1._email);
