$(document).ready(init);

function scroll() {
    $(".cover-anchor").click(function () {
        var section = $(this).parents('section');
        $('html, body').animate({
            scrollTop: section.next().offset().top
        }, 1000);
    });
}

function scrollTo() {
    $('.link-to').click(function () {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
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
    $(".close").click(function () {
        var sectionId = $(this).closest('section');
        var sectionName = sectionId.attr('id');
        $('.menu-ul input').prop('checked', false);
        $('#menu-' + sectionName).prop('checked', true);
    });
}
function check() {
    $(".menu-ul .check-list [type=checkbox]").on('click', function () {
        $(this).prop('checked', true);
    });
}

function disableCheckbox() {
    $(".check-list [type=checkbox]").on('click', function (e) {
        if ($(this).closest('section').attr('id') !== "contact") {
            e.preventDefault();
        }
    });
}

function carouselTransition() {
    $('.carousel').on('slide.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        if (carouselItem.index() > 0) {
            var lastCarouselItem = carouselItem.prev();
            if (lastCarouselItem.hasClass('off')) {
                lastCarouselItem.removeClass('off');
            }
        }
        carouselItem.removeClass('off');
    });
    $('.carousel').on('slid.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        carouselItem.addClass('off');
    });
}

function checkCover() {
    var checkboxes = $(".cover-ul [type=checkbox]");
    checkboxes.each(function(index) {        
        var checkbox = $(this);
        var t = setTimeout(function() { 
            checkbox.prop('checked', true);
        }, 500 * index);        
    });
}

function scrollFromCoverToMenu() {
    $("#cover").on('click keydown', function(e) {
        console.log(e.type);
        $('html, body').animate({
            scrollTop: $('#menu').offset().top
        }, 1000);
        var t = setTimeout(function() {
            $("#cover").css('display', 'none');
            $("body").scrollTop(0);
        }, 1000);
    });
}

function init() {
    scroll();
    carousel();
    cross();
    disableCheckbox();
    checkCover();
    scrollTo();
    carouselTransition();
    check();
    scrollFromCoverToMenu();
}