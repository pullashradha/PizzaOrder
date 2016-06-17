// Business Logic
function CustomPizza (size, sauce, cheese, veggie1, veggie2, meat) {
  this.pizzaSize = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggie1 = veggie1;
  this.veggie2 = veggie2;
  this.meat = meat;
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
  if (this.cheese === "cheese") {
    this.price += 1;
  } else if (this.cheese === "light-cheese") {
    this.price += 0.5;
  } else if (this.cheese === "heavy-cheese") {
    this.price +=1.5
  }
  if (this.veggie1 === "onions" | this.veggie1 === "green-peppers" || this.veggie1 === "olives" || this.veggie1 === "spinach" || this.veggie1 === "mushrooms") {
    this.price += 1;
  }
  if (this.veggie2 === "onions" | this.veggie2 === "green-peppers" || this.veggie2 === "olives" || this.veggie2 === "spinach" || this.veggie2 === "mushrooms") {
    this.price += 1;
  }
  if (this.meat === "chicken" || this.meat === "pepperoni" || this.meat === "bacon" || this.meat === "sausage") {
    this.price += 2;
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
    var size = $("select#size").val();
    var sauce = $("select#sauce").val();
    var cheese = $("select#cheese").val();
    var veggie1 = $("select#veggie1").val();
    var veggie2 = $("select#veggie2").val();
    var meat = $("select#meat").val();
    var newCustomPizza = new CustomPizza(size, sauce, cheese, veggie1, veggie2, meat);
    newCustomPizza.costCustom();
    $("#final-cost").text(newCustomPizza.price);
    $("#custom-pizza").slideToggle();
  });
  $("#cheese-default").click(function(event) {
    $("#cheese-default-size").slideToggle();
  });
  $("#pep-default").click(function(event) {
    $("#pep-default-size").slideToggle();
  });
  $("#veggie-default").click(function(event) {
    $("#veggie-default-size").slideToggle();
  });


});
