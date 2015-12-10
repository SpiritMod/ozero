// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
Foundation.global.namespace = '';

$(document).foundation();

$('#myTabs').on('toggled', function (event, tab) {
    if (document.getElementById('slider-subscribers')){
        $(function() {
            $('#panel31.active .slider-subscribers .slick-prev').trigger( "click" );
            //$('#panel31 .slider-subscribers .slick-next').trigger( "click" );
        });
    }
});


$(document)
    .on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'hidden');
        $('.wrapper').addClass('move-left');
        $('#scroll-bar').addClass('move-left');
    })
    .on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'auto');
        $('.wrapper').removeClass('move-left');
        $('#scroll-bar').removeClass('move-left');
    });

new UISearch(document.getElementById('sb-search'));
new UISearch(document.getElementById('sb-search-scroll'));

$(document).ready(function(){

    if ($(window).width() <= 767) {
        // is mobile device
        $('#scroll-bar').addClass('mobile');
        //alert('width < 767 ==== ' + $(window).width());
        $('#show-widget').click(function(){
            $('#scroll-bar .widget').fadeIn("slow");
            return false;
        });
        $('#close-widget').click(function(){
            $('#scroll-bar .widget').fadeOut("slow");
            return false;
        });
    }

    if ($(window).width() >= 768) {
        $('#scroll-bar').removeClass('mobile');
        var $menu = $('#scroll-bar');
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 144 ){
                $menu.fadeIn(600);
                $menu.addClass('fade');
            } else if($(this).scrollTop() <= 144 ) {
                $menu.removeClass('fade');
            }
        });
    }

    //init custome scroll
    (function($){
        $(window).load(function(){
            //var heightWindow = window.innerHeight - 80 - 48 - 0;
            //$('.drop-menu-container .menu-wrapper').css('height',heightWindow);
            $('.drop-menu-container .menu-wrapper').mCustomScrollbar({
                theme:"rounded-dots",
                axis:"y",
                scrollInertia: 200,
                setHeight: '87%',
                mouseWheel:{ enable: true }
            });
        });
    })(jQuery);

    //slider other news
    if (document.getElementById('other-news-slider')){
        $("#other-news-slider").slick({
            slide: '.item',
            arrows: true,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    //slider recommended-articles
    if (document.getElementById('other-news-slider')){
        $(function(){

            if (window.matchMedia("(min-width: 940px)").matches) {
                /* the viewport is at least >940 pixels wide */
                $('#recommended-articles').unslick();
            } else {
                /* the viewport is less than <940 pixels wide */
                $("#recommended-articles").slick({
                    slide: '.item',
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20%',
                    responsive: [
                        {
                            breakpoint: 440,
                            settings: {
                                centerPadding: '10%'
                            }
                        }
                    ]

                });
            }


        });
    }

    //slider last-publications
    if (document.getElementById('last-news-slider')){
        $(function(){
            if (window.matchMedia("(min-width: 980px)").matches) {
                /* the viewport is at least >940 pixels wide */
                $('#last-publications').unslick();
            } else {
                /* the viewport is less than <940 pixels wide */
                $("#last-publications").slick({
                    slide: '.item',
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20%',
                    responsive: [
                        {
                            breakpoint: 440,
                            settings: {
                                centerPadding: '10%'
                            }
                        }
                    ]

                });
            }
        });
    }

    //slider last-photo-report
    if (document.getElementById('last-photo-report')){
        $(function(){
            if (window.matchMedia("(min-width: 980px)").matches) {
                /* the viewport is at least >980 pixels wide */
                $('#last-photo-report').unslick();
            } else {
                /* the viewport is less than <980 pixels wide */
                $("#last-photo-report").slick({
                    slide: '.item',
                    adaptiveHeight: true,
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20%',
                    responsive: [
                        {
                            breakpoint: 440,
                            settings: {
                                centerPadding: '10%'
                            }
                        }
                    ]

                });
            }
        });
    }

    //mobile slider blog in news-page
    if (document.getElementById('blog-list-mobile')){
        $(function(){
            if (window.matchMedia("(min-width: 768px)").matches) {
                /* the viewport is at least >940 pixels wide */
                $('#blog-list-mobile').unslick();
            } else {
                /* the viewport is less than <940 pixels wide */
                $("#blog-list-mobile").slick({
                    slide: '.item',
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '20%',
                    responsive: [
                        {
                            breakpoint: 440,
                            settings: {
                                centerPadding: '10%'
                            }
                        }
                    ]

                });
            }
        });
    }

    //mobile slider list-popular-island
    if (document.getElementById('list-popular-island')){
        $(function(){
            if (window.matchMedia("(min-width: 769px)").matches) {
                /* the viewport is at least >940 pixels wide */
                $('#list-popular-island').unslick();
            } else {
                /* the viewport is less than <940 pixels wide */
                $("#list-popular-island").slick({
                    slide: '.item',
                    arrows: false,
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 540,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]

                });
            }
        });
    }

    //mobile slider list-popular-authors
    if (document.getElementById('list-popular-authors')){
        $(function(){
            if (window.matchMedia("(min-width: 769px)").matches) {
                $('#list-popular-authors').unslick();
            } else {
                $("#list-popular-authors").slick({
                    slide: '.item',
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '22%',
                    responsive: [
                        {
                            breakpoint: 440,
                            settings: {
                                centerPadding: '10%'
                            }
                        }
                    ]

                });
            }
        });
    }

    //slider other news
    if (document.getElementById('list-recommended-read')){
        $("#list-recommended-read").slick({
            slide: '.item',
            arrows: true,
            dots: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 960,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]

        });
    }

    //afisha datepicker
    if (document.getElementById('datepicker')){
        $(function() {
            $( "#datepicker" ).datepicker();
        });
    }

    //event rating init
    if (document.getElementById('event-rating')){
        $(function() {
            $('#event-rating').rating({
                fx: 'full',
                image: 'js/jquery.rating/images/stars-small.png',
                loader: 'js/jquery.rating/images/ajax-loader.gif',
                //url: 'rating.php',
                callback: function(responce){
                    this.vote_success.fadeOut(2000);
                }
            });
        });
    }
    if (document.getElementById('place-light-rating')){
        $(function() {
            $('#place-light-rating').rating({
                fx: 'full',
                image: 'js/jquery.rating/images/stars-small.png',
                loader: 'js/jquery.rating/images/ajax-loader.gif',
                //url: 'rating.php',
                callback: function(responce){
                    this.vote_success.fadeOut(2000);
                }
            });
        });
    }
    if (document.getElementById('photo-report-rating')){
        $(function() {
            $('#photo-report-rating').rating({
                fx: 'full',
                image: 'js/jquery.rating/images/stars-small.png',
                loader: 'js/jquery.rating/images/ajax-loader.gif',
                //url: 'rating.php',
                callback: function(responce){
                    this.vote_success.fadeOut(2000);
                }
            });
        });
    }
    //end rating init

    //slider in page poster-event
    if (document.getElementById('slider-event')){
        $(function() {
            $( '#slider-event' ).sliderPro({
                width: '100%',
                height: 420,
                autoHeight: true,
                fade: true,
                arrows: true,
                buttons: false,
                //fullScreen: false,
                //shuffle: true,
                responsive: true,
                thumbnailArrows: true,
                autoplay: false,
                startSlide: 0,
                thumbnailWidth: 186,
                thumbnailHeight: 118
            });
        });
    }

    //slider in page poster-photo-report
    if (document.getElementById('photo-report')){
        $(function() {
            $('#photo-report').sliderPro({
                width: '100%',
                height: 500,
                autoHeight: true,
                fade: true,
                arrows: true,
                buttons: false,
                fullScreen: true,
                shuffle: true,
                thumbnailArrows: true,
                thumbnailWidth: 170,
                autoplay: false,
                init: function( event ) {
                    //console.log( event.index );
                    //$('#select-slide').html(event.index + 1);
                    $('#total-slides').html(this.getTotalSlides());
                },
                gotoSlide: function( event ) {
                    //console.log( event.index );
                    $('#select-slide').html(event.index + 1);
                    $('#total-slides').html(this.getTotalSlides());
                }

            });
            $( "#full-screen" ).on( "click", function() {
                $('#photo-report .sp-full-screen-button').trigger( "click" );
            });
            $( "#photo-report-left" ).on( "click", function() {
                $('#photo-report .sp-slides-container .sp-arrows .sp-previous-arrow').trigger( "click" );
            });
            $( "#photo-report-right" ).on( "click", function() {
                $('#photo-report .sp-slides-container .sp-arrows .sp-next-arrow').trigger( "click" );
            });
        });
    }

    //slider in page place-full
    if (document.getElementById('slider-place-foto')){
        $(function() {
            $( '#slider-place-foto' ).sliderPro({
                width: '100%',
                height: 420,
                autoHeight: true,
                fade: true,
                arrows: true,
                buttons: false,
                //fullScreen: false,
                //shuffle: true,
                responsive: true,
                thumbnailArrows: true,
                autoplay: false,
                startSlide: 0,
                thumbnailWidth: 188,
                thumbnailHeight: 118
            });
        });
    }

    if (document.getElementById('time')){
        $(function() {
            //$("#time").ionRangeSlider();
            var $range = $("#time");

            $range.ionRangeSlider({
                type: "double",
                min: 9,
                max: 24,
                from: 9,
                to: 24,
                hide_min_max: true
            });

            $range.on("change", function () {
                var $this = $(this),
                    value = $this.prop("value").split(";");
                $('#from-time').html(value[0]);
                $('#to-time').html(value[1]);
                console.log(value[0] + " - " + value[1]);
            });
        });
    }
    //range
    if (document.getElementById('check')){
        $(function() {
            var $range = $("#check");

            $range.ionRangeSlider({
                type: "double",
                min: 500,
                max: 2500,
                from: 500,
                to: 2500,
                step: 500,
                hide_min_max: true
            });
        });
    }

    //Date-slider
    if (document.getElementById('date-slider')){
        $(function(){
            if (window.matchMedia("(min-width: 769px)").matches) {
                /* the viewport is at least >768 pixels wide */
                $('#date-slider').unslick();
            } else {
                /* the viewport is less than <940 pixels wide */
                $("#date-slider").slick({
                    slide: 'li',
                    arrows: true,
                    dots: false,
                    infinite: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    prevArrow: '<a data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></a>',
                    nextArrow: '<a data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i> </a>',
                    responsive: [
                        {
                            breakpoint: 540,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 440,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 380,
                            settings: {
                                slidesToShow: 2
                            }
                        }
                    ]

                });
            }
        });
    }

    //Date-place-slider
    if (document.getElementById('date-place-slider')){
        $(function() {
            $("#date-place-slider").slick({
                slide: 'li',
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 1,
                prevArrow: '<a data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></a>',
                nextArrow: '<a data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i> </a>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 6
                        }
                    },
                    {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 440,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 380,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
        });
    }

    // User slider-subscribers
    if (document.getElementById('slider-subscribers')){
        $(function() {
            $("#slider-subscribers").slick({
                slide: '.item',
                arrows: true,
                dots: false,
                infinite: false,
                slidesToShow: 7,
                slidesToScroll: 1,
                prevArrow: '<a data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></a>',
                nextArrow: '<a data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i> </a>',
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 960,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 560,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]

            });
        });
    }

    // node-news-slider
    if (document.getElementById('node-news-slider')){
        $("#node-news-slider").slick({
            slide: '.item',
            arrows: true,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: '<a data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></a>',
            nextArrow: '<a data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i> </a>'
        });
    }

    // init custom select
    if (document.getElementById('day')){
        $(function() {
            $("#day").selectbox();
        });
    }
    if (document.getElementById('month')){
        $(function() {
            $("#month").selectbox();
        });
    }
    if (document.getElementById('year')){
        $(function() {
            $("#year").selectbox();
        });
    }
    if (document.getElementById('location')){
        $(function() {
            $("#location").selectbox();
        });
    }
    if (document.getElementById('theme')){
        $(function() {
            $("#theme").selectbox();
        });
    }
    if (document.getElementById('article-island')){
        $(function() {
            $("#article-island").selectbox();
        });
    }
    // END custom select

    $('#scroll-to-comment').click(function() {
        var id = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(''+id+'').offset().top - 66 + "px"
        }, {
            duration: 1000
        });
        return false;
    });
    $('#scroll-to-comments').click(function() {
        var id = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(''+id+'').offset().top - 66 + "px"
        }, {
            duration: 1000
        });
        return false;
    });

    if ( $('.page-pulse input[type=file]').length ) {
        $(".page-pulse input[type=file].foto").nicefileinput({
            label : 'Фото...' // Spanish label
        });
    }
    //weather-bottom
    /*$('#weather-bottom').click(function(){
        //$(this).addClass('active-informer');
        $(this).find('#weather-informer').toggle().parent().toggleClass('active-informer');
        $('#widget-overlay').show();
        $('#widget-overlay').click(function(){
            $('#weather-informer').hide().parent().removeClass('active-informer');
            $(this).hide();
        });
    });*/

    // Weather-informer
    $('.weather-wrapper').click(function(){
        $(this).parent().find('.weather-informer').toggle().parent().toggleClass('active-informer');
        $('#widget-overlay').show();
        $('#widget-overlay-scroll-bar').show();
        $('#widget-overlay').click(function(){
            $('.weather-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay-scroll-bar').hide();
            $(this).hide();
        });
        $('#widget-overlay-scroll-bar').click(function(){
            $('.weather-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay').hide();
            $(this).hide();
        });
    });
    // Traffic-informer
    $('.traffic-wrapper').click(function(){
        $(this).parent().find('.traffic-informer').toggle().parent().toggleClass('active-informer');
        $('#widget-overlay').show();
        $('#widget-overlay-scroll-bar').show();
        $('#widget-overlay').click(function(){
            $('.traffic-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay-scroll-bar').hide();
            $(this).hide();
        });
        $('#widget-overlay-scroll-bar').click(function(){
            $('.traffic-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay').hide();
            $(this).hide();
        });
    });
    // Cash-informer
    $('.cash-wrapper').click(function(){
        $(this).parent().find('.cash-informer').toggle().parent().toggleClass('active-informer');
        $('#widget-overlay').show();
        $('#widget-overlay-scroll-bar').show();
        $('#widget-overlay').click(function(){
            $('.cash-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay-scroll-bar').hide();
            $(this).hide();
        });
        $('#widget-overlay-scroll-bar').click(function(){
            $('.cash-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay').hide();
            $(this).hide();
        });
    });
    // Fuel-informer
    $('.fuel-wrapper').click(function(){
        $(this).parent().find('.fuel-informer').toggle().parent().toggleClass('active-informer');
        $('#widget-overlay').show();
        $('#widget-overlay-scroll-bar').show();
        $('#widget-overlay').click(function(){
            $('.fuel-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay-scroll-bar').hide();
            $(this).hide();
        });
        $('#widget-overlay-scroll-bar').click(function(){
            $('.fuel-informer').hide().parent().removeClass('active-informer');
            $('#widget-overlay').hide();
            $(this).hide();
        });
    });

    // Sing-in
    $('a.sign-in').click(function(){
        $(this).parent().find('.box-form-login').toggle();
        $('#widget-overlay').show();
        $('#widget-overlay-scroll-bar').show();
        $('#widget-overlay').click(function(){
            $('.box-form-login').hide();
            $('#widget-overlay-scroll-bar').hide();
            $(this).hide();
        });
        $('#widget-overlay-scroll-bar').click(function(){
            $('.box-form-login').hide();
            $('#widget-overlay').hide();
            $(this).hide();
        });
        return false;
    });

    // show cuisine-wrapper in places-restaurants-list page
    $('#btn-cuisine').click(function(){
        $('#cuisine-wrapper').toggle();
        return false;
    });
    // show cuisine-additionally in places-restaurants-list page
    $('#btn-additionally').click(function(){
        $('#additionally-wrapper').toggle();
        return false;
    });

   /* $('.post .controls-comments-post a.show-form-comment').click(function(){
       $(this).parent().parent().find('.block-form-comment').slideToggle('slow');
       $(this).hide('show');
       return false;
    });*/

    $('.post .controls-comments-post a.btn-show-comments').click(function(){
       $(this).parent().parent().find('.block-comments').slideToggle('slow');
       $(this).parent().find('.btn-hide-comments').show('slow');
       $(this).hide('');
       return false;
    });

    $('.post .controls-comments-post a.btn-hide-comments').click(function(){
        $(this).parent().parent().find('.block-comments').slideToggle('slow');
        $(this).parent().find('.btn-show-comments').show('slow');
        $(this).hide('');
        return false;
    });

    // tinymce
    if (document.getElementById('article-body')){
        $(function() {
            tinymce.init({
                selector: "#article-body"
            });
        });
    }

    (function($) {
        $.fn.extend( {
            limiter: function(limit, elem) {
                $(this).on("keyup focus", function() {
                    setCount(this, elem);
                });
                function setCount(src, elem) {
                    var chars = src.value.length;
                    if (chars > limit) {
                        src.value = src.value.substr(0, limit);
                        chars = limit;
                    }
                    elem.html( limit - chars );
                }
                setCount($(this)[0], elem);
            }
        });
    })(jQuery);

    if (document.getElementById('article-title-characters')){
        $(function() {
            var elem = $("#article-title-characters");
            $("#article-title").limiter(60, elem);
        });
    }
    if (document.getElementById('article-preview-characters')){
        $(function() {
            var elem = $("#article-preview-characters");
            $("#article-preview").limiter(190, elem);
        });
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result).css('opacity','1');
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#preview-photo").change(function(){
        readURL(this);
    });

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('#scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    if (document.getElementById('theme-island')){
        $(function() {
            $("#theme-island").selectbox();
        });
    }
});


$(window).load(function(){
    //news masonry
    if ( $('.block-news-container-1').length ) {
        $('.block-news-container-1').masonry({
            itemSelector: '.item'
        });
    }
    if ( $('.block-news-container-2').length ) {
        $('.block-news-container-2').masonry({
            itemSelector: '.item'
        });
    }
    if ( $('.block-news-container-3').length ) {
        $('.block-news-container-3').masonry({
            itemSelector: '.item'
        });
    }

    if ( $('#poster-wrap-1').length ) {
        $('#poster-wrap-1').masonry({
            columnWidth: ".grid-sizer",
            itemSelector: ".m-item"
        });
    }
    if ( $('#poster-wrap-2').length ) {
        $('#poster-wrap-2').masonry({
            columnWidth: ".grid-sizer",
            itemSelector: ".m-item"
        });
    }
    if ( $('#poster-wrap-3').length ) {
        $('#poster-wrap-3').masonry({
            columnWidth: ".grid-sizer",
            itemSelector: ".m-item"
        });
    }

   /* var container1 = document.querySelector('.block-news-container-1');
    var container2 = document.querySelector('.block-news-container-2');
    var container3 = document.querySelector('.block-news-container-3');

    var msnry1 = new Masonry( container1, {
        itemSelector: ".item"
    });
    var msnry2 = new Masonry( container2, {
        itemSelector: ".item"
    });
    var msnry3 = new Masonry( container3, {
        itemSelector: ".item"
    });*/

});
