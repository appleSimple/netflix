/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 98,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);


    // 캐로셀 툴팁
     $(".wrap").tooltip();

    // 플러그인 소스
    
    new_carousel();

    $(window).resize(function(){
        location.reload();
        new_carousel();
    })
    
    function new_carousel() {
        var wd = $(window).width();
        if(wd < 576){
            $('.owl-carousel').owlCarousel({
                items:1,
                margin:50,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            });
        }else if(wd < 768){
            $('.owl-carousel').owlCarousel({
                items:3,
                margin:50,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            });
        }else{
            $('.owl-carousel').owlCarousel({
                items:5,
                margin:50,
                loop:true,
                autoplay:true,
                autoplayTimeout:2000,
                autoplayHoverPause:true
            });
        }  
    }

    //필터 플러그인
    const hot_down = $('.hot_down');
    const hot_up = $('.hot_up');
    const hot_group = $('.hot_group');
    const hot_span = $('.hot_toggle span');

    hot_group.isotope({
        itemSelector: '.hot_item'
    })
    
    $('.filter_btn').on('click', 'li', function () {
        if (hot_up.hasClass('hot_hidden') == true) {
            event.preventDefault();
            alert('목록을 펼쳐주세요!');
        } else {
            event.preventDefault();
            var filterValue = $(this).children().attr('data-filter');
            hot_group.isotope({ filter: filterValue });
            $('.filter_btn li').removeClass('filter_on');
            $(this).addClass('filter_on');
        }

        
    })
    hot_group.slideUp();

    hot_down.click(function () {
        hot_group.slideDown();
        hot_down.addClass('hot_hidden');
        hot_up.removeClass('hot_hidden');
    })
    hot_up.click(function () {
        hot_group.slideUp();
        hot_up.addClass('hot_hidden');
        hot_down.removeClass('hot_hidden');
    })

    // 요금제 버튼
    const plus = $('.plus');
    const minus = $('.minus');
    const check_btn = $('.fee-section .check');
    const user = $('<i class="fas fa-user"></i>');
    const area = $('.person');
    const fee_hidden = $('.fee_hidden');
    const fee_pic = $('.fee_pic');
    const reset_btn = $('.reset');
    const fee_btn = $('.fee_btn');

    plus.click(function () {
        const user_n = $('.person .fa-user');
        if (user_n.length < 4) {
            area.append(user);
            user.addClass('animate__animated');
            user.addClass('animate__bounceIn');
        } else {
            event.preventDefault();
        }
    })
    minus.click(function () {
        const user_n = $('.person .fa-user');
        user_n.eq(0).removeClass('animate__bounceIn');
        user_n.eq(0).remove();
    })
    
    check_btn.click(function () {
        const user_n = $('.person .fa-user');
        if (user_n.length == 1) {
            fee_pic.addClass('fee_hidden');
            fee_pic.eq(1).removeClass('fee_hidden');
        } else if (user_n.length == 2) {
            fee_pic.addClass('fee_hidden');
            fee_pic.eq(2).removeClass('fee_hidden');
        } else if (user_n.length == 3) {
            fee_pic.addClass('fee_hidden');
            fee_pic.eq(3).removeClass('fee_hidden');
        } else if (user_n.length == 4) {
            fee_pic.addClass('fee_hidden');
            fee_pic.eq(4).removeClass('fee_hidden');
        } else {
            alert('인원 수를 추가해주세요!');
        }
    })
    reset_btn.click(function () {
        fee_pic.addClass('fee_hidden');
        fee_pic.eq(0).removeClass('fee_hidden');

        area.children().remove();
    })

    //요금 결정
    fee_btn.click(function () {
        if (fee_pic.eq(0).hasClass('fee_hidden') == false) {
            alert('먼저 요금제를 선택해주세요.');
        } else {
            const fee_pick = confirm('이 요금제로 넷플릭스를 신청하시겠습니까? [확인]을 누르면 결제창으로 넘어갑니다.');
            if (fee_pick) {
                window.open('https://www.netflix.com');
            } else {
                return false;
            }
        }
    })

    //웨이포인트
    $('.wp1').waypoint(function(direction){
            if(direction === 'down'){
                $('.wp1').addClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'85%'
        })
        $('.wp1').waypoint(function(direction){
            if(direction === 'up'){
                $('.wp1').removeClass('animate__animated animate__fadeInUp')
            }
        },{
            offset:'85%'
        })

        // fadeInDown
        $('.wp2').waypoint(function(direction){
            if(direction === 'down'){
                $('.wp2').addClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:'85%'
        })
        $('.wp2').waypoint(function(direction){
            if(direction === 'up'){
                $('.wp2').removeClass('animate__animated animate__fadeInDown')
            }
        },{
            offset:'85%'
        })
    
    
})(jQuery); // End of use strict
