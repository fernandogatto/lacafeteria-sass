// Hamburger menu
(function () {
	$('.hamburger-wrapper').on('click', function() {
		$('.hamburger-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.hamburger-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})();