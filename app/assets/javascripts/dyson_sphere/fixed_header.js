$(document).ready(function() {
  if ($(".has-transparent-header").length > 0) {
    $(document).scroll(onScrollChangeBackground);
  } else {
    $(".sticky").addClass("has-background");
  }
});

function onScrollChangeBackground() {
  if ($(document).scrollTop() === 0) {
    $(".sticky").removeClass("has-background");
    if ($(window).width() > 1024) {
      $(".flash-messages").fadeOut(200);
    }
  } else {
    $(".sticky").addClass("has-background");
    $(".flash-messages").fadeIn(200);
  }
};
