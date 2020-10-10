function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Size(size, price) {
    this.size = size;
    this.price = price;
}

function Crust(name) {
    this.name = name;
    this.sizes = [];
}

function Toppings(name) {
    this.name = name;
    this.sizes = [];
}
Person.prototype.fullNames = function() {
    return this.firstName + " " + this.lastName;
};
Size.prototype.SizeofPizza = function() {
    return this.size + " " + this.price;
};
Crust.prototype.CrustofPizza = function() {
    return this.name;
};
Toppings.prototype.ToppingsofPizza = function() {
    return this.name;
};