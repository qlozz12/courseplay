/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'courseplay\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-triangle': '&#xe385;',
		'icon-authors2': '&#xe608;',
		'icon-minus': '&#xe609;',
		'icon-plus': '&#xe60a;',
		'icon-cross': '&#xe60b;',
		'icon-blocked': '&#xe60c;',
		'icon-cw': '&#xe60d;',
		'icon-arrow-left': '&#xe60e;',
		'icon-arrow-down': '&#xe60f;',
		'icon-arrow-up': '&#xe610;',
		'icon-uniE611': '&#xe611;',
		'icon-question': '&#xe612;',
		'icon-help2': '&#xe613;',
		'icon-faq': '&#xe600;',
		'icon-installation': '&#xe601;',
		'icon-changelog': '&#xe602;',
		'icon-manual': '&#xe603;',
		'icon-settings': '&#xe604;',
		'icon-authors': '&#xe61c;',
		'icon-cog': '&#xf013;',
		'icon-autorenew': '&#xe605;',
		'icon-info-outline': '&#xe606;',
		'icon-help': '&#xe607;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
