define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var Pizzas = Backbone.Collection.extend({
    url: 'pizzas.json',
    parse: function(response) {
      var kinds      = []
        , ordersFor  = {}
        , descending = function(a, b) { return b.orders - a.orders }
      ;
      
      _.each(response, function(pizza) {
        var toppings = _.uniq(pizza.toppings.sort(), true)
          , kind     = toppings.toString()
        ;
        
        if(ordersFor[kind]) {
          ordersFor[kind].orders++;
        } else {
          pizza.orders = 1;
          pizza.toppings = toppings;
          ordersFor[kind] = pizza;
          kinds.push(pizza);
        }
      });
      
      return kinds.sort(descending).splice(0, 20);
    }
  });
  
  return Pizzas;
});
