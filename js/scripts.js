function Pizza(pizzaSize, pizzaToppings) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.price = 17;
}

$(document).ready(function() {
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();

    var pizzaSize = $("select#pizza-size").val();
    var pizzaToppings = [];
       $(':checkbox:checked').each(function(i){
         pizzaToppings[i] = $(this).val();
    });
    var newPizza = new Pizza(pizzaSize, pizzaToppings);
    console.log(newPizza.pizzaSize);
    console.log(newPizza.pizzaToppings);
    console.log(newPizza.price);
  });
});
