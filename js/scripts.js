// Business Logic
function Pizza (customSize, sauce, cheese, veggie1, veggie2, meat) {
  this.customSize = customSize;
  this.sauce = sauce;
  this.cheese = cheese;
  this.veggie1 = veggie1;
  this.veggie2 = veggie2;
  this.meat = meat;
  this.price = 0;
}
Pizza.prototype.customCost = function () {
  if (this.customSize === "Small 10 in.") {
    this.price += 6;
  } else if (this.customSize === "Medium 14 in.") {
    this.price += 9;
  } else if (this.customSize === "Large 18 in.") {
    this.price += 12;
  }
  if (this.sauce === "tomato sauce" || this.sauce === "alfredo sauce") {
    this.price += 1;
  }
  if (this.cheese === "cheese") {
    this.price += 1;
  } else if (this.cheese === "light cheese") {
    this.price += 0.5;
  } else if (this.cheese === "heavy cheese") {
    this.price += 1.5
  }
  if (this.veggie1 === "onions" | this.veggie1 === "green peppers" || this.veggie1 === "olives" || this.veggie1 === "spinach" || this.veggie1 === "mushrooms") {
    this.price += 1;
  }
  if (this.veggie2 === "onions" | this.veggie2 === "green peppers" || this.veggie2 === "olives" || this.veggie2 === "spinach" || this.veggie2 === "mushrooms") {
    this.price += 1;
  }
  if (this.meat === "chicken" || this.meat === "pepperoni" || this.meat === "bacon" || this.meat === "sausage") {
    this.price += 2;
  }
}
Pizza.prototype.defaultCostSm = function () {
  this.price += 8;
}
Pizza.prototype.defaultCostMd = function () {
  this.price += 12;
}
Pizza.prototype.defaultCostLg = function () {
  this.price += 15;
}
Pizza.prototype.sidesCost = function () {
  this.price += 3;
}



//User Interface Logic
$(document).ready(function(event) {
/////Landing Page Btns
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
/////Vars for Constructor
    var newCheesePizzaSm = new Pizza();
    var newCheesePizzaMd = new Pizza ();
    var newCheesePizzaLg = new Pizza ();
    var newPepPizzaSm = new Pizza();
    var newPepPizzaMd = new Pizza ();
    var newPepPizzaLg = new Pizza ();
    var newVeggiePizzaSm = new Pizza();
    var newVeggiePizzaMd = new Pizza ();
    var newVeggiePizzaLg = new Pizza ();
    var newBreadsticks = new Pizza ();
    var newBrownie = new Pizza ();
    var newSoda = new Pizza ();
/////Custom Pizza Btns
  $("#custom-pizza-btn").click(function(event) {
    $("#custom-pizza").slideToggle();
  });
  $("#submit-custom-pizza").click(function(event) {
    var customSize = $("select#size").val();
    var sauce = $("select#sauce").val();
    var cheese = $("select#cheese").val();
    var veggie1 = $("select#veggie1").val();
    var veggie2 = $("select#veggie2").val();
    var meat = $("select#meat").val();
    var newCustomPizza = new Pizza(customSize, sauce, cheese, veggie1, veggie2, meat);
    var pizzaDetails = (customSize + " - " + sauce + ", " + cheese + ", " + veggie1 + ", " + veggie2 + ", " + meat);
    newCustomPizza.customCost();
    $("#pizza-details-dropdown").show();
    $("#final-cost").text(newCustomPizza.price);
    $("#pizza-details").text(pizzaDetails);
    $("#size, #sauce, #cheese, #veggie1, #veggie2, #meat").val("");
  });
  $("#pizza-details-dropdown").click(function(event) {
    $("#pizza-details").toggle();
  });
/////Default Pizza Toggle Btns
  $("#cheese-default").click(function(event) {
    $("#cheese-default-size").slideToggle();
  });
  $("#pep-default").click(function(event) {
    $("#pep-default-size").slideToggle();
  });
  $("#veggie-default").click(function(event) {
    $("#veggie-default-size").slideToggle();
  });
/////Cheese Default Pizza
  $("#cheese-sm").click(function(event) {
    newCheesePizzaSm.defaultCostSm();
    $("#final-cost").text(newCheesePizzaSm.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese");
  });
  $("#cheese-md").click(function(event) {
    newCheesePizzaMd.defaultCostMd();
    $("#final-cost").text(newCheesePizzaMd.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese");
  });
  $("#cheese-lg").click(function(event) {
    newCheesePizzaLg.defaultCostLg();
    $("#final-cost").text(newCheesePizzaLg.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese");
  });
/////Pepperoni Default Pizza
  $("#pep-sm").click(function(event) {
    newPepPizzaSm.defaultCostSm();
    $("#final-cost").text(newPepPizzaSm.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese, pepperoni");
  });
  $("#pep-md").click(function(event) {
    newPepPizzaMd.defaultCostMd();
    $("#final-cost").text(newPepPizzaMd.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese, pepperoni");
  });
  $("#pep-lg").click(function(event) {
    newPepPizzaLg.defaultCostLg();
    $("#final-cost").text(newPepPizzaLg.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese, pepperoni");
  });
/////Veggie Default Pizza
  $("#veggie-sm").click(function(event) {
    newVeggiePizzaSm.defaultCostSm();
    $("#final-cost").text(newVeggiePizzaSm.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  });
  $("#veggie-md").click(function(event) {
    newVeggiePizzaMd.defaultCostMd();
    $("#final-cost").text(newVeggiePizzaMd.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  });
  $("#veggie-lg").click(function(event) {
    newVeggiePizzaLg.defaultCostLg();
    $("#final-cost").text(newVeggiePizzaLg.price);
    $("#default-pizza-dropdown").show();
    $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  });
  $("#default-pizza-dropdown").click(function(event) {
    $("#default-pizza-details").toggle();
  });
/////Sides
  $("#breadsticks").click(function(event) {
    newBreadsticks.sidesCost();
    $("#final-cost").text(newBreadsticks.price);
    $("#sides-dropdown").show();
    $("#sides-details").text("3 garlic breadsticks");
  });
  $("#brownie").click(function(event) {
    newBrownie.sidesCost();
    $("#final-cost").text(newBrownie.price);
    $("#sides-dropdown").show();
    $("#sides-details").text("1 jumbo, double-chocolate brownie");
  });
  $("#soda").click(function(event) {
    newSoda.sidesCost();
    $("#final-cost").text(newSoda.price);
    $("#sides-dropdown").show();
    $("#sides-details").text("16oz., root-beer italian soda");
  });
  $("#sides-dropdown").click(function(event) {
    $("#sides-details").toggle();
  });
});
