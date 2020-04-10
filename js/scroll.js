$(window).on('scroll',function(){
	if($(window).scrollTop() > 400){
        $('.navbar').addClass('active');
        $('.navbar .search').addClass('active');
	}
	else{
		$('.navbar').removeClass('active');
		$('.navbar .search').removeClass('active');
	}
});

$('.recommendation .topics .topic .result .wrapper').scroll(function() {

	if($('.recommendation .topics .topic .result .wrapper').scrollLeft()%245 != 0) {
		let val = $('.recommendation .topics .topic .result .wrapper').scrollLeft();
		$('.recommendation .topics .topic .result .wrapper').scrollLeft(val - val%245);
	}

	// console.log($('.recommendation .topics .topic .result .wrapper').scrollLeft());
});