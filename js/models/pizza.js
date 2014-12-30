define([
  'backbone'
], function(Backbone) {
  var Pizza = Backbone.Model.extend({
    defaults: function() {
      return {
        toppings: [],
        orders: 0
      }
    }
  });
  
  return Pizza;
});
