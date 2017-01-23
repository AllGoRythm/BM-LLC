// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 54)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#mainNav',
        offset: 55
    });

    // Closes the Responsive Menu on Menu Item Click
    $('#navbarResponsive>ul>li>a').click(function() {
        $('#navbarResponsive').collapse('hide');
    });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            //$("#brand").attr("src", "img/logos/pinw64.png").css("height", "40px");
            $('svg').attr('fill', 'white').css("height", "40px");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            //$("#brand").attr("src", "img/logos/pin64.png").css("height", "64px");
            $('svg').attr('fill', 'black').css("height", "64px");
        }
    });

})(jQuery); // End of use strict
