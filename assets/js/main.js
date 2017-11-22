function whenUsingWPNavMenus() {
	$('.navbar-collapse>ul:first-child').addClass('navbar-nav -sanspro-light -stretch-container');
	$('span.caret').hide();
}
whenUsingWPNavMenus();

function useCarousel() {
	var sCarousel = $('.carousel');
		sCarousel.carousel({ interval: 3000 });
		sCarousel.carousel('cycle');
		$('.-stretch-container').append('<span class="-stretch"></span>');
}
useCarousel();

