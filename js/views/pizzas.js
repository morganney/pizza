define([
  'backbone',
  'text!templates/pizza.html'
], function(Backbone, PizzaTmpl) {
  var PizzasView = Backbone.View.extend({
    el: '#top20',
    template: _.template(PizzaTmpl),
    initialize: function(options) {
      this.listenTo(this.collection, 'reset', this.render);
    },
    render: function() {
      this.$el.html(this.template({pizzas: this.collection.toJSON()}));
    }
  });
  
  return PizzasView;
});
