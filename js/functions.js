$(window).scroll(function(){
	
	//Shows how far we scrolled
	var wScroll = $(this).scrollTop();

	// Controls logo
	$(".h1").css({
		"transform" : "translate(0px, -"+ wScroll /12 +"%)"
	});
	// Controls Watch
	$(".watch-1").css({
		"transform" : "translate(0px, -"+ wScroll /28 +"%)"
	});
	
	$(".shape-1").css({
		"transform" : "translate(0px, -"+ wScroll /160 +"%)"
	});

	$(".shape-2").css({
		"transform" : "translate(0px, -"+ wScroll /20 +"%)"
	});
	
	$(".shape-3").css({
		"transform" : "translate(0px, -"+ wScroll /16 +"%)"
	});

	$(".shape-4").css({
		"transform" : "translate(0px, -"+ wScroll /80 +"%)"
	});

	$(".shape-5").css({
		"transform" : "translate(0px, -"+ wScroll /320 +"%)"
	});

	//Look at how far .cloths-pics is from the top of the DOM
	if(wScroll > $(".clothes-pics").offset().top - ($(window).height() / 1.2)) {
		// Every element inside .cloths-pics will run this funciton
		$(".clothes-pics figure").each(function(i) {
			setTimeout(function(){
				$(".clothes-pics figure").eq(i).addClass("is-showing");
			}, 150 * (i+1));
		});
	}

});





