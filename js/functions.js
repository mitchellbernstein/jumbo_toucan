$(window).scroll(function(){
	
	//Shows how far we scrolled
	var wScroll = $(this).scrollTop();

	// Controls logo
	$(".h1").css({
		"transform" : "translate(0px, -"+ wScroll /12 +"%)"
	});
	// Controls Watch
	$(".watch-1").css({
		"transform" : "translate(0px, -"+ wScroll /8 +"%)"
	});
	// Controls Square shape
	$(".shape-1").css({
		"transform" : "translate(0px, -"+ wScroll /20 +"%)"
	});
	// Controls cicle shape
	$(".shape-2").css({
		"transform" : "translate(0px, -"+ wScroll /160 +"%)"
	});

});





