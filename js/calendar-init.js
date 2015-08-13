/**
 * Created by spirit on 11.08.15.
 */

$(function() {
    if ($(window).width() <= 767) {
        // is mobile device
        $('.main-content.page-news + .right-sidebar .block-calendar').remove();
    }
    if ($(window).width() >= 768) {
        // is mobile device
        $('.main-content.page-news .content .block-calendar').remove();
    }
    var transEndEventNames = {
            'WebkitTransition' : 'webkitTransitionEnd',
            'MozTransition' : 'transitionend',
            'OTransition' : 'oTransitionEnd',
            'msTransition' : 'MSTransitionEnd',
            'transition' : 'transitionend'
        },
        transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
        $wrapper = $( '#custom-inner' ),
        $calendar = $( '#calendar' ),
        cal = $calendar.calendario( {
            onDayClick : function( $el, $contentEl, dateProperties ) {

                if( $contentEl.length > 0 ) {
                    showEvents( $contentEl, dateProperties );
                }
            },
            caldata : codropsEvents,
            displayWeekAbbr : true
        } ),
        $month = $( '#custom-month' ).html( cal.getMonthName() ),
        $year = $( '#custom-year' ).html( cal.getYear() );
        $('#custom-inner .month-img img').attr('src','img/calendar/'+ cal.getMonth() +'.jpg');

    $( '#custom-next' ).on( 'click', function() {
        cal.gotoNextMonth( updateMonthYear );
        //$('#custom-inner .month-img img').attr('src','img/calendar/'+ cal.getMonth() +'.jpg');
    } );

    $( '#custom-prev' ).on( 'click', function() {
        cal.gotoPreviousMonth( updateMonthYear );
        //$('#custom-inner .month-img img').attr('src','img/calendar/'+ cal.getMonth() +'.jpg');
    } );

    function updateMonthYear() {
        $month.html( cal.getMonthName() );
        $year.html( cal.getYear() );
        $('#custom-inner .month-img img').attr('src','img/calendar/'+ cal.getMonth() +'.jpg');
    }

    // just an example..
    function showEvents( $contentEl, dateProperties ) {

        hideEvents();

        var $events = $( '<div id="custom-content-reveal" class="custom-content-reveal"><h4>События ' + dateProperties.monthname + ' ' + dateProperties.day + ', ' + dateProperties.year + '</h4></div>' ),
            $close = $( '<span class="custom-content-close"><i class="fa fa-times-circle"></i></span>' ).on( 'click', hideEvents );

        $events.append( $contentEl.html() , $close ).insertAfter( $wrapper );

        setTimeout( function() {
            $events.css( 'top', '0%' );
        }, 25 );

    }
    function hideEvents() {

        var $events = $( '#custom-content-reveal' );
        if( $events.length > 0 ) {

            $events.css( 'top', '100%' );
            Modernizr.csstransitions ? $events.on( transEndEventName, function() { $( this ).remove(); } ) : $events.remove();

        }

    }

});
