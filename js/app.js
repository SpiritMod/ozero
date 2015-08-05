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




    //$(function(){
    //    var mgl = window.matchMedia('(max-width: 768px)');
    //    var lgl = window.matchMedia('(min-width: 769px)');
    //    if (mgl.matches) {
    //
    //    }
    //    if (lgl.matches) {
    //
    //    }
    //
    //});
});