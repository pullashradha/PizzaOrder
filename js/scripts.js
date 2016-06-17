//Business Logic
function CustomPizza (size, sauce, topping1) {
  this.pizzaSize = size;
  this.sauce = sauce;
  this.topping1 = topping1;
  // this.topping2 = topping2;
  // this.topping3 = topping3;
}

CustomPizza.prototype.costCustom = function() {
  if (this.pizzaSize === "small") {
    alert("Size = small");
  } else if (this.pizzaSize === "medium") {
    alert("Size = medium");
  } else if (this.pizzaSize === "large") {
    alert("Size = large");
  }

  if (this.sauce === "tomato") {
    alert("Sauce = tomato");
  } else if (this.sauce === "alfredo") {
    alert("Sauce = alfredo");
  } else if (this.sauce === "no-sauce") {
    alert("No sauce");
  }

  if (this.topping1 === "cheese") {
    alert("Cheese");
  } else if (this.topping1 === "light-cheese") {
    alert("Light cheese");
  } else if (this.topping1 === "no-cheese") {
    alert("No cheese");
  }
}


//User Interface Logic
$(document).ready(function(event) {

  var newCustomPizza = new CustomPizza(size, sauce, topping1);

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

    newCustomPizza.costCustom();

    // $("#final-cost").text(newCustomPizza.pizzaSize);

  });

});
