"use strict";
var role;
(function (role) {
    role["teacher"] = "Teacher";
    role["student"] = "student";
})(role || (role = {}));
var rol = role.student;
rol = role.teacher;
console.log(role.student);
