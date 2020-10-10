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

    $("form#yo-order").submit(function(event) {
        event.preventDefault();

        var inputFname = $(this).find("input#new-first-name").val();
        var inputLname = $(this).find("input#new-last-name").val();
        var newPerson = new Person(inputFname, inputLname);
        console.log(newPerson);
        $(".new-order").each(function() {
            var inputSize = $("#select-size").find(":selected").text();
            console.log(inputSize);
            var inputCrust = $("#select-crust").find(":selected").text();
            console.log(inputCrust);
            var inputToppings = $("#select-topping").find(":selected").text();
            console.log(inputToppings);
            var price = 0;
            var priceTopping = 0;
            var pizzaCrust = ["crispy", "stuffed", "gluten-free"];
            var pizzaTop = ["pepperoni", "supreme", "hawaiian"];
            for (var i = 0; i < 2; i++) {
                if (inputSize == "small" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 2500);
                } else if (inputSize == "medium" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 3500);
                } else if (inputSize == "large" && inputCrust == pizzaCrust[i]) {
                    price = parseInt(price + 2500);
                }
            }
            var newSize = new Size(inputSize, price);
            var newCrust = new Crust(inputCrust);
            newCrust.sizes.push(newSize);
            console.log(newCrust);
            for (var j = 0; j < 2; j++) {
                if (inputSize == "small" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(price + 3500);
                } else if (inputSize == "medium" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(price + 4500);
                } else if (inputSize == "large" && inputToppings == pizzaTop[j]) {
                    priceTopping = parseInt(price + 5500);
                }
            }
            var newSize = new Size(inputSize, priceTopping);
            var newTopping = new Toppings(inputToppings);

            newTopping.sizes.push(newSize);
            console.log(newTopping);
        });
        console.log("getting in a list");
        $("ul#receipts").append(
            "<li><span class='haveit'>" + newPerson.fullNames() + "</span></li>"
        );
        console.log("done with list");
        $(".haveit")
            .last()
            .click(function() {
                $("#show-receipt").show();
                $("#show-receipt h2").text(newPerson.fullNames());
                $(".first-name").text(newPerson.firstName);
                $(".last-name").text(newPerson.lastName);
                $("ul#receipt-List").text("");
                newCrust.sizes.forEach(function(size) {
                    $("ul#receipt-List").append("<li>" + size.SizeofPizza() + "</li>");
                });
                newTopping.sizes.forEach(function(size) {
                    $("ul#receipt-List").append("<li>" + size.SizeofPizza() + "</li>");
                });
            });
    });
});