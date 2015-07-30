// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document)
    .on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'hidden');
        $('.page').addClass('move-left');
        $('#header').addClass('move-left');
    })
    .on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'auto');
        $('.page').removeClass('move-left');
        $('#header').removeClass('move-left');
    });

new UISearch(document.getElementById('sb-search' ));
new UISearch(document.getElementById('sb-search-scroll' ));

$(document).ready(function(){
    (function () {
        var flag;

        $(function () {
            $(window).scroll(function () {
                var strollTop = $(window).scrollTop();

                if (strollTop > 100) {
                    if (true !== flag) {
                        flag = true;
                        $('body').addClass('scrolled');
                        //$('.header .main-nav').
                    }
                }
                else {
                    if (false !== flag) {
                        flag = false;
                        $('body').removeClass('scrolled');
                    }
                }
            }).trigger('scroll');
        });
    })();


    $('#drop-menu').click(function() {
        //alert('111');
        $('#header').find('#drop-menu-container').slideDown("slow");
    });
    $('.drop-menu-container .close-drop-menu-container').click(function() {
        $('#header').find('#drop-menu-container').slideUp("slow");
    });

    //scroll-bar
    $('#drop-menu-scroll').click(function() {
        //alert('111');
        $('.scroll-bar').find('.drop-menu-container').slideDown("slow");
    });
    $('.drop-menu-container .close-drop-menu-container').click(function() {
        $('.scroll-bar').find('.drop-menu-container').slideUp("slow");
    });


    (function($){
        $(window).load(function(){
            $('#drop-menu-container .menu-wrapper').mCustomScrollbar({
                theme:"rounded-dots",
                axis:"y",
                scrollInertia: 200
            });
        });
    })(jQuery);
});