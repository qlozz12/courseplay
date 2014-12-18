;(function ($) { $(document).ready(function () {
$('body').removeClass('no-js').addClass('js');

$('#driveModesNav').addClass('has-sub');
CP = {};

CP.manualNavFixed = $('#manualNav').clone().removeClass('default').appendTo('#manualTabs').addClass('scrolling').hide();
CP.manualNav = $('#manualNav.default');

CP.manualNavs = $('#manualNav.default, #manualNav.scrolling');

//set li levels
CP.manualNavs.find('> ul > li').addClass('level_1');
CP.manualNavs.find('> ul > li > ul > li').addClass('level_2');

CP.manualNavLinks = CP.manualNavs.find('a');

CP.animationTime = 250;
CP.manualSections = $('.manualSection').hide();

$('#manualNav a, a.internalTab').on('click', function(evt) {
	evt.preventDefault();
	var target = $(this).attr('href');
	CP.manualSections.hide();

	if (target.substr(1, 9) == 'driveMode') {
		$('#driveModes').show();
	} else {
		$(target).show();
	};
	scrollTo(target, true);

	if ($(this).hasClass('internalTab') && (target.substr(1, 9) !== "driveMode" || target == "#driveModes")) {
		console.log('bam')
		scrollTo('#manualNav');
	};

	//nav: active item
	CP.activeManualItem = target;
	CP.manualNavLinks.removeClass('active');
	CP.manualNavs.find('li.level_1, li.level_2').removeClass('active');

	var curNavLink = CP.manualNavs.find('a[href="' + CP.activeManualItem + '"]');
	var curNavLi = curNavLink.parents('li.level_1, li.level_2');

	curNavLink.addClass('active');
	curNavLi.addClass('active');
});

function scrollTo(targetId, margin) {
	var extraMargin = margin ? CP.manualNavFixed.height() * 1.2 : 0;
	var scrollTop = $(targetId).offset().top - extraMargin;
	console.log('extraMargin=', extraMargin, 'scrollTop=', scrollTop);
	$('html, body').animate({
		scrollTop: scrollTop
	}, CP.animationTime);
} //END scrollTo()



//scroll: manual nav fixed
$(window).on('scroll', function(){
	var pos = CP.manualNav.offset();
	
	if ( $(this).scrollTop() > pos.top ) {
		CP.manualNavFixed.show();
	} else if ( $(this).scrollTop() <= pos.top ) {
		CP.manualNavFixed.hide();
	};
});

}); })(jQuery); //END document.ready
