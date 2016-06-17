function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = 17;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.pizzaSize === "Medium") {
    return this.price -= 2;
  } else if (this.pizzaSize === "Small") {
    return this.price -= 6;
  } else {
    return this.price;
  }
}

$(document).ready(function() {

  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    $("ul").empty();
    var pizzaSize = $("select#pizza-size").val();
    var pizzaToppings = [];
       $(':checkbox:checked').each(function(i){
         pizzaToppings[i] = $(this).val();
    });
    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizza.pizzaPrice();

    $("form").slideToggle();
    $("#result").show();

    $(".details").last().click(function() {
      $(".details").hide();
      pizzaToppings.forEach(function(topping) {
        $(".pizza-topping").append("<li>" + topping + "</li>").css("font-weight", "bold");
      });
      $(".pizza-size").text(newPizza.pizzaSize.toLowerCase()).css("font-weight", "bold");
      $(".pizza-price").text(newPizza.price).css("font-weight", "bold");
      $("#details").show();
    });
  });
});
