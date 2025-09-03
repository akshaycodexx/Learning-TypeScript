"use strict";
let uaerData20 = "AKSAY";
uaerData20 = true;
function checkDatatype(data) {
    if (typeof data == "number") {
        console.log("This is a number");
    }
    if (typeof data == "string") {
        console.log("This is a string");
    }
}
checkDatatype(20);
