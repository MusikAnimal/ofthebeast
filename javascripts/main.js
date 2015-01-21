;(function($) {
  app = Sammy('body', function() {
    this.get('/', function() {
      $(".home").fadeIn(1000, function() {
        $(".guy-melt").addClass("visible");
      });
    });
    this.get('#/news', function() {
    });
    this.get('#/live', function() {
      $(".live").show().find("script").replaceWith(
        $(".live").find("script").html()
      );
    });
    this.get('#/music', function() {
      $(".music").show().find("script").replaceWith(
        $(".music").find("script").html()
      );
    });
    this.get('#/join');

    this.before({}, function(context) {
      $("section").hide();
    });
  });

  $(function() {
    app.run();
  });
})(jQuery);