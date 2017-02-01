$(document).ready(init);

function scroll() {
  $(".cover-anchor").click(function() {
    var section = $(this).parents('section');
    $('html, body').animate({
        scrollTop: section.next().offset().top
    }, 1000);
  });
}
function scrollTo() {
  $('.link-to').click(function() {
    var target = $(this).data('target');

    $('html, body').animate({
        scrollTop: $('#'+target).offset().top
    }, 1000);

  });
}

function carousel() {
  $('.carousel').carousel({
    pause: true,
    interval: false
  });
}

function cross() {
  $(".close").click(function() {
    var sectionId = $(this).closest('section');
    var sectionName = sectionId.attr('id');
    $('.menu-ul input').prop('checked', false);
    //check the menu-item
    $('#menu-'+sectionName).prop('checked', true);
  });
}

function disableCheckbox() {
  $(".check-list [type=checkbox]").on('click', function(e) {
    console.log('disableCheckbox');
    e.preventDefault();
  });
}

function checksOnCover() {}

function menuLinks() {

}
// function carouselLinks() {
//   var link = $('.carousel-link').data('link');
//   var parent = link.parent('.carousel-item');
//   parent.removeClass();
// }

function init() {
  console.log('init');
  scroll();  
  carousel();
  cross();
  disableCheckbox();
  checksOnCover();
  menuLinks();
  scrollTo();
}