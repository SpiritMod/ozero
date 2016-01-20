$(document).ready(function(){
    //$(window).resize(function() {
    //    $(function(){
    //        var mgl2 = window.matchMedia('(min-width: 800px)');
    //
    //        if (mgl2.matches) {
    //            $('.news-list').unslick();
    //            $('#newest-publications-1').unslick();
    //            $('#newest-publications-2').unslick();
    //
    //        }
    //
    //    });
    //});
    $(function(){
        var mgls2 = window.matchMedia("(max-width: 767px)");
        var mgl = window.matchMedia("(max-width: 1024px)");
        if (mgl.matches) {
            $(".newest-publications .item.empty, .newest-publications .item.poster").remove()
        }
        if (mgls2.matches) {
            $(".news-list").slick({
                slide: '.item',
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 520,
                        settings: {
                            slide: '.item',
                            arrows: false,
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            });
            $("#newest-publications-1").slick({
                slide: '.slick-item',
                centerMode: true,
                centerPadding: '130px',
                arrows: false,
                dots: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 520,
                        settings: {
                            slide: '.slick-item',
                            centerMode: true,
                            centerPadding: '40px',
                            //customPaging: '20px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $("#newest-publications-2").slick({
                slide: '.slick-item',
                centerMode: true,
                centerPadding: '130px',
                arrows: false,
                dots: true,
                slidesToShow: 1,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 520,
                        settings: {
                            slide: '.slick-item',
                            centerMode: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
            $("#newest-publications-3").slick({
              slide: '.slick-item',
              centerMode: true,
              centerPadding: '130px',
              arrows: false,
              dots: true,
              slidesToShow: 1,
              adaptiveHeight: true,
              responsive: [
                {
                  breakpoint: 520,
                  settings: {
                    slide: '.slick-item',
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            });
            $("#newest-publications-4").slick({
              slide: '.slick-item',
              centerMode: true,
              centerPadding: '130px',
              arrows: false,
              dots: true,
              slidesToShow: 1,
              adaptiveHeight: true,
              responsive: [
                {
                  breakpoint: 520,
                  settings: {
                    slide: '.slick-item',
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                  }
                }
              ]
            });
            $(".blog-list").slick({
                slide: '.item',
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 520,
                        settings: {
                            slide: '.item',
                            arrows: false,
                            dots: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]

            });
        }
        //if (mgls2.matches) {
        //    $('.news-list').unslick();
        //    $('#newest-publications-1').unslick();
        //    $('#newest-publications-2').unslick();
        //
        //}
    });

});
$(window).load(function(){
    var container1 = document.querySelector('.masonry');
    var container2 = document.querySelector('.w-masonry');
    var container3 = document.querySelector('.s-masonry');
    var container4 = document.querySelector('.t-masonry');

    var msnry = new Masonry( container1, {
        columnWidth: ".grid-sizer",
        itemSelector: ".m-item"
    });

    var w_msnry = new Masonry( container2, {
        columnWidth: ".grid-sizer",
        itemSelector: ".m-item"
    });

    var s_msnry = new Masonry( container2, {
        columnWidth: ".grid-sizer",
        itemSelector: ".m-item"
    });

    var t_msnry = new Masonry( container2, {
        columnWidth: ".grid-sizer",
        itemSelector: ".m-item"
    });
});