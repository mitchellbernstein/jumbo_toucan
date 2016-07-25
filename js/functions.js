$(window).scroll(function(){
	
	//Shows how far we scrolled
	var wScroll = $(this).scrollTop();

	// Controls logo
	$(".h1").css({
		"transform" : "translate(0px, -"+ wScroll /12 +"%)"
	});
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

	// $("#mce-EMAIL").click(function(){
	// 	$("#mc-embedded-subscribe").css({
	// 		"background-color" : "#FFFFFF"
	// 	});
	// });

	// (function(){
	// 	var burger = document.querySelector('.burger-container'),
	// 		header = document.querySelector('.header');
	//  	burger.onclick = function() {
	//       header.classList.toggle('menu-opened');
	//  	};
	// }());


});





