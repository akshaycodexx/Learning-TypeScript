"use strict";
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addTOCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`;
        }
        else {
            return ` no product in Cart`;
        }
    }
}
var product = new Product("Samsang", 6299, 1299);
product.addTOCart();
console.log(product.buyProduct());
var product = new Product("i phone", 6299, 1299);
product.addTOCart();
console.log(product.buyProduct());
