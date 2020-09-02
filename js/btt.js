var $btnTop = $(".button-top1")
$(window).on("scroll", function() {
	if ($(window).scrollTop() >= 800){
		$btnTop.fadeIn();
	}else{
		$btnTop.fadeOut();
	}
});

$btnTop.on("click", function() {
	$("html,body").animate({scrollTop:0}, 900)
});