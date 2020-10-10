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

$(document).ready(function() {
    $("#add-order").click(function() {
        $("#new-orders").append(
            '<div class="new-order">' +
            '<div class="form-group">' +
            '<label for="new-size">Size of Pizza</label>' +
            '<select class="form-control" id="select-size" required>' +
            "<option disabled selected hidden>-select size-</option>" +
            "<option>small</option>" +
            "<option>medium</option>" +
            "<option>Large</option>" +
            "</select>" +
            "</div>" +
            '<div class="form-group">' +
            '<label for="new-crust">Crust</label>' +
            '<select class="form-control" id="select-crust" required>' +
            "<option disabled selected hidden>-select crust-</option>" +
            "<option>crispy</option>" +
            "<option>stuffed</option>" +
            "<option>glutten-free</option>" +
            "</select>" +
            "</div>" +
            '<div class="form-group">' +
            '<label for="new-topping">Toppings</label>' +
            '<select class="form-control" id="select-topping" required>' +
            "<option disabled selected hidden>-select topping-</option>" +
            "<option>pepperoni</option>" +
            "<option>supreme</option>" +
            "<option>hawaiian</option>" +
            "</select>" +
            "</div>" +
            "</div>"
        );
    });
});