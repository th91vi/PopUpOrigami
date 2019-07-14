$(function() {
  var $container = $("#uc-container"),
    pfold = $("#uc-container").pfold({
      easing: "ease-in-out",
      folds: 3,
      folddirection: ["left", "bottom", "right"]
    });

  $container
    .find("h1.clickMe")
    .on("click", function() {
      pfold.unfold();
    })
    .end()
    .find("span.close")
    .on("click", function() {
      pfold.fold();
    });
});
