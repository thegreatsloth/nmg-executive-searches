/*init function*/
jQuery(function () {
    initBgCover();
    viewPortWidth();
});

/*background cover*/
function initBgCover(context) {
    if (!context) context = jQuery('body');
    context.find('.bg-cover').each(function () {
        var holder = jQuery(this);
        var image = holder.find('> img').hide();
        var imageSrc = image.prop('src');
        holder.css({
            backgroundImage: 'url(' + imageSrc + ')'
        });
    });
}

/* view Port Width for IE Mobile */
function viewPortWidth() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle)
    }
}

jQuery('.modal-toggle').on('click', function(e) {
    e.preventDefault();
    jQuery('.modal').toggleClass('is-visible');
});

jQuery(document).ready(function () {

    /*  smooth scroll */
    jQuery('a.js-has-smooth[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                jQuery('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    //Service Slider Slider
    jQuery(".service-slider").slick({
        infinite: true,
        dots: false,
        speed: 800,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 6000,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            }, {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    jQuery('.service-slider').on('setPosition', function () {
        jQuery(this).find('.item').height('auto');
        var slickTrack = jQuery(this).find('.slick-track');
        var slickTrackHeight = jQuery(slickTrack).height();
        jQuery(this).find('.item').css('height', slickTrackHeight + 'px');
        console.log(slickTrackHeight);
    });

    //Profile Slider
    jQuery(".profile-slider .swiper-wrapper").slick({
        infinite: true,
        dots: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 6000,
        centerMode: true,
        centerPadding: 0

    });

    /* Counter */

    jQuery(".circular-counter").circularProgress({
        line_width: 6,
        color: "#eb003d",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage: true,
        text: "OVER"
    }).circularProgress('animate', 80, 5000);


    /*Process Tab*/
    jQuery('.ss-custom-tab .tabs li a').click(function (e) {
        jQuery('.ss-custom-tab .tabs li a').removeClass('active');
        jQuery(this).addClass('active');
        jQuery('.ss-custom-tab .tab-content').removeClass('show');
        var selectTab = jQuery(this).attr("href");

        jQuery(selectTab).addClass('show');
        e.preventDefault();
        return false;
    });

    /*Custom Popup*/
    jQuery('.js-popup-btn').click(function(e){
        jQuery('body').addClass('popup-open');
        var selectAttr = jQuery(this).attr("href");
        jQuery(selectAttr).addClass('popup-show');
        e.preventDefault();
        return false;
    });
    /*Popup Close*/
    jQuery('.js-popup-close').click(function(e){
        jQuery('.popup-module').removeClass('popup-show');
		jQuery('body').removeClass('popup-open');
		jQuery('.text-holder > iframe').attr('src', jQuery('.text-holder > iframe').attr('src'));
        e.preventDefault();
        return false;
    });


    jQuery('.toggle-btn').click(function (e) {
        jQuery(this).next().slideToggle();
        e.preventDefault();
        return false;
    });

   /* var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 4,
        initialSlide: 3,
        spaceBetween: 10,
        autoHeight: true,
        keyboardControl: true,
        mousewheelControl: false,
        lazyLoading: true,
        preventClicks: false,
        preventClicksPropagation: false,
        lazyLoadingInPrevNext: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        coverflow: {
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
        },
        breakpoints: {
            // when window width is <= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is <= 640px
            576: {
                slidesPerView: 2,
                initialSlide: 1
            },
            // when window width is <= 640px
            768: {
                slidesPerView: 3,
                initialSlide: 2
            }
        }
    });

    swiper.slideNext();*/

});


