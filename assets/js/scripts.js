$(document).ready(init);

var dic = 
    {
        "peace-of-mind-team": [
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '01',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '02',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '03',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '04',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '05',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '06',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '07',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '08',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '09',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                        magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Team",
                "subtitle": "David Katz",
                "img": '10',
                "content": "Bio Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore\
                            magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            }
            
        ],
        "management-properties": [
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "New York Properties",
                "subtitle": "Work",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
        ]
    };

function windowWidth() {
    return $(window).width();
}

function scroll() {
    $(".cover-anchor").click(function () {
        var section = $(this).parents('section');
        if (windowWidth() > 767) {
            var nextSection = section.next();
            $(nextSection).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: section.next().offset().top
            }, 1000);
        }
    });
}

function extractImageRoot(img) {
    var imgNameFile = img.match(/([0-9]+)\.([0-9a-z]+)/) || "";
    if (imgNameFile !== null)
        img = img.replace(imgNameFile[0], "");
    img = img.replace('management-properties/','');
    img = img.replace('peace-of-mind-team/','');
    return img;
}

function viewDetails() {
    $('.item-detail').click(function() {
        var target = $(this).data('target');
        var idSection = $(this).closest('section').attr('id');
        var detailItem = $(this).data('detail-item');
        var sectionTarget = $('#'+target);
        $('#'+target).addClass('detail-active');
        $('#'+target+' .font-title-detail').html(dic[idSection][detailItem]['title']);
        $('#'+target+' .font-subtitle-detail').html(dic[idSection][detailItem]['subtitle']);
        var imgSrc = $('#'+target+' .team-member-image').attr('src');
        imgSrc = extractImageRoot(imgSrc);
        imgSrc = imgSrc + '/' + idSection+'/'+dic[idSection][detailItem]['img'] + '.png';
        $('#'+target+' .team-member-image').attr('src', imgSrc);
        $('#'+target+' .team-member-image').attr('alt', dic[idSection][detailItem]['subtitle']);
        $('#'+target+' .font-content').html(dic[idSection][detailItem]['bio']);

    });
}
function closeDetails() {
    $('.close-wrapper-detail').click(function() {
        $(this).parent('section').removeClass('detail-active');
    });
}

function openSection() {
    $('.open-section').click(function() {
        var target = $(this).data('target');
        $(this).find('input').prop('checked', true);
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function closeSection() {
    $('.close-wrapper, .contact-close').click(function() {
        var section = $(this).parents('section').attr('id');
        if (windowWidth() > 767) {
            $('section').removeClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#menu').offset().top
            }, 1000);
        }
    });
}

function scrollTo() {
    $('.link-to').click(function () {
        var target = $(this).data('target');
        if (windowWidth() > 767) {
            $('#'+target).addClass('activate-section');
        } else {
            $('html, body').animate({
                scrollTop: $('#'+target).offset().top
            }, 1000);
        }
    });
}

function carousel() {
    $('.carousel').carousel({
        pause: true,
        interval: false
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
            if (lastCarouselItem.hasClass('deactivate')) {
                lastCarouselItem.removeClass('deactivate');
            }
        }
        carouselItem.removeClass('deactivate');
    });
    $('.carousel').on('slid.bs.carousel', function () {
        var carouselItem = $(this).find('.active');
        carouselItem.addClass('deactivate');
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

function down() {
    $('html, body').animate({
        scrollTop: $('#menu').offset().top
    }, 1000, function() {
        $("#cover").css('display', 'none');
        $("body").scrollTop(0);
        if (windowWidth() > 767) {
            $(".menu").css('position', 'fixed');
        }
    });
}
function scrollFromCoverToMenu() {
    if (windowWidth() > 767) {
        $(window).one('scroll', down);
    }
    $("#cover").one('scroll click keydown', down);
}

function toggleInfoDiv() {
    $('.info-button').click(function() {
        var parent = $(this).parent('.carousel-item');
        // console.log("info-button",infoDiv.attr('class'));
        
        var infoDiv = parent.find('.info-div');
        infoDiv.addClass('info-active');
        $('.close-wrapper-info').show();
        $(this).hide();
    });
    $('.close-wrapper-info').click(function() {
        var parent = $(this).closest('.carousel-item');
        var infoDiv = parent.find('.info-div');
        infoDiv.removeClass('info-active');
        parent.find('.info-button').show();
    });
}

function detectResize() {
    $(window).resize(function() {
        location.reload();
    });
}

function init() {
    scroll();
    carousel();
    disableCheckbox();
    checkCover();
    scrollTo();
    carouselTransition();
    check();
    scrollFromCoverToMenu();
    openSection();
    closeSection();
    toggleInfoDiv();
    detectResize();
    viewDetails();
    closeDetails();
}