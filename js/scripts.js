// Business Logic
function CustomPizza (size, sauce, topping1) {
  this.pizzaSize = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  // this.topping2 = topping2;
  // this.topping3 = topping3;
  this.price = 0;
}

CustomPizza.prototype.costCustom = function() {
  if (this.pizzaSize === "small") {
    this.price += 5;
  } else if (this.pizzaSize === "medium") {
    this.price += 8;
  } else if (this.pizzaSize === "large") {
    this.price += 11;
  }

  if (this.sauce === "tomato") {
    this.price += 1;
  } else if (this.sauce === "alfredo") {
    this.price += 1;
  }

  if (this.topping1 === "cheese") {
    this.price += 1;
  } else if (this.topping1 === "light-cheese") {
    this.price += 0.5;
  }
}



//User Interface Logic
$(document).ready(function(event) {

  $("#pickup-btn").click(function(event) {
    $("#order-content").show();
    $("#landing-content").hide();
  });
  $("#delivery-btn").click(function(event) {
    $("#address").show();
    $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
  });
  $("#order-proceed-btn").click(function(event) {
    $("#order-content").show();
    $("#landing-content").hide();
  });
  $("#custom-pizza-btn").click(function(event) {
    $("#custom-pizza").slideToggle();
  });

  $("#submit-custom-pizza").click(function(event) {
    var size = $("select#size").val();
    var sauce = $("select#sauce").val();
    var topping1 = $("select#topping1").val();
    var topping2 = $("select#topping2").val();
    var topping3 = $("select#topping3").val();

    var newCustomPizza = new CustomPizza(size, sauce, topping1);
    newCustomPizza.costCustom();

    $("#final-cost").text(newCustomPizza.price);
  });

});
