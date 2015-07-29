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

});