(function($) {
	
	"use strict";
	
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

/* ==========================================================================
   When document is loaded, do
   ========================================================================== */
	
	$(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

(function($) {
    /*------------------------------------------
        = Products SLIDER
    -------------------------------------------*/
    if ($(".project-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            vertical: true,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            verticalSwiping: true,
            responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,
                    vertical: false,
                    infinite: true
                  }
                },

                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 3,
                    vertical: false,
                    infinite: true
                  }
                }

            ]

        });
    }
})(window.jQuery);
