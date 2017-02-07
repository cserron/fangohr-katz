$(document).ready(init);

function scroll() {
    $(".cover-anchor").click(function () {
        var section = $(this).parents('section');
        var nextSection = section.next();
        $(nextSection).addClass('activate-section');
        $(section).removeClass('activate-section');
    });
}

function openSection() {
    $('.open-section').click(function() {
        var target = $(this).data('target');
        $('#'+target).addClass('activate-section');
    });
}

function closeSection() {
    $('.close-section').click(function() {
        var section = $(this).parents('section').attr('id');
        $('#'+section).removeClass('activate-section');
        $('input#menu-' + section).prop('checked', true);
    });
}

function scrollTo() {
    $('.link-to').click(function () {
        var target = $(this).data('target');
        $('#'+target).addClass('activate-section');
    });
}

function carousel() {
    $('.carousel').carousel({
        pause: true,
        interval: false
    });
}

function cross() {
    var section = $(this).parents('section');
    section.removeClass('activate-section');
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
        }, 400 * index);        
    });
}

function scrollFromCoverToMenu() {
    $("#cover").on('click keydown', function(e) {
        $('html, body').animate({
            scrollTop: $('#menu').offset().top
        }, 1000, function() {
            $("#cover").css('display', 'none');
            $("body").scrollTop(0);
            $(".menu").css('position', 'fixed');
        });
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
    openSection();
    closeSection();
}