"use strict";
function complexLog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "akshay",
                id: 10,
                email: "akshay@gmail"
            });
        }, 2000);
    });
}
complexLog().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log("test 2");
}
