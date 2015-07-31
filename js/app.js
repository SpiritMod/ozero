// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

new UISearch(document.getElementById('sb-search' ));
new UISearch(document.getElementById('sb-search-scroll'));

$(document).ready(function(){
   /* (function () {
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
    })();*/

    if ($(window).width() <= 767) {
        // is mobile device
        $('#header .scroll-bar').addClass('mobile');
        //alert('width < 767 ==== ' + $(window).width());
        $('#show-widget').click(function(){
            $('#header .scroll-bar .widget').fadeIn("slow");
            return false;
        });
        $('#close-widget').click(function(){
            $('#header .scroll-bar .widget').fadeOut("slow");
            return false;
        });

    }

    if ($(window).width() >= 768) {
        $('#header .scroll-bar').removeClass('mobile');
        var $menu = $('#header .scroll-bar');
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 144 ){
                $menu.fadeIn(600);
                $menu.addClass('fade');
            } else if($(this).scrollTop() <= 144 ) {
                $menu.removeClass('fade');
            }
        });
    }


    $('#drop-menu').click(function() {
        $('#drop-menu-container').slideDown("slow");
        return false;
    });
    $('#close-drop-menu-container').click(function() {
        $('#drop-menu-container').slideUp("slow");
    });

    //scroll-bar
    $('#drop-menu-scroll').click(function() {
        $('#scroll-drop-menu-container').slideDown("slow");
        return false;
    });
    $('#close-scroll-drop-menu-container').click(function() {
        $('#scroll-drop-menu-container').slideUp("slow");
    });


    (function($){
        $(window).load(function(){
            $('.drop-menu-container .menu-wrapper').mCustomScrollbar({
                theme:"rounded-dots",
                axis:"y",
                scrollInertia: 200
            });
        });
    })(jQuery);
});
$(window).load(function(){
    var container = document.querySelector('.masonry');
    var msnry = new Masonry( container, {
//            gutter: "6px",
        columnWidth: ".grid-sizer",
        itemSelector: ".m-item"
        //isFitWidth: true,
    });
});