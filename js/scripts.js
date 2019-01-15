$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#javascript-hidden").slideToggle();
    $("#javascript-showing").slideToggle();
  });

  $(".clickable2").click(function() {
    $("#jquery-hidden").slideToggle();
    $("#jquery-showing").slideToggle();
  });

  $(".clickable3").click(function() {
    $("#html-hidden").slideToggle();
    $("#html-showing").slideToggle();
  });

  $(".clickable4").click(function() {
    $("#css-hidden").slideToggle();
    $("#css-showing").slideToggle();
  });
});
