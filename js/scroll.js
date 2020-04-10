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

let timeoutID = 0

$('.recommendation .topics .topic .result .wrapper').scroll(function() {
	let ele = $(this);
	function checkScroll() {
		let pos =  ele.scrollLeft();
		console.log(pos);
		let scrollWidth = 245;
		if(pos%scrollWidth != 0) {
			if(pos%scrollWidth < scrollWidth/2) {
				ele.scrollLeft(pos - pos%scrollWidth);
			} else {
				ele.scrollLeft(pos + (scrollWidth - pos%scrollWidth));
			}
		}
	}
	clearTimeout(timeoutID);
	timeoutID = setTimeout(checkScroll, 100);
});