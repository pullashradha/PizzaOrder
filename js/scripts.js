// Business Logic
function Cost (customSize, cheese) {
  this.customSize = $("select#size").val();
  this.sauce = 1;
  this.cheese = $("select#cheese").val();
  this.veggie1 = 1;
  this.veggie2 = 1;
  this.meat = 2;
  this.sides = 3;
  this.price = 0;
}
Cost.prototype.pizza = function () {
  if (this.customSize === "Small 10 in.") {
    this.price += 6;
  } else if (this.customSize === "Medium 14 in.") {
    this.price += 9;
  } else if (this.customSize === "Large 18 in.") {
    this.price += 12;
  }
  if (this.cheese === "cheese") {
    this.price += 1;
  } else if (this.cheese === "light cheese") {
    this.price += 0.5;
  } else if (this.cheese === "extra cheese") {
    this.price += 1.5;
  }
  this.price += this.sauce;
  this.price += this.veggie1;
  this.price += this.veggie2;
  this.price += this.meat;
}
Cost.prototype.sideOrder = function () {
  this.price += this.sides;
}
// Pizza.prototype.defaultCostSm = function () {
//   this.price += 8;
// }
// Pizza.prototype.defaultCostMd = function () {
//   this.price += 12;
// }
// Pizza.prototype.defaultCostLg = function () {
//   this.price += 15;
// }
// Pizza.prototype.sidesCost = function () {
//   this.price += 3;
// }



//User Interface Logic
$(document).ready(function(event) {
/////Landing Page Btns
  $("#pickup-btn").click(function() {
    $("#order-content").show();
    $("#landing-content").hide();
    $("#delivery-option").text("PICKUP BY CUSTOMER");
  });
  $("#delivery-btn").click(function() {
    $("#address").show();
    $("#pickup-btn,#delivery-btn,#landing-tagline").hide();
  });
  $("form#address-form").submit(function(event) {
    event.preventDefault();
    var streetAddress = $("input#street-add").val();
    var cityAddress = $("input#city-add").val();
    var stateAddress = $("select#state-select").val();
    var zipCode = $("input#zip-add").val();
    var deliveryAddress = (streetAddress + "  " + cityAddress + ", " + stateAddress + "  " + zipCode);
    $("#order-content").show();
    $("#landing-content").hide();
    $("#delivery-option").text("DELIVER TO: " + deliveryAddress);
  });
  var newCostSides = new Cost();
/////Custom Pizza Btns
  $("#custom-pizza-btn").click(function() {
    $("#custom-pizza").slideToggle();
  });
  $("form#custom-pizza").submit(function(event) {
    event.preventDefault();
    var customSize = $("select#size").val();
    var sauce = $("select#sauce").val();
    var cheese = $("select#cheese").val();
    var veggie1 = $("select#veggie1").val();
    var veggie2 = $("select#veggie2").val();
    var meat = $("select#meat").val();
    var pizzaDetails = (customSize + " - " + sauce + ", " + cheese + ", " + veggie1 + ", " + veggie2 + ", " + meat);
    var newCost = new Cost();
    newCost.pizza();
    $("#pizza-details-dropdown").show();
    $("#final-cost").text(newCost.price);
    $("#pizza-details").text(pizzaDetails);
    $("#size, #sauce, #cheese, #veggie1, #veggie2, #meat").val("");
  });
  $("#pizza-details-dropdown").click(function() {
    $("#pizza-details").toggle();
  });
/////Default Pizza Toggle Btns
  // $("#cheese-default").click(function() {
  //   $("#cheese-default-size").slideToggle();
  // });
  // $("#pep-default").click(function() {
  //   $("#pep-default-size").slideToggle();
  // });
  // $("#veggie-default").click(function() {
  //   $("#veggie-default-size").slideToggle();
  // });
/////Cheese Default Pizza
//   $("#cheese-sm").click(function() {
//     newCheesePizzaSm.defaultCostSm();
//     $("#final-cost").text(newCheesePizzaSm.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese");
//   });
//   $("#cheese-md").click(function() {
//     newCheesePizzaMd.defaultCostMd();
//     $("#final-cost").text(newCheesePizzaMd.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese");
//   });
//   $("#cheese-lg").click(function() {
//     newCheesePizzaLg.defaultCostLg();
//     $("#final-cost").text(newCheesePizzaLg.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese");
//   });
// /////Pepperoni Default Pizza
//   $("#pep-sm").click(function() {
//     newPepPizzaSm.defaultCostSm();
//     $("#final-cost").text(newPepPizzaSm.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese, pepperoni");
//   });
//   $("#pep-md").click(function() {
//     newPepPizzaMd.defaultCostMd();
//     $("#final-cost").text(newPepPizzaMd.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese, pepperoni");
//   });
//   $("#pep-lg").click(function() {
//     newPepPizzaLg.defaultCostLg();
//     $("#final-cost").text(newPepPizzaLg.price);
//     $("#default-pizza-dropdown").show();
//     $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese, pepperoni");
//   });
/////Veggie Default Pizza
  // $("#veggie-sm").click(function() {
  //   newVeggiePizzaSm.defaultCostSm();
  //   $("#final-cost").text(newVeggiePizzaSm.price);
  //   $("#default-pizza-dropdown").show();
  //   $("#default-pizza-details").text("Small 10 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  // });
  // $("#veggie-md").click(function() {
  //   newVeggiePizzaMd.defaultCostMd();
  //   $("#final-cost").text(newVeggiePizzaMd.price);
  //   $("#default-pizza-dropdown").show();
  //   $("#default-pizza-details").text("Medium 14 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  // });
  // $("#veggie-lg").click(function() {
  //   newVeggiePizzaLg.defaultCostLg();
  //   $("#final-cost").text(newVeggiePizzaLg.price);
  //   $("#default-pizza-dropdown").show();
  //   $("#default-pizza-details").text("Large 18 in. - tomato sauce, cheese, onions, green peppers, olives, spinach, mushrooms");
  // });
  // $("#default-pizza-dropdown").click(function() {
  //   $("#default-pizza-details").toggle();
  // });
/////Sides
  $("#breadsticks").click(function() {
    newCostSides.sideOrder();
    $("#final-cost").text(newCostSides.price);
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "3 garlic breadsticks" + "</li></ul>");
  });
  $("#brownie").click(function() {
    newCostSides.sideOrder();
    $("#final-cost").text(newCostSides.price);
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "1 jumbo, double-chocolate brownie" + "</li></ul>");
  });
  $("#soda").click(function() {
    newCostSides.sideOrder();
    $("#final-cost").text(newCostSides.price);
    $("#sides-dropdown").show();
    $("#sides-details").append("<ul><li>" + "16oz., root-beer italian soda" + "</li></ul>");
  });
  $("#sides-dropdown").click(function() {
    $("#sides-details").toggle();
  });
/////Checkout
  // $("#checkout-btn").click(function() {
  //   $("#landing-content").show();
  //   $("#order-content").hide();
  // });
});
