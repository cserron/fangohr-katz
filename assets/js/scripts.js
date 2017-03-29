$(document).ready(init);

var dic = 
    {
        "peace-of-mind-team": [
            {
                "title": "David Katz, AIA",
                "subtitle": "Founder",
                "img": '01',
                "content": "As founder of Katz Architecture, David has more than 30 years of experience in the fields of architecture and design. Over this time, he has contributed to a wide range of residential, commercial, retail, institutional, urban design and preservation projects throughout the United States and abroad. David received a Bachelor of Architecture from Cooper Union and a Masters of Architecture in Italy through the University of Washington Italian Studies Program where he received the school’s Outstanding Thesis Award. His work has appeared in multiple publications including House Beautiful, Building Design + Construction, New York Spaces, the New York Post and the New York Times. In addition to his professional practice, David has been a guest critic at the University of Washington, New Jersey institute of Technology and Pratt institute. While an instructor with the Institute of Design and Construction, David developed and taught classes in Materials and Methods of Construction. As an invited columnist for BrickUnderground, David has written numerous articles addressing the complexities of residential renovation in New York City. Licensed in New York, New Jersey, and Connecticut, David has been a member of the American Institute of Architects since 1994."
            },
            {
                "title": "Marina Morrone",
                "subtitle": "Office Manager",
                "img": '02',
                "content": "Marina received a Bachelor of Arts in Communication from Loyola University in 2007, prior to which \
                she studied at The American University of Paris. Her professional experience includes office administration for \
                the financial services industry as well as not-for-profit organizations. At KA, Marina manages the office and serves \
                as staff bookkeeper. And just in case KA opens outposts in Paris and Rome, Marina is fluent in French and Italian."
            },
            {
                "title": "Eric Owes",
                "subtitle": "Project Manager",
                "img": '03',
                "content": "With over 30 years of experience in the architectural profession, Eric is one of our senior Project \
                Managers at Katz Architecture. In addition to his varied experience on commercial interiors, educational buildings \
                and NYC Transit Authority projects, Eric has provided design and project management services for numerous retail \
                clients including Gucci, Jimmy Choo, Nine West, Foot Locker, Lous Vuitton, David Yurman and Kate Spade. At KA Eric \
                brings a wealth of design, technical expertise and great humor to every project."
            },
            {
                "title": "Paula Rand",
                "subtitle": "Project Designer",
                "img": '04',
                "content": "Before joining KA as a project designer, Paula received a Bachelor of Architecture from Rensselaer \
                Polytechnic Institute in 2012 where her thesis focused on urban design and environmental dynamics. Since joining \
                KA, her design research background and graphic design skills have served multiple clients including Urban Zen, \
                MacAndrews & Forbes, El Museo del Barrio and multiple residential clients."
            },
            {
                "title": "Luis Casiano",
                "subtitle": "Technical Director",
                "img": '05',
                "content": "Luis received a Bachelor of Architecture with Honors from Pratt Institute in 2000. Over the course \
                of his career he has been instrumental in the design and construction of educational, institutional, civic, \
                commercial and residential building types. Prior to joining KA, Luis was the Technical Director at AENA, whose \
                services he expanded to receive ICC accreditation as a Class I Special Inspection Agency for the gut renovation, \
                expansion, rehabilitation and development of residential building projects in NYC. Luis has extensive experience \
                and a clear understanding of the subtleties of the NYC Building Code, Zoning Resolution and Local Laws. His \
                involvement at all phases of work, from the planning and approvals phase, to construction and sign-off, make Luis \
                an invaluable asset to all clients. As Technical Director, Luis brings a generous spirit, great attitude and \
                thorough construction knowledge to every project."
            },
            {
                "title": "Ivan Silva",
                "subtitle": "Project Designer",
                "img": '06',
                "content": "Ivan obtained an Associate Degree in Applied Science in Architectural Technology in 2004 and a \
                Bachelor of Architecture from NYIT in 2009. Prior to joining KA, Ivan worked in the construction industry \
                providing services for large scale projects for the NYC School Construction Authority. His experience, strong \
                work ethic and friendly demeanor are all very helpful in serving KA projects under construction."
            },
            {
                "title": "Marvin Rodriguez",
                "subtitle": "Director of Operations",
                "img": '07',
                "content": "Marvin graduated with a BFA in Environmental Design from Parsons in 1997 and a Master of \
                Architecture from the University of Pennsylvania in 2001. He is the recipient of the Alpha Rho Chi Medal \
                for Architectural Leadership and an AIA Scholarship. Over the course of his experience, he has designed \
                and managed new construction and renovation projects for a wide range of clients including the GSA, \
                DEP, DASNY, NYCSCA as well as multiple high-end residential clients. In addition to his role as \
                Director of Operations, Marvin provides oversight as a Senior Project Manager. Outside the office, \
                Marvin is a governing board member of Intersections International of the Collegiate Churches of New York."
            },
            {
                "title": "Vanessa Sanchez",
                "subtitle": "Project Designer",
                "img": '08',
                "content": "Vanessa received a Bachelor of Arts in Architecture from the University of California, Berkeley \
                in 2004 and is certified in Social Economic Environmental Design (SEED) from the Public Interest Design \
                Institute. Her New York experience includes residential, hospitality and educational projects with Halpern \
                Architects and Robert A.M. Stern. As a project designer at KA, Vanessa has been instrumental in the completion \
                of multiple residential and commercial gut renovation projects. In addition to her architectural work, Vanessa \
                has volunteered her time for multiple causes including Big Brothers Big Sisters of New York, New York Cares \
                and Open Architecture New York."
            },
            {
                "title": "Katharine Gunn",
                "subtitle": "Project Designer / Building Management / Support Coordinator",
                "img": '09',
                "content": "Katharine received a Bachelor of Science in Architecture and Master of Architecture dual degree \
                from Roger Williams University in 2009. Her professional experience includes large scale projects for SUNY and \
                DASNY as well as multiple high-end retail projects for Tourneau, Salvatore Ferragamo, Georgio Armani, Diane \
                Von Furstenberg and Chanel. Katharine has brought her focused attention to detail to numerous projects at KA \
                including the NYC flagship store for Carhartt WIP and dozens of Building Management Support projects. Katharine \
                is also the office cartoonist, responsible for the ever-important weekly happy hour announcements."
            },
            {
                "title": "Christina Corrie",
                "subtitle": "Project Manager",
                "img": '10',
                "content": "Christina received a Bachelor of Architecture in 2008 from Virginia Polytechnic Institute where \
                she was a member of the National Society of Collegiate Scholars and AIAS. Prior to joining KA as a project \
                manager, Christina designed and managed multiple high end retail shops for The Timberland Company, Coach and \
                CH-Carolina Herrera. At KA Christina’s calm, thoughtful and thorough management style has served several \
                happy clients, among them the American Council for the Weizmann Institute, MacAndrews & Forbes and Reverence \
                Capital."
            }
            
        ],
        
        "management-properties": [
            {
                "title": "240 Centre Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "<ul> \
                	<li>Name: Police Building</li> \
                	<li>Building Type: Residential Co-op, 55 units </li> \
                	<li>Services Provided: Building Architect Services</li> \
                </ul>\
                </p>\
                <p>10-story 1923 Landmark District building designed by Carrere and Hastings, who also designed the New York Public Library. Gut renovation of lobby, new entry door and awning, design of new mailroom, sidewalk replacement, renovation of common halls and stairways, refurbishment of backyard access stair, design and installation of common backyard space including new stone deck and structural concrete retaining wall.</p>"
            },
            {
                "title": "243 West End Avenue",
                "subtitle": "New York, NY",
                "img": "02",
                "content": "<ul> \
                	<li>Building Type: Residential Co-op, 183 units</li> \
                	<li>Services Provided: Building Architect Services</li> \
                </ul>\
                </p>\
                <p>15-story 1925 Landmark District building designed by Emery Roth. Design and construction review services on behalf of the Board to assess proposed Shareholder renovation work for code compliance and impact on building infrastructure.</p>"
            },
            {
                "title": "46 West 95th Street",
                "subtitle": "New York, NY",
                "img": "03",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "705/711 Greenwich Street",
                "subtitle": "New York, NY",
                "img": "04",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "170 East 78th Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "El Museo Del Barrio",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Gramercy Townhouse",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "107 West 25th Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "52 Thomas Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "Midtown Landmark Building Enlargement",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "860 Grand Councourse",
                "subtitle": "Bronx, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna \
                            aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "111 Hicks Street",
                "subtitle": "Brooklyn, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "4 West 16th Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "27 Bleecker Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "147 West 22nd Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "12 West 18th Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "177 Duane Street",
                "subtitle": "New York, NY",
                "img": "01",
                "content": "Info. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet \
                            dolore magna aliguam erat volutpat. Ut wisis enim ad minim veniam, quis nostrud exerci tution ullam corper suscipit."
            },
            {
                "title": "78 Broadway To Come",
                "subtitle": "New York, NY",
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
    $(".main-anchor").click(function () {
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
    $(".cover-anchor, .bkg-cover").click(function () {
        var section = $(this).closest('section');
        if (windowWidth() > 767) {
            var parentSection = section.parent('section');
            if (section.attr('id') == 'building2' || section.attr('id') == 'management2') {
                parentSection.addClass('translate-section-building');
            } else if (section.attr('id') == 'peace-of-mind2') {
                parentSection.addClass('translate-section-peace-of-mind');
            } else if (section.attr('id') == 'peace-of-mind3') {
                parentSection.addClass('translate-section-peace-of-mind2');
            } else if (section.attr('id') == 'peace-of-mind4') {
                $('#contact').addClass('activate-section');
            } else {
                parentSection.addClass('translate-section');
            }
        } else {
            var target = (section.attr('id') == 'peace-of-mind4') ? $('#contact') : section.next();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    $(".about").click(function() {
        if (windowWidth() > 767) {
            $("#peace-of-mind").addClass('translate-section-peace-of-mind');
        } else {
            var target = $(this).data('target');
            $('html, body').animate({
                scrollTop: $('#peace-of-mind3').offset().top
            }, 1000);
        }
    });
    $(".team").click(function() {
        if (windowWidth() > 767) {
            $("#peace-of-mind").addClass('translate-section-peace-of-mind2');
        } else {
            var target = $(this).data('target');
            $('html, body').animate({
                scrollTop: $('#peace-of-mind4').offset().top
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
    img = img.replace('caruosel/','');
    return img;
}

function showDetail(target, idSection, detailItem) {
    $('#'+target).addClass('detail-active');
    $('#'+target+' .font-title-detail').html(dic[idSection][detailItem]['title']);
    $('#'+target+' .font-subtitle-detail').html(dic[idSection][detailItem]['subtitle']);
    var imgSrc = $('#'+target+' .team-member-image').attr('src');
    imgSrc = extractImageRoot(imgSrc);
    imgSrc = imgSrc + '/' + idSection+'/'+dic[idSection][detailItem]['img'] + '.png';
    $('#'+target+' .team-member-image').attr('src', imgSrc);
    $('#'+target+' .team-member-image').attr('alt', dic[idSection][detailItem]['title']);
    $('#'+target+' .font-content').html(dic[idSection][detailItem]['content']);
    $('#index-item').data('detail-item', detailItem.toString());
    $('#index-item').data('id-section', idSection);
}

function viewDetails() {
    $('.item-detail').hover(function() {
        $(this).toggleClass('deactivate');
        var tooltip = $(this).next();
        tooltip.toggleClass('detail-tooltip-active');
    });
    $('.item-detail').click(function() {
        var target = $(this).data('target');
        var idSection = $(this).closest('section').attr('id');
        var detailItem = $(this).data('detail-item');
        var sectionTarget = $('#'+target);
        showDetail(target, idSection, detailItem);
    });
}
function closeDetails() {
    $('.close-wrapper-detail').click(function() {
        $(this).parent('section').removeClass('detail-active');
    });
}

function carouselHandler() {
    $('.js-open-carousel').click(function() {
        if (windowWidth() > 767) {
            $('#building').addClass('translate-section-peace-of-mind2');
        } else {
            $('html, body').animate({
                scrollTop: $('#building4').offset().top
            }, 1000);
        }
    });
    $('.close-wrapper-slider').click(function() {
        if (windowWidth() > 767) {
            $('#building').removeClass('translate-section-peace-of-mind2');
            $('#building').addClass('translate-section-peace-of-mind');
        } else {
            $('html, body').animate({
                scrollTop: $('#building3').offset().top
            }, 1000);
        }
    });
}

function navigationDetails() {
    $('.right-arrow').click(function() {
        var idSection = $('#index-item').data('id-section');
        var detailItem = $('#index-item').data('detail-item');
        detailItem = parseInt(detailItem);
        detailItem = (detailItem + 1 > dic[idSection].length - 1) ? 0 : detailItem + 1;
        showDetail('detail', idSection, detailItem);
    });
    $('.left-arrow').click(function() {
        var idSection = $('#index-item').data('id-section');
        var detailItem = $('#index-item').data('detail-item');
        detailItem = parseInt(detailItem);
        detailItem = (detailItem - 1 < 0) ? dic[idSection].length - 1 : detailItem - 1;   
        showDetail('detail', idSection, detailItem);
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
    $('.close-wrapper-section').click(function() {
        if (windowWidth() > 767) {
            var sections = $(this).parents('section');
            var parentSection = sections.parent('section');
            parentSection.removeClass('\
            activate-section \
            translate-section \
            translate-section-building \
            translate-section-peace-of-mind \
            translate-section-peace-of-mind2 \
            translate-section-peace-of-mind3 \
            ');
        } else {
            $('html, body').animate({
                scrollTop: $('#menu').offset().top
            }, 1000);
        }
    });
    $('.contact-close').click(function() {
        if (windowWidth() > 767) {
            var section = $(this).parents('section');
            section.removeClass('activate-section');
            var sections = $('section');
            //workaround: when contact comes from peace-of-mind
            sections.each(function(index) {
                var section = $(this);
                section.removeClass(' \
                activate-section \
                translate-section \
                translate-section-peace-of-mind \
                translate-section-peace-of-mind2 \
                translate-section-peace-of-mind3');
            });
            
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
   if (windowWidth() > 767) {
        $(window).resize(function() {
            location.reload();
        });
     } 
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
    navigationDetails();
    carouselHandler();
}