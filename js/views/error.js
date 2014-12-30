define([
  'underscore',
  'backbone',
  'text!templates/error.html'
], function(_, Backbone, ErrorTmpl) {
  var ErrorView = Backbone.View.extend({
    el: '#top20',
    template: _.template(ErrorTmpl),
    render: function(msg) {
      this.$el.html(this.template({errorMsg: msg}));
    }
  });
  
  return ErrorView;
});
