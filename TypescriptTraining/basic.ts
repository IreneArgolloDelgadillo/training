class Customer {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    /**
     * announce method presents Customer instance
     * return: string
     */
    announce() {
        return "hello my name is " + this.name;
    }
    read() {
        return "sss"; 
    }
}

let firstCustomer = new Customer("Alice");
let newMessage: string = firstCustomer.announce();

let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;

