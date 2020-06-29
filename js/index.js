function ani(claname, type) {
	if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
		$(claname).addClass(type);
	};
	$(window).scroll(function() {
		if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
			$(claname).addClass(type);
		};
	});

};

ani('#list .li','zoomInUp');