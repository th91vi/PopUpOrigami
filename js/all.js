// Efeito de desdobramento
$(function () {
  var $container = $("#uc-container"),
    pfold = $("#uc-container").pfold({
      easing: "ease-in-out",
      folds: 4,
      folddirection: ["bottom", "right","bottom", "right"]
    });

  $container
    .find("h1.clickMe")
    .on("click", function () {
      pfold.unfold();
    })
    .end()
    .find("span.close")
    .on("click", function () {
      pfold.fold();
    });
});