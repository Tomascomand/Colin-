
// Home Page 'Classes' carousels

jQuery(document).ready(function($) {
    $('.fcp-home-classes__carousel--carousel-1').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        speed: 4000,
        centerMode: true,
        centerPadding: '42px',
        variableWidth: true,
        pauseOnHover:false
    });
});

jQuery(document).ready(function($) {
    $('.fcp-home-classes__carousel--carousel-2').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        speed: 4200,
        centerMode: true,
        centerPadding: '42px',
        variableWidth: true,
        pauseOnHover:false
    });
});

jQuery(document).ready(function($) {
    $('.fcp-home-classes__carousel--carousel-3').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        speed: 4400,
        centerMode: true,
        centerPadding: '42px',
        variableWidth: true,
        pauseOnHover:false
    });
});


// Temporaily Closed Gym Form Toggle
jQuery(document).ready(function($) {
    jQuery('.single-gym-post__temp-closed-form-button').click(function(e) {
        jQuery('.single-gym-post__temp-closed-form-form-wrapper').slideToggle();
    });
});


// Single Gym Sliders

jQuery(document).ready(function($) {
    $('.single-gym-post__mobile-slider').slick({
        fade: true,
        arrows: true,
		prevArrow: '<span class="single-gym-post__mobile-slider-arrow single-gym-post__mobile-slider-arrow--prev"></span>',
		nextArrow: '<span class="single-gym-post__mobile-slider-arrow single-gym-post__mobile-slider-arrow--next"></span>',
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
    });
});

jQuery(document).ready(function($) {
    $('.single-gym-post__slider-main').slick({
        fade: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
        asNavFor: '.single-gym-post__slider-carousel'
    });
});

jQuery(document).ready(function($) {
    $('.single-gym-post__slider-carousel').slick({
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 200,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        pauseOnHover: false,
        asNavFor: '.single-gym-post__slider-main',
        focusOnSelect: true
    });
});

jQuery(document).ready(function($) {
    $('.single-gym-post-prelaunch__slider-main').slick({
        fade: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
        asNavFor: '.single-gym-post-prelaunch__slider-carousel'
    });
});

jQuery(document).ready(function($) {
    $('.single-gym-post-prelaunch__slider-carousel').slick({
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 200,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        pauseOnHover: false,
        asNavFor: '.single-gym-post-prelaunch__slider-main',
        focusOnSelect: true
    });
});


// Single Student Gym Slider

jQuery(document).ready(function($) {
    $('.single-student-gym-post__slider-main').slick({
        fade: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 1000,
        pauseOnHover: false,
        asNavFor: '.single-student-gym-post__slider-carousel'
    });
});

jQuery(document).ready(function($) {
    $('.single-student-gym-post__slider-carousel').slick({
        arrows: false,
        dots: false,
        autoplaySpeed: 5000,
        autoplay: true,
        speed: 200,
        infinite: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        pauseOnHover: false,
        asNavFor: '.single-student-gym-post__slider-main',
        focusOnSelect: true
    });
});

// Matchheight
jQuery(document).ready(function($) {
    $('.fcp-home-cta-form__matchheight').matchHeight();
    $('.single-gym-post__matchheight').matchHeight();
    $('.single-student-gym-post__matchheight').matchHeight();
    $('.single-gym-post-prelaunch__matchheight').matchHeight();
    $('.single-class-post__matchheight').matchHeight();
    $('.news-archive__article-title').matchHeight();
    $('.news-archive__article-date').matchHeight();
    $('.news-archive__article-excerpt').matchHeight();
    $('.news-archive__article-content').matchHeight();
    $('.fcp-feature-links__matchheight').matchHeight();
    $('.fcp-classes__links-mobile-class-wrapper').matchHeight();
    $('.single-gym-post__fee-wrapper').matchHeight();
    $('.single-gym-post__fees-bullet-points').matchHeight();
    $('.single-gym-post__fees-note').matchHeight();
	$('.single-student-gym-post__fees-bullet-points').matchHeight();
	
});

jQuery(document).bind('gform_post_render', function(){
    jQuery('.fcp-home-cta-form__matchheight').matchHeight();
});


// Mobile menu functionality
jQuery(document).ready(function(){
	jQuery('.header__mobile-menu-trigger').click(function() {
		jQuery(this).toggleClass('header__mobile-menu-trigger--active');
		jQuery('.mobile-menu-shader').toggleClass('mobile-menu-shader--active');
		jQuery('.mobile-menu').toggleClass('mobile-menu--active');
	});

});


// Gym Locator
jQuery(document).ready(function($) {
    jQuery('.gym-locator__gyms-toggle').click(function(e) {
        jQuery(this).siblings('.gym-locator__gyms-list').slideToggle();
        jQuery(this).closest('.gym-locator__gyms').toggleClass('gym-locator__gyms--active');
    });
    jQuery('.gym-locator__gyms-title').click(function(e) {
        jQuery(this).siblings('.gym-locator__gyms-list').slideToggle();
        jQuery(this).closest('.gym-locator__gyms').toggleClass('gym-locator__gyms--active');
    });
});

// Cities Locator
jQuery(document).ready(function($) {
    jQuery('.city-locator__cities-toggle').click(function(e) {
        jQuery(this).siblings('.city-locator__cities-list').slideToggle();
        jQuery(this).closest('.city-locator__cities').toggleClass('city-locator__cities--active');
    });
    jQuery('.city-locator__cities-title').click(function(e) {
        jQuery(this).siblings('.city-locator__cities-list').slideToggle();
        jQuery(this).closest('.city-locator__cities').toggleClass('city-locator__cities--active');
    });
});

// Gym Gallery
jQuery(document).ready(function($) {
    jQuery('.single-gym-post__slider-thumbnail').click(function(e) {
        var full_image_url = $(this).attr("data-full-image-url");
        jQuery('.single-gym-post__image-pane').css("background-image", "url(" + full_image_url + ")");
    });
});


// Mobile Gym Info Toggle - Map Page
jQuery(document).ready(function($) {
    jQuery('.gym-locator-single__mobile-gym-info-toggle').click(function(e) {
        jQuery(this).siblings('.gym-locator-single__mobile-gym-info-content').slideToggle();
        jQuery(this).closest('.gym-locator-single__mobile-gym-info-block').toggleClass('gym-locator-single__mobile-gym-info-block--active');
    });
});


// Mobile Gym Info Toggle - Gym Single Post
jQuery(document).ready(function($) {
    jQuery('.single-gym-post__fees-bullet-point-panel-toggle').click(function(e) {
        jQuery(this).toggleClass('single-gym-post__fees-bullet-point-panel-toggle--active');
        jQuery(this).siblings('.single-gym-post__fees-bullet-point-panel-wrapper').toggleClass('single-gym-post__fees-bullet-point-panel-wrapper--active');
    });
});


// Feature Link Panels
jQuery(document).ready(function($) {
    jQuery('.fcp-feature-links__mobile-toggle').click(function(e) {
        jQuery(this).siblings('.fcp-feature-links__info').toggleClass('fcp-feature-links__info--active');
        jQuery(this).siblings('.fcp-feature-links__link').toggleClass('fcp-feature-links__link--active');
        jQuery(this).toggleClass('fcp-feature-links__mobile-toggle--active');
    });
});


// Scroll To's
jQuery(document).ready(function(){
	jQuery('.single-gym-post-prelaunch__hero-link a, .single-gym-post-prelaunch__fees-link a, .single-gym-post-prelaunch__details-link a').click(function() {
        jQuery([document.documentElement, document.body]).animate({
            scrollTop: jQuery(".fc-form").offset().top - 130
        }, 500);
    });
});


// Cookie Bar

jQuery(document).ready(function($) {

	if(Cookies.get('cookie_policy') != 'seen') {
		var $cookiebar = jQuery('.cookiebar'),
			$cookie_height = $cookiebar.height(),
			$cookie_init_height = 'auto';

		$cookiebar.height($cookie_init_height);

		$cookiebar.slideDown(850);

		jQuery('.cookiebar__accept').click(function(e){

			e.preventDefault();

			Cookies.set( 'cookie_policy' , 'seen', {
			   expires: 700,
			   domain: "jdgyms.co.uk",
			   path: "/",
			   secure: false
			});

			$cookiebar.slideUp(475);

		});

		jQuery('.cookiebar__close').click(function(e){
			$cookiebar.slideUp(475);
		});
	};
});