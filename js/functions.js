$(window).scroll(function(){
	
	//Shows how far we scrolled
	var wScroll = $(this).scrollTop();

	// Controls logo
	$(".h1").css({
		"transform" : "translate(0px, -"+ wScroll /12 +"%)"
	});
	// Controls Watch
	$(".watch-1").css({
		"transform" : "translate(0px, -"+ wScroll /20 +"%)"
	});
	// Controls Square shape
	$(".shape-1").css({
		"transform" : "translate(0px, -"+ wScroll /50 +"%)"
	});
	// Controls cicle shape
	$(".shape-2").css({
		"transform" : "translate(0px, -"+ wScroll /40 +"%)"
	});
	// Controls Square shape
	$(".shape-3").css({
		"transform" : "translate(0px, -"+ wScroll /30 +"%)"
	});
	// Controls cicle shape
	$(".shape-4").css({
		"transform" : "translate(0px, -"+ wScroll /50 +"%)"
	});
	// Controls cicle shape
	$(".shape-5").css({
		"transform" : "translate(0px, -"+ wScroll /80 +"%)"
	});

});





