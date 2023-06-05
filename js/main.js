$(function () {
    //상단 헤더 스크롤 시, 클래스 부여
    let hd = $('header');
    let hdTop = hd.offset().top;
    //console.log(hdTop); // 0

    $(window).scroll(function () {
        let scrollBar = $(window).scrollTop();
        if (hdTop < scrollBar) {
            hd.addClass('on');
        } else {
            hd.removeClass('on');
        }

        //about섹션 skill
        //console.log(scrollBar);
        let about = $('.about');
        let aboutTop = about.offset().top;
        // console.log(aboutTop);
        let r = true;

        if (scrollBar < aboutTop - 200) {
            if (r == true) {
                let skillNum = $('.skill_wrap li span');
                skillNum.finish();
                skillNum.each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    })
                })
                r = false;
            }
        }
    })//$(window).scroll end

    //상단 헤더 메뉴 mouseenter,mouseleave
    let depth01 = $('.pc .depth01');
    let depth02 = $('.pc .depth02');

    depth01.mouseenter(function () {
        $(this).children().stop().slideDown();
    })//depth01.mouseenter end

    depth01.mouseleave(function () {
        $(this).children('.depth02').stop().slideUp();
    })//depth01.mouseleave end


    //텍스트 롤링 배너 복제
    let flowBanner = $('.flow_banner');
    let slideText = $('.slide_text');
    let textClone = slideText.clone();

    textClone.addClass('clone');
    textClone.appendTo(flowBanner);

    //project섹션 swiper (pc)
    var swiper = new Swiper(".container_pc", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: function () {
                $('.name.pc ul li').removeClass('on');
                $('.name.pc ul li').eq(this.realIndex).addClass('on');

                $('.screen ul li').removeClass('on');
                $('.screen ul li').eq(this.realIndex).addClass('on');
            },
        }
    });

    //project섹션 .work토글
    let work = $('.work');
    let workImg = $('.work figure');

    work.click(function () {
        workImg.stop().slideToggle(1000, 'easeInOutQuint');
    })

    let nameMenu = $('.name ul li');
    nameMenu.click(function () {
        nameMenu.removeClass('on');
        $(this).addClass('on');
    })

    //swiper 탭메뉴 클릭시 해당하는 swiper로 이동
    //console.log(nameMenu.click());
    nameMenu.click(function () {
        let index = $(this).index();
        //console.log(index);
        swiper.slideTo(index);
    })

    //fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
        //
    });

    //.design 탭메뉴
    let designMenu = $('.design .tap_menu ul li');
    let designList = $('.design .list');
    let bar = $('.bar');

    let designMenuWidth = designMenu.outerWidth();
    let designMenuHeight = designMenu.outerHeight();

    bar.css({
        'background-color': '#385B55',
        'width': designMenuWidth,
        'height': designMenuHeight
    })

    designMenu.click(function () {
        let moveLeft = $(this).position().left;
        bar.animate({
            'left': moveLeft
        }, 700, 'easeInOutBack')

        let thisWidth = $(this).outerWidth();
        bar.css({
            'width': thisWidth
        })

        designMenu.removeClass('on');
        $(this).addClass('on');

        designList.removeClass('on');
        designList.eq($(this).index()).addClass('on');
    })//designMenu.click end


    ///tab 1024px
    let bodyBg = $('body');
    let menuOpen = $('.menu_open');
    let menuClose = $('.menu_close');
    let menuMo = $('.menu_mo');

    menuMo.css('display', 'none');

    menuOpen.click(function () {
        menuMo.css({ 'display': 'block' })
        bodyBg.addClass('bg');
    })

    menuClose.click(function () {
        menuMo.css({ 'display': 'none' })
        bodyBg.removeClass('bg');
    })

    let depth01Mo = $('.mo .depth01');
    let depth02Mo = $('.mo .depth02');

    depth01Mo.click(function () {
        depth02Mo.slideToggle();

        depth01Mo.removeClass('on');
        $(this).addClass('on');
    })

    //project 섹션 swiper (mo)
    var swiper = new Swiper(".container_mo", {
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        on: {
            slideChange: function () {
                $('.name.mo li').removeClass('on');
                $('.name.mo li').eq(this.realIndex).addClass('on');
            },
        }
    });

})//jquery end