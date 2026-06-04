(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    // new WOW().init();


    // Fixed Navbar
    // $(window).scroll(function () {
    //     if ($(window).width() < 992) {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-white shadow');
    //         } else {
    //             $('.fixed-top').removeClass('bg-white shadow');
    //         }
    //     } else {
    //         if ($(this).scrollTop() > 45) {
    //             $('.fixed-top').addClass('bg-white shadow').css('top', -45);
    //         } else {
    //             $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
    //         }
    //     }
    // });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000, 'easeInOutExpo');
        return false;
    });

    // Add this function to fix animation issues
function fixContentVisibility() {
    // Ensure all content is visible
    document.querySelectorAll('.about-animation, .concept-animation, .partner-animation, .licence-animation').forEach(function(element) {
        element.style.opacity = '1';
        element.style.visibility = 'visible';
        element.style.transform = 'none';
    });
    
    // Fix any hidden content
    document.querySelectorAll('[style*="opacity: 0"], [style*="visibility: hidden"]').forEach(function(element) {
        if (element.classList.contains('about-animation') || 
            element.classList.contains('concept-animation') || 
            element.classList.contains('partner-animation') || 
            element.classList.contains('licence-animation')) {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
        }
    });
}

// Call on DOM ready
document.addEventListener('DOMContentLoaded', function() {
    fixContentVisibility();
    
    // Also fix after a short delay to catch any GSAP issues
    setTimeout(fixContentVisibility, 1000);
    
    // Fix on window resize
    window.addEventListener('resize', fixContentVisibility);
});

   


})(jQuery);






