/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconav\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-times': '&#xe600;',
		'icon-tick': '&#xe601;',
		'icon-plus': '&#xe602;',
		'icon-minus': '&#xe603;',
		'icon-equals': '&#xe604;',
		'icon-divide': '&#xe605;',
		'icon-chevron-right': '&#xe606;',
		'icon-chevron-left': '&#xe607;',
		'icon-arrow-right-thick': '&#xe608;',
		'icon-arrow-left-thick': '&#xe609;',
		'icon-th-small': '&#xe60a;',
		'icon-th-menu': '&#xe60b;',
		'icon-th-list': '&#xe60c;',
		'icon-th-large': '&#xe60d;',
		'icon-home': '&#xe60e;',
		'icon-arrow-forward': '&#xe60f;',
		'icon-arrow-back': '&#xe610;',
		'icon-rss': '&#xe611;',
		'icon-location': '&#xe612;',
		'icon-link': '&#xe613;',
		'icon-image': '&#xe614;',
		'icon-arrow-up-thick': '&#xe615;',
		'icon-arrow-down-thick': '&#xe616;',
		'icon-starburst': '&#xe617;',
		'icon-starburst-outline': '&#xe618;',
		'icon-star': '&#xe619;',
		'icon-flow-children': '&#xe61a;',
		'icon-export': '&#xe61b;',
		'icon-delete': '&#xe61c;',
		'icon-delete-outline': '&#xe61d;',
		'icon-cloud-storage': '&#xe61e;',
		'icon-wi-fi': '&#xe61f;',
		'icon-heart': '&#xe620;',
		'icon-flash': '&#xe621;',
		'icon-cancel': '&#xe622;',
		'icon-backspace': '&#xe623;',
		'icon-attachment': '&#xe624;',
		'icon-arrow-move': '&#xe625;',
		'icon-warning': '&#xe626;',
		'icon-user': '&#xe627;',
		'icon-radar': '&#xe628;',
		'icon-lock-open': '&#xe629;',
		'icon-lock-closed': '&#xe62a;',
		'icon-location-arrow': '&#xe62b;',
		'icon-info': '&#xe62c;',
		'icon-user-delete': '&#xe62d;',
		'icon-user-add': '&#xe62e;',
		'icon-media-pause': '&#xe62f;',
		'icon-group': '&#xe630;',
		'icon-chart-pie': '&#xe631;',
		'icon-chart-line': '&#xe632;',
		'icon-chart-bar': '&#xe633;',
		'icon-chart-area': '&#xe634;',
		'icon-video': '&#xe635;',
		'icon-point-of-interest': '&#xe636;',
		'icon-infinity': '&#xe637;',
		'icon-globe': '&#xe638;',
		'icon-eye': '&#xe639;',
		'icon-cog': '&#xe63a;',
		'icon-camera': '&#xe63b;',
		'icon-upload': '&#xe63c;',
		'icon-scissors': '&#xe63d;',
		'icon-refresh': '&#xe63e;',
		'icon-pin': '&#xe63f;',
		'icon-key': '&#xe640;',
		'icon-info-large': '&#xe641;',
		'icon-eject': '&#xe642;',
		'icon-download': '&#xe643;',
		'icon-zoom': '&#xe644;',
		'icon-zoom-out': '&#xe645;',
		'icon-zoom-in': '&#xe646;',
		'icon-sort-numerically': '&#xe647;',
		'icon-sort-alphabetically': '&#xe648;',
		'icon-input-checked': '&#xe649;',
		'icon-calender': '&#xe64a;',
		'icon-world': '&#xe64b;',
		'icon-notes': '&#xe64c;',
		'icon-code': '&#xe64d;',
		'icon-arrow-sync': '&#xe64e;',
		'icon-arrow-shuffle': '&#xe64f;',
		'icon-arrow-repeat': '&#xe650;',
		'icon-arrow-minimise': '&#xe651;',
		'icon-arrow-maximise': '&#xe652;',
		'icon-arrow-loop': '&#xe653;',
		'icon-anchor': '&#xe654;',
		'icon-spanner': '&#xe655;',
		'icon-puzzle': '&#xe656;',
		'icon-power': '&#xe657;',
		'icon-plane': '&#xe658;',
		'icon-pi': '&#xe659;',
		'icon-phone': '&#xe65a;',
		'icon-microphone': '&#xe65b;',
		'icon-media-rewind': '&#xe65c;',
		'icon-flag': '&#xe65d;',
		'icon-adjust-brightness': '&#xe65e;',
		'icon-waves': '&#xe65f;',
		'icon-social-twitter': '&#xe660;',
		'icon-social-facebook': '&#xe661;',
		'icon-social-dribbble': '&#xe662;',
		'icon-media-stop': '&#xe663;',
		'icon-media-record': '&#xe664;',
		'icon-media-play': '&#xe665;',
		'icon-media-fast-forward': '&#xe666;',
		'icon-media-eject': '&#xe667;',
		'icon-social-vimeo': '&#xe668;',
		'icon-social-tumbler': '&#xe669;',
		'icon-social-skype': '&#xe66a;',
		'icon-social-pinterest': '&#xe66b;',
		'icon-social-linkedin': '&#xe66c;',
		'icon-social-last-fm': '&#xe66d;',
		'icon-social-github': '&#xe66e;',
		'icon-social-flickr': '&#xe66f;',
		'icon-at': '&#xe670;',
		'icon-times-outline': '&#xe671;',
		'icon-plus-outline': '&#xe672;',
		'icon-minus-outline': '&#xe673;',
		'icon-tick-outline': '&#xe674;',
		'icon-th-large-outline': '&#xe675;',
		'icon-equals-outline': '&#xe676;',
		'icon-divide-outline': '&#xe677;',
		'icon-chevron-right-outline': '&#xe678;',
		'icon-chevron-left-outline': '&#xe679;',
		'icon-arrow-right-outline': '&#xe67a;',
		'icon-arrow-left-outline': '&#xe67b;',
		'icon-th-small-outline': '&#xe67c;',
		'icon-th-menu-outline': '&#xe67d;',
		'icon-th-list-outline': '&#xe67e;',
		'icon-news': '&#xe67f;',
		'icon-home-outline': '&#xe680;',
		'icon-arrow-up-outline': '&#xe681;',
		'icon-arrow-forward-outline': '&#xe682;',
		'icon-arrow-down-outline': '&#xe683;',
		'icon-arrow-back-outline': '&#xe684;',
		'icon-trash': '&#xe685;',
		'icon-rss-outline': '&#xe686;',
		'icon-message': '&#xe687;',
		'icon-location-outline': '&#xe688;',
		'icon-link-outline': '&#xe689;',
		'icon-image-outline': '&#xe68a;',
		'icon-export-outline': '&#xe68b;',
		'icon-cross': '&#xe68c;',
		'icon-wi-fi-outline': '&#xe68d;',
		'icon-star-outline': '&#xe68e;',
		'icon-media-pause-outline': '&#xe68f;',
		'icon-mail': '&#xe690;',
		'icon-heart-outline': '&#xe691;',
		'icon-flash-outline': '&#xe692;',
		'icon-cancel-outline': '&#xe693;',
		'icon-beaker': '&#xe694;',
		'icon-arrow-move-outline': '&#xe695;',
		'icon-watch': '&#xe696;',
		'icon-warning-outline': '&#xe697;',
		'icon-time': '&#xe698;',
		'icon-radar-outline': '&#xe699;',
		'icon-lock-open-outline': '&#xe69a;',
		'icon-location-arrow-outline': '&#xe69b;',
		'icon-info-outline': '&#xe69c;',
		'icon-backspace-outline': '&#xe69d;',
		'icon-attachment-outline': '&#xe69e;',
		'icon-user-outline': '&#xe69f;',
		'icon-user-delete-outline': '&#xe6a0;',
		'icon-user-add-outline': '&#xe6a1;',
		'icon-lock-closed-outline': '&#xe6a2;',
		'icon-group-outline': '&#xe6a3;',
		'icon-chart-pie-outline': '&#xe6a4;',
		'icon-chart-line-outline': '&#xe6a5;',
		'icon-chart-bar-outline': '&#xe6a6;',
		'icon-chart-area-outline': '&#xe6a7;',
		'icon-video-outline': '&#xe6a8;',
		'icon-point-of-interest-outline': '&#xe6a9;',
		'icon-map': '&#xe6aa;',
		'icon-key-outline': '&#xe6ab;',
		'icon-infinity-outline': '&#xe6ac;',
		'icon-globe-outline': '&#xe6ad;',
		'icon-eye-outline': '&#xe6ae;',
		'icon-cog-outline': '&#xe6af;',
		'icon-camera-outline': '&#xe6b0;',
		'icon-upload-outline': '&#xe6b1;',
		'icon-support': '&#xe6b2;',
		'icon-scissors-outline': '&#xe6b3;',
		'icon-refresh-outline': '&#xe6b4;',
		'icon-info-large-outline': '&#xe6b5;',
		'icon-eject-outline': '&#xe6b6;',
		'icon-download-outline': '&#xe6b7;',
		'icon-battery-mid': '&#xe6b8;',
		'icon-battery-low': '&#xe6b9;',
		'icon-battery-high': '&#xe6ba;',
		'icon-zoom-outline': '&#xe6bb;',
		'icon-zoom-out-outline': '&#xe6bc;',
		'icon-zoom-in-outline': '&#xe6bd;',
		'icon-tag': '&#xe6be;',
		'icon-tabs-outline': '&#xe6bf;',
		'icon-pin-outline': '&#xe6c0;',
		'icon-message-typing': '&#xe6c1;',
		'icon-directions': '&#xe6c2;',
		'icon-battery-full': '&#xe6c3;',
		'icon-battery-charge': '&#xe6c4;',
		'icon-pipette': '&#xe6c5;',
		'icon-pencil': '&#xe6c6;',
		'icon-folder': '&#xe6c7;',
		'icon-folder-delete': '&#xe6c8;',
		'icon-folder-add': '&#xe6c9;',
		'icon-edit': '&#xe6ca;',
		'icon-document': '&#xe6cb;',
		'icon-document-delete': '&#xe6cc;',
		'icon-document-add': '&#xe6cd;',
		'icon-brush': '&#xe6ce;',
		'icon-thumbs-up': '&#xe6cf;',
		'icon-thumbs-down': '&#xe6d0;',
		'icon-pen': '&#xe6d1;',
		'icon-sort-numerically-outline': '&#xe6d2;',
		'icon-sort-alphabetically-outline': '&#xe6d3;',
		'icon-social-last-fm-circular': '&#xe6d4;',
		'icon-social-github-circular': '&#xe6d5;',
		'icon-compass': '&#xe6d6;',
		'icon-bookmark': '&#xe6d7;',
		'icon-input-checked-outline': '&#xe6d8;',
		'icon-code-outline': '&#xe6d9;',
		'icon-calender-outline': '&#xe6da;',
		'icon-business-card': '&#xe6db;',
		'icon-arrow-up': '&#xe6dc;',
		'icon-arrow-sync-outline': '&#xe6dd;',
		'icon-arrow-right': '&#xe6de;',
		'icon-arrow-repeat-outline': '&#xe6df;',
		'icon-arrow-loop-outline': '&#xe6e0;',
		'icon-arrow-left': '&#xe6e1;',
		'icon-flow-switch': '&#xe6e2;',
		'icon-flow-parallel': '&#xe6e3;',
		'icon-flow-merge': '&#xe6e4;',
		'icon-document-text': '&#xe6e5;',
		'icon-clipboard': '&#xe6e6;',
		'icon-calculator': '&#xe6e7;',
		'icon-arrow-minimise-outline': '&#xe6e8;',
		'icon-arrow-maximise-outline': '&#xe6e9;',
		'icon-arrow-down': '&#xe6ea;',
		'icon-gift': '&#xe6eb;',
		'icon-film': '&#xe6ec;',
		'icon-database': '&#xe6ed;',
		'icon-bell': '&#xe6ee;',
		'icon-anchor-outline': '&#xe6ef;',
		'icon-adjust-contrast': '&#xe6f0;',
		'icon-world-outline': '&#xe6f1;',
		'icon-shopping-bag': '&#xe6f2;',
		'icon-power-outline': '&#xe6f3;',
		'icon-notes-outline': '&#xe6f4;',
		'icon-device-tablet': '&#xe6f5;',
		'icon-device-phone': '&#xe6f6;',
		'icon-device-laptop': '&#xe6f7;',
		'icon-device-desktop': '&#xe6f8;',
		'icon-briefcase': '&#xe6f9;',
		'icon-stopwatch': '&#xe6fa;',
		'icon-spanner-outline': '&#xe6fb;',
		'icon-puzzle-outline': '&#xe6fc;',
		'icon-printer': '&#xe6fd;',
		'icon-pi-outline': '&#xe6fe;',
		'icon-lightbulb': '&#xe6ff;',
		'icon-flag-outline': '&#xe700;',
		'icon-contacts': '&#xe701;',
		'icon-archive': '&#xe702;',
		'icon-weather-stormy': '&#xe703;',
		'icon-weather-shower': '&#xe704;',
		'icon-weather-partly-sunny': '&#xe705;',
		'icon-weather-downpour': '&#xe706;',
		'icon-weather-cloudy': '&#xe707;',
		'icon-plane-outline': '&#xe708;',
		'icon-phone-outline': '&#xe709;',
		'icon-microphone-outline': '&#xe70a;',
		'icon-weather-windy': '&#xe70b;',
		'icon-weather-windy-cloudy': '&#xe70c;',
		'icon-weather-sunny': '&#xe70d;',
		'icon-weather-snow': '&#xe70e;',
		'icon-weather-night': '&#xe70f;',
		'icon-media-stop-outline': '&#xe710;',
		'icon-media-rewind-outline': '&#xe711;',
		'icon-media-record-outline': '&#xe712;',
		'icon-media-play-outline': '&#xe713;',
		'icon-media-fast-forward-outline': '&#xe714;',
		'icon-media-eject-outline': '&#xe715;',
		'icon-wine': '&#xe716;',
		'icon-waves-outline': '&#xe717;',
		'icon-ticket': '&#xe718;',
		'icon-tags': '&#xe719;',
		'icon-plug': '&#xe71a;',
		'icon-headphones': '&#xe71b;',
		'icon-credit-card': '&#xe71c;',
		'icon-coffee': '&#xe71d;',
		'icon-book': '&#xe71e;',
		'icon-beer': '&#xe71f;',
		'icon-volume': '&#xe720;',
		'icon-volume-up': '&#xe721;',
		'icon-volume-mute': '&#xe722;',
		'icon-volume-down': '&#xe723;',
		'icon-social-vimeo-circular': '&#xe724;',
		'icon-social-twitter-circular': '&#xe725;',
		'icon-social-pinterest-circular': '&#xe726;',
		'icon-social-linkedin-circular': '&#xe727;',
		'icon-social-facebook-circular': '&#xe728;',
		'icon-social-dribbble-circular': '&#xe729;',
		'icon-tree': '&#xe72a;',
		'icon-thermometer': '&#xe72b;',
		'icon-social-tumbler-circular': '&#xe72c;',
		'icon-social-skype-outline': '&#xe72d;',
		'icon-social-flickr-circular': '&#xe72e;',
		'icon-social-at-circular': '&#xe72f;',
		'icon-shopping-cart': '&#xe730;',
		'icon-messages': '&#xe731;',
		'icon-leaf': '&#xe732;',
		'icon-feather': '&#xe733;',
		'icon-phone2': '&#xe734;',
		'icon-mobile': '&#xe735;',
		'icon-mouse': '&#xe736;',
		'icon-directions2': '&#xe737;',
		'icon-mail2': '&#xe738;',
		'icon-paperplane': '&#xe739;',
		'icon-pencil2': '&#xe73a;',
		'icon-feather2': '&#xe73b;',
		'icon-paperclip': '&#xe73c;',
		'icon-drawer': '&#xe73d;',
		'icon-reply': '&#xe73e;',
		'icon-reply-all': '&#xe73f;',
		'icon-forward': '&#xe740;',
		'icon-user2': '&#xe741;',
		'icon-users': '&#xe742;',
		'icon-user-add2': '&#xe743;',
		'icon-vcard': '&#xe744;',
		'icon-export2': '&#xe745;',
		'icon-location2': '&#xe746;',
		'icon-map2': '&#xe747;',
		'icon-compass2': '&#xe748;',
		'icon-location3': '&#xe749;',
		'icon-target': '&#xe74a;',
		'icon-share': '&#xe74b;',
		'icon-sharable': '&#xe74c;',
		'icon-heart2': '&#xe74d;',
		'icon-heart3': '&#xe74e;',
		'icon-star2': '&#xe74f;',
		'icon-star3': '&#xe750;',
		'icon-thumbsup': '&#xe751;',
		'icon-thumbsdown': '&#xe752;',
		'icon-chat': '&#xe753;',
		'icon-comment': '&#xe754;',
		'icon-quote': '&#xe755;',
		'icon-house': '&#xe756;',
		'icon-popup': '&#xe757;',
		'icon-search': '&#xe758;',
		'icon-flashlight': '&#xe759;',
		'icon-printer2': '&#xe75a;',
		'icon-bell2': '&#xe75b;',
		'icon-link2': '&#xe75c;',
		'icon-flag2': '&#xe75d;',
		'icon-cog2': '&#xe75e;',
		'icon-tools': '&#xe75f;',
		'icon-trophy': '&#xe760;',
		'icon-tag2': '&#xe761;',
		'icon-camera2': '&#xe762;',
		'icon-megaphone': '&#xe763;',
		'icon-moon': '&#xe764;',
		'icon-palette': '&#xe765;',
		'icon-leaf2': '&#xe766;',
		'icon-music': '&#xe767;',
		'icon-music2': '&#xe768;',
		'icon-new': '&#xe769;',
		'icon-graduation': '&#xe76a;',
		'icon-book2': '&#xe76b;',
		'icon-newspaper': '&#xe76c;',
		'icon-bag': '&#xe76d;',
		'icon-airplane': '&#xe76e;',
		'icon-lifebuoy': '&#xe76f;',
		'icon-eye2': '&#xe770;',
		'icon-clock': '&#xe771;',
		'icon-microphone2': '&#xe772;',
		'icon-calendar': '&#xe773;',
		'icon-bolt': '&#xe774;',
		'icon-thunder': '&#xe775;',
		'icon-droplet': '&#xe776;',
		'icon-cd': '&#xe777;',
		'icon-briefcase2': '&#xe778;',
		'icon-air': '&#xe779;',
		'icon-hourglass': '&#xe77a;',
		'icon-gauge': '&#xe77b;',
		'icon-language': '&#xe77c;',
		'icon-network': '&#xe77d;',
		'icon-key2': '&#xe77e;',
		'icon-battery': '&#xe77f;',
		'icon-bucket': '&#xe780;',
		'icon-magnet': '&#xe781;',
		'icon-drive': '&#xe782;',
		'icon-cup': '&#xe783;',
		'icon-rocket': '&#xe784;',
		'icon-brush2': '&#xe785;',
		'icon-suitcase': '&#xe786;',
		'icon-cone': '&#xe787;',
		'icon-earth': '&#xe788;',
		'icon-keyboard': '&#xe789;',
		'icon-browser': '&#xe78a;',
		'icon-publish': '&#xe78b;',
		'icon-progress-3': '&#xe78c;',
		'icon-progress-2': '&#xe78d;',
		'icon-brogress-1': '&#xe78e;',
		'icon-progress-0': '&#xe78f;',
		'icon-sun': '&#xe790;',
		'icon-sun2': '&#xe791;',
		'icon-adjust': '&#xe792;',
		'icon-code2': '&#xe793;',
		'icon-screen': '&#xe794;',
		'icon-infinity2': '&#xe795;',
		'icon-light-bulb': '&#xe796;',
		'icon-creditcard': '&#xe797;',
		'icon-database2': '&#xe798;',
		'icon-voicemail': '&#xe799;',
		'icon-clipboard2': '&#xe79a;',
		'icon-cart': '&#xe79b;',
		'icon-box': '&#xe79c;',
		'icon-ticket2': '&#xe79d;',
		'icon-rss2': '&#xe79e;',
		'icon-signal': '&#xe79f;',
		'icon-thermometer2': '&#xe7a0;',
		'icon-droplets': '&#xe7a1;',
		'icon-uniE7A2': '&#xe7a2;',
		'icon-statistics': '&#xe7a3;',
		'icon-pie': '&#xe7a4;',
		'icon-bars': '&#xe7a5;',
		'icon-graph': '&#xe7a6;',
		'icon-lock': '&#xe7a7;',
		'icon-lock-open2': '&#xe7a8;',
		'icon-logout': '&#xe7a9;',
		'icon-login': '&#xe7aa;',
		'icon-checkmark': '&#xe7ab;',
		'icon-cross2': '&#xe7ac;',
		'icon-minus2': '&#xe7ad;',
		'icon-plus2': '&#xe7ae;',
		'icon-cross3': '&#xe7af;',
		'icon-minus3': '&#xe7b0;',
		'icon-plus3': '&#xe7b1;',
		'icon-cross4': '&#xe7b2;',
		'icon-minus4': '&#xe7b3;',
		'icon-plus4': '&#xe7b4;',
		'icon-erase': '&#xe7b5;',
		'icon-blocked': '&#xe7b6;',
		'icon-info2': '&#xe7b7;',
		'icon-info3': '&#xe7b8;',
		'icon-question': '&#xe7b9;',
		'icon-help': '&#xe7ba;',
		'icon-warning2': '&#xe7bb;',
		'icon-cycle': '&#xe7bc;',
		'icon-cw': '&#xe7bd;',
		'icon-ccw': '&#xe7be;',
		'icon-shuffle': '&#xe7bf;',
		'icon-arrow': '&#xe7c0;',
		'icon-arrow2': '&#xe7c1;',
		'icon-retweet': '&#xe7c2;',
		'icon-loop': '&#xe7c3;',
		'icon-history': '&#xe7c4;',
		'icon-back': '&#xe7c5;',
		'icon-switch': '&#xe7c6;',
		'icon-list': '&#xe7c7;',
		'icon-add-to-list': '&#xe7c8;',
		'icon-layout': '&#xe7c9;',
		'icon-list2': '&#xe7ca;',
		'icon-text': '&#xe7cb;',
		'icon-text2': '&#xe7cc;',
		'icon-document2': '&#xe7cd;',
		'icon-docs': '&#xe7ce;',
		'icon-landscape': '&#xe7cf;',
		'icon-pictures': '&#xe7d0;',
		'icon-video2': '&#xe7d1;',
		'icon-music3': '&#xe7d2;',
		'icon-folder2': '&#xe7d3;',
		'icon-archive2': '&#xe7d4;',
		'icon-trash2': '&#xe7d5;',
		'icon-upload2': '&#xe7d6;',
		'icon-download2': '&#xe7d7;',
		'icon-disk': '&#xe7d8;',
		'icon-install': '&#xe7d9;',
		'icon-cloud': '&#xe7da;',
		'icon-upload3': '&#xe7db;',
		'icon-bookmark2': '&#xe7dc;',
		'icon-bookmarks': '&#xe7dd;',
		'icon-book3': '&#xe7de;',
		'icon-play': '&#xe7df;',
		'icon-pause': '&#xe7e0;',
		'icon-record': '&#xe7e1;',
		'icon-stop': '&#xe7e2;',
		'icon-next': '&#xe7e3;',
		'icon-previous': '&#xe7e4;',
		'icon-first': '&#xe7e5;',
		'icon-last': '&#xe7e6;',
		'icon-resize-enlarge': '&#xe7e7;',
		'icon-resize-shrink': '&#xe7e8;',
		'icon-volume2': '&#xe7e9;',
		'icon-sound': '&#xe7ea;',
		'icon-mute': '&#xe7eb;',
		'icon-flow-cascade': '&#xe7ec;',
		'icon-flow-branch': '&#xe7ed;',
		'icon-flow-tree': '&#xe7ee;',
		'icon-flow-line': '&#xe7ef;',
		'icon-flow-parallel2': '&#xe7f0;',
		'icon-arrow-left2': '&#xe7f1;',
		'icon-arrow-down2': '&#xe7f2;',
		'icon-arrow-up-upload': '&#xe7f3;',
		'icon-arrow-right2': '&#xe7f4;',
		'icon-arrow-left3': '&#xe7f5;',
		'icon-arrow-down3': '&#xe7f6;',
		'icon-arrow-up2': '&#xe7f7;',
		'icon-arrow-right3': '&#xe7f8;',
		'icon-arrow-left4': '&#xe7f9;',
		'icon-arrow-down4': '&#xe7fa;',
		'icon-arrow-up3': '&#xe7fb;',
		'icon-arrow-right4': '&#xe7fc;',
		'icon-arrow-left5': '&#xe7fd;',
		'icon-arrow-down5': '&#xe7fe;',
		'icon-arrow-up4': '&#xe7ff;',
		'icon-arrow-right5': '&#xe800;',
		'icon-arrow-left6': '&#xe801;',
		'icon-arrow-down6': '&#xe802;',
		'icon-arrow-up5': '&#xe803;',
		'icon-arrow-right6': '&#xe804;',
		'icon-arrow-left7': '&#xe805;',
		'icon-arrow-down7': '&#xe806;',
		'icon-arrow-up6': '&#xe807;',
		'icon-arrow-right7': '&#xe808;',
		'icon-arrow-left8': '&#xe809;',
		'icon-arrow-down8': '&#xe80a;',
		'icon-arrow-up7': '&#xe80b;',
		'icon-uniE80C': '&#xe80c;',
		'icon-arrow-left9': '&#xe80d;',
		'icon-arrow-down9': '&#xe80e;',
		'icon-arrow-up8': '&#xe80f;',
		'icon-arrow-right8': '&#xe810;',
		'icon-menu': '&#xe811;',
		'icon-ellipsis': '&#xe812;',
		'icon-dots': '&#xe813;',
		'icon-dot': '&#xe814;',
		'icon-cc': '&#xe815;',
		'icon-cc-by': '&#xe816;',
		'icon-cc-nc': '&#xe817;',
		'icon-cc-nc-eu': '&#xe818;',
		'icon-cc-nc-jp': '&#xe819;',
		'icon-cc-sa': '&#xe81a;',
		'icon-cc-nd': '&#xe81b;',
		'icon-cc-pd': '&#xe81c;',
		'icon-cc-zero': '&#xe81d;',
		'icon-cc-share': '&#xe81e;',
		'icon-cc-share2': '&#xe81f;',
		'icon-danielbruce': '&#xe820;',
		'icon-danielbruce2': '&#xe821;',
		'icon-github': '&#xe822;',
		'icon-github2': '&#xe823;',
		'icon-flickr': '&#xe824;',
		'icon-flickr2': '&#xe825;',
		'icon-vimeo': '&#xe826;',
		'icon-vimeo2': '&#xe827;',
		'icon-twitter': '&#xe828;',
		'icon-twitter2': '&#xe829;',
		'icon-facebook': '&#xe82a;',
		'icon-facebook2': '&#xe82b;',
		'icon-facebook3': '&#xe82c;',
		'icon-googleplus': '&#xe82d;',
		'icon-googleplus2': '&#xe82e;',
		'icon-pinterest': '&#xe82f;',
		'icon-pinterest2': '&#xe830;',
		'icon-tumblr': '&#xe831;',
		'icon-tumblr2': '&#xe832;',
		'icon-linkedin': '&#xe833;',
		'icon-linkedin2': '&#xe834;',
		'icon-dribbble': '&#xe835;',
		'icon-dribbble2': '&#xe836;',
		'icon-stumbleupon': '&#xe837;',
		'icon-stumbleupon2': '&#xe838;',
		'icon-lastfm': '&#xe839;',
		'icon-lastfm2': '&#xe83a;',
		'icon-rdio': '&#xe83b;',
		'icon-rdio2': '&#xe83c;',
		'icon-spotify': '&#xe83d;',
		'icon-spotify2': '&#xe83e;',
		'icon-qq': '&#xe83f;',
		'icon-instagram': '&#xe840;',
		'icon-dropbox': '&#xe841;',
		'icon-evernote': '&#xe842;',
		'icon-flattr': '&#xe843;',
		'icon-skype': '&#xe844;',
		'icon-skype2': '&#xe845;',
		'icon-renren': '&#xe846;',
		'icon-sina-weibo': '&#xe847;',
		'icon-paypal': '&#xe848;',
		'icon-picasa': '&#xe849;',
		'icon-soundcloud': '&#xe84a;',
		'icon-mixi': '&#xe84b;',
		'icon-behance': '&#xe84c;',
		'icon-circles': '&#xe84d;',
		'icon-vk': '&#xe84e;',
		'icon-smashing': '&#xe84f;',
		'icon-themebeasts': '&#xe850;',
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
