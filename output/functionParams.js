"use strict";
function totalPrice(item, price, txt) {
    if (txt) {
        console.log(txt, price * item);
    }
    else {
        console.log(price * item);
    }
}
totalPrice(50, 100, "Total price is");
