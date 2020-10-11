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

function Summation(top, crust) {
    var sum = 0;
    var ask, city;
    var dvprice = 1000;
    alert("Additional Cost for every pizza delivery is only 1000frw");
    ask = prompt(
        "Please Type yes if you want your Pizza to be delivered at home or type no if u dont want it!"
    );
    if (ask == "yes") {
        city = prompt("Please enter the location");
        alert("Your Pizza Choice will be delivered at " + city);
        sum = sum + top + crust + dvprice;
    } else {
        alert("Thank You for choosing Pizza Lover Shop!");
        sum = sum + top + crust;
    }
    return sum;
}

function ResetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("#select-size").val("clear");
    $("#select-crust").val("clear");
    $("#select-topping").val("clear");
}
var price = 0;
var priceTopping = 0;
var pizzaCrust = ["crispy", "stuffed", "glutten-free"];
var pizzaTop = ["pepperoni", "supreme", "hawaiian"];

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
    $("#actionOrder").click(function() {
        alert("Thank you for Choosing Pizza Lover Shop, see you at delivery");
    });

    $("form#yo-order").submit(function(event) {
        event.preventDefault();
        var inputFname = $(this).find("input#new-first-name").val();
        var inputLname = $(this).find("input#new-last-name").val();
        var newPerson = new Person(inputFname, inputLname);
        console.log(newPerson);
        var n = 30;
        $(".new-order").each(function() {
            var inputSize = $("#select-size").find(":selected").text();
            var inputCrust = $("#select-crust").find(":selected").text();
            var inputToppings = $("#select-topping").find(":selected").text();

            for (var i = 0; i < n; i++) {
                if (inputSize == "small" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 2500);
                } else if (inputSize == "medium" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 3500);
                } else if (inputSize == "large" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 4500);
                }
            }

            var newSize = new Size(inputSize, price);
            var newCrust = new Crust(inputCrust);
            newCrust.sizes.push(newSize);
            console.log(newCrust);
            for (var j = 0; j < n; j++) {
                if (inputSize == "small" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(priceTopping + 3500);
                } else if (inputSize == "medium" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(priceTopping + 5500);
                } else if (inputSize == "large" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(priceTopping + 6500);
                }
            }

            var newSize = new Size(inputSize, priceTopping);
            var newTopping = new Toppings(inputToppings);

            newTopping.sizes.push(newSize);
            console.log(newTopping);
            $("#show-receipt").show();
            $(".first-name").text(newPerson.firstName);
            $(".last-name").text(newPerson.lastName);
            $(".crustname").text(newCrust.name);
            newCrust.sizes.forEach(function(size) {
                $("ul#crust-List").append("<li>" + size.SizeofPizza() + "</li>");
            });
            $(".topname").text(newTopping.name);
            newTopping.sizes.forEach(function(size) {
                $("ul#topping-List").append("<li>" + size.SizeofPizza() + "</li>");
            });
            $(".totalAmount").text(Summation(price, priceTopping));
        });
        ResetFields();
    });
});