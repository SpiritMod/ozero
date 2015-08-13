// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

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

    $('#scroll-to-comment').click(function() {
        var id = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(''+id+'').offset().top - 66 + "px"
        }, {
            duration: 1000
        });
        return false;
    });

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
