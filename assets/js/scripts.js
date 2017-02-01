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

function disableCheckbox() {
    $(".check-list [type=checkbox]").on('click', function (e) {
        e.preventDefault();
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

function init() {
    scroll();
    carousel();
    cross();
    disableCheckbox();
    scrollTo();
    carouselTransition();
}