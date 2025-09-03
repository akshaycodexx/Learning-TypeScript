"use strict";
class CollegeData {
    name;
    constructor(Cname) {
        this.name = Cname;
    }
    displayTeachersName() {
        console.log("Anil", "sam");
    }
    getStudentList() {
        return ["anil", "akshay", "sam"];
    }
}
var College1 = new CollegeData("jis university");
