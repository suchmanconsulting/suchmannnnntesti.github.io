var height = $('#header').height();

$(window).scroll(function() {
	if($(this).scrolltop() > height){
		$('.navbar').addClass('fixed');
	}else{
		$('navbar').removeClass("fixed");
	}});