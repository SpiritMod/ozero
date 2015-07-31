// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document)
    .on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'hidden');
        $('.page').addClass('move-left');
        $('#b-header').addClass('move-left');
    })
    .on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
        $('html').css('overflow', 'auto');
        $('.page').removeClass('move-left');
        $('#b-header').removeClass('move-left');
    });

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
       alert('111');
    });

    (function($){
        $(window).load(function(){
            $('#drop-menu-container').mCustomScrollbar({
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