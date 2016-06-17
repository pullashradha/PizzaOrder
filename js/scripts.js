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
  if (this.customSize === "small") {
    this.price += 6;
  } else if (this.customSize === "medium") {
    this.price += 9;
  } else if (this.customSize === "large") {
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
    var customSize = $("select#size").val();
    var sauce = $("select#sauce").val();
    var cheese = $("select#cheese").val();
    var veggie1 = $("select#veggie1").val();
    var veggie2 = $("select#veggie2").val();
    var meat = $("select#meat").val();
    var newPizza = new Pizza(customSize, sauce, cheese, veggie1, veggie2, meat);
    newPizza.customCost();
    $("#final-cost").text(newPizza.price);
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
  $("#cheese-sm, #pep-sm, #veggie-sm").click(function(event) {
    var newDefaultPizzaSm = new Pizza();
    newDefaultPizzaSm.defaultCostSm();
    $("#final-cost").text(newDefaultPizzaSm.price);
  });
  $("#cheese-md, #pep-md, #veggie-md").click(function(event) {
    var newDefaultPizzaMd = new Pizza ();
    newDefaultPizzaMd.defaultCostMd();
    $("#final-cost").text(newDefaultPizzaMd.price);
  });
  $("#cheese-lg, #pep-lg, #veggie-lg").click(function(event) {
    var newDefaultPizzaLg = new Pizza ();
    newDefaultPizzaLg.defaultCostLg();
    $("#final-cost").text(newDefaultPizzaLg.price);
  });
  $("#breadsticks, #brownie, #soda").click(function(event) {
    var newSides = new Pizza ();
    newSides.sidesCost();
    $("#final-cost").text(newSides.price);
  });
});
