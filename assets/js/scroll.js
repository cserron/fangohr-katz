$(function() {
  $(".cover-anchor").click(function() {
    var section = $(this).parents("section");
    $('html, body').animate({
        scrollTop: section.next().offset().top
    }, 1000);
  });
});