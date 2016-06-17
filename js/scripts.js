// Business Logic
function CustomPizza (size, sauce, topping1, topping2, topping3) {
  this.pizzaSize = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
  this.price = 0;
}

CustomPizza.prototype.costCustom = function() {
  if (this.pizzaSize === "small") {
    this.price += 6;
  } else if (this.pizzaSize === "medium") {
    this.price += 9;
  } else if (this.pizzaSize === "large") {
    this.price += 12;
  }
  if (this.sauce === "tomato" || this.sauce === "alfredo") {
    this.price += 1;
  }
  if (this.topping1 === "cheese") {
    this.price += 1;
  } else if (this.topping1 === "light-cheese") {
    this.price += 0.5;
  }
  if (this.topping2 === "pepperoni" || this.topping2 === "ham" || this.topping2 === "sausage") {
    this.price += 1;
  }
  if (this.topping3 === "green-peppers" || this.topping3 === "olives" || this.topping3 === "spinach") {
    this.price +=1;
  }
}



//User Interface Logic
$(document).ready(function(event) {

  $("#pickup-btn").click(function(event) {
    $("#order-content").show();
    $("#landing-content").hide();
    $("#delivery-option").text("PICKUP BY CUSTOMER");
  });
  $("#delivery-btn").click(function(event) {
    $("#address").show();
    $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
  });
  $("#order-proceed-btn").click(function(event) {
    var streetAddress = $("input#street-add").val();
    var cityAddress = $("input#city-add").val();
    var stateAddress = $("select#state-select").val();
    var zipCode = $("input#zip-add").val();

    var deliveryAddress = (streetAddress + "  " + cityAddress + ", " + stateAddress + "  " + zipCode);

    $("#order-content").show();
    $("#landing-content").hide();
    $("#delivery-option").text("DELIVER TO: ");
    $("#delivery-option").append(deliveryAddress);
  });
  $("#custom-pizza-btn").click(function(event) {
    $("#custom-pizza").slideToggle();
  });

  $("#submit-custom-pizza").click(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var sauce = $("select#sauce").val();
    var topping1 = $("select#topping1").val();
    var topping2 = $("select#topping2").val();
    var topping3 = $("select#topping3").val();

    var newCustomPizza = new CustomPizza(size, sauce, topping1, topping2, topping3);
    newCustomPizza.costCustom();

    $("#final-cost").text(newCustomPizza.price);
    $("#custom-pizza").slideToggle();
  });

});
