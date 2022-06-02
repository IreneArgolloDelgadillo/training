"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "hello my name is " + this.name;
    }
}
let firstCustomer = new Customer("Alice");
let newMessage = firstCustomer.announce();
let webHeading = document.querySelector('h1');
webHeading.textContent = newMessage;
