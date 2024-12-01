jQuery(document).ready(function() {

	/*------------------------ [Testimonial Slider] ------------------------*/

	var owl = $('.sal-testimonial-carousel');
	owl.owlCarousel({
		autoplay: true,
		items: 1,
		nav: false,
		loop: true,
		margin: 0,
		dots:false,
		autoplayHoverPause: true,
		smartSpeed: 400,
		autoplay: 4000,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			768:{
				items:2
			},
			800:{
				items:2
			},
			1024:{
				items:2
			}
		}
	});

	/************************* Feature Slider **************************/

	$('.salva-inter-list-wrap').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		button: false,
		arrows: false,
		cssEase: 'linear',
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				arrows: false,
				slidesToShow: 5
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		}
		]

	});

});