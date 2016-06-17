//Business Logic


//User Interface Logic
$(document).ready(function(event) {

  $("#pickup-btn").click(function(event) {
    $("#order-content").show();
    $("#landing-content").hide();
  });

  $("#delivery-btn").click(function(event) {
    $("#address").slideToggle();
  });

  $("#order-proceed-btn").click(function(event) {
    $("#order-content").show();
    $("#landing-content").hide();
  });

  $("#custom-pizza-btn").click(function(event) {
    $("#custom-pizza").slideToggle();
  });

});
