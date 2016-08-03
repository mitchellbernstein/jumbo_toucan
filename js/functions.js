$(window).scroll(function(){
	
	//Shows how far we scrolled
	var wScroll = $(this).scrollTop();

	// Controls logo
	$(".h1").css({
		"transform" : "translate(0px, -"+ wScroll /12 +"%)"
	});
	$(".watchEN").css({
		"transform" : "translate(0px, -"+ wScroll /28 +"%)"
	});

	$(".watchSP").css({
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
});

$('#mce-EMAIL').keyup(function() {
	if (this.value.length > 0) {
		$('#mc-embedded-subscribe').addClass('enabled');
	} else {
		$('#mc-embedded-subscribe').removeClass('enabled');
		$('div.mce_inline_error').hide();
	}
});

$('#mc-embedded-subscribe').click(function() { 
	this.classList.remove('enabled');
});




