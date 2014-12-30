define([
  'models/pizza',
  'collections/pizzas',
  'views/pizzas',
  'views/error'
], function(Pizza, Pizzas, PizzasView, ErrorView) {
  var topTwenty  = new Pizzas({model: Pizza})
    , pizzasView = new PizzasView({collection: topTwenty})
  ;
  
  function onError(collection, jqXhr) {
    var msg = "Can't load pizza data: ";
    new ErrorView().render(msg + jqXhr.status + ', ' + jqXhr.statusText);
  }
  
  topTwenty.fetch({
    reset: true,
    error: onError
  });
});
