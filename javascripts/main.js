;(function($) {
  app = Sammy('body', function() {
    this.get('/', function() {
      $(".home").fadeIn(1000, function() {
        $(".guy-melt").addClass("visible");
      });
    });
    this.get('#/news', function() {
      app.getBlogger().then(function(data) {
        var posts = data.items;
        $(".news").html("");

        for(i in posts) {
          var formattedDate = new Date(posts[i].published)
            .toLocaleString("en-US", {
              month : "short",
              day : "numeric",
              year : "numeric"
            }).replace(/,/g,"");
          var strippedContent = $(
              "<div>" + posts[i].content + "</div>"
            ).text();

          var $html = $(Handlebars.templates.post(
            $.extend(posts[i], {
              strippedContent : strippedContent,
              formattedDate : formattedDate
            })
          ));

          $(".news").append($html).show();
        }
      }, function(e) {
        alert("error fetching blog");
      });
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

    this.addListeners = function() {
      $(document).on("mousemove", function(e) {
        var screenWidth = $(window).width(),
            pixelWidth = screenWidth / 100;
            offset = (e.pageX / pixelWidth) - 100;
        $(".floor").css("transform","matrix(1, 0, 0, 1, "+offset+", 0)");
      });
    };

    this.getBlogger = function() {
      return new Promise(function(resolve) {
        $.ajax({
          url: "https://www.googleapis.com/blogger/v3/blogs/8259058667594410675/posts",
          data: {
            key: "AIzaSyDalPoBDyrr9BZBf0674UNweT4GFXlbBXg"
          },
          success: resolve
        });
      });
    };
  });

  $(function() {
    app.run();
    app.addListeners();
  });
})(jQuery);