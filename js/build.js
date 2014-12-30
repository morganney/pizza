({
  baseUrl: '.',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    text: '../bower_components/requirejs-text/text'
  },
  optimize: 'uglify2',
  wrap: false,
  preserveLicenseComments: false,
  name: '../bower_components/almond/almond',
  include: ['config', 'top-twenty-pizzas'],
  out: '../top-twenty-pizzas.min.js'
})
