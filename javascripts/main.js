;(function($) {
  app = Sammy('body', function() {
    this.get('#/', function() {
      $(".guy-melt").addClass("visible");
    });
    this.get('#/news', function() {
      $(".news").hideClass("visible");
    });
    this.get('#/live', function() {
    });
    this.get('#/music');
    this.get('#/join');

    this.before({}, function(context) {
      console.log(context);
    });
  });

  $(function() {
    app.run();
  });
})(jQuery);