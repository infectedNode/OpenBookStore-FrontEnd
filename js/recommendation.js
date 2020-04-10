$('.recommendation .topics .topic').click(function(){
    $('.recommendation .topics .topic').removeClass('active');
    $(this).addClass('active');

    $('.recommendation .topics .topic .result').removeClass('active');
    $(this).children().addClass('active');
});

let timeoutID = 0

$('.recommendation .topics .topic .result .wrapper').scroll(function() {
	let ele = $(this);
	function checkScroll() {
		let pos =  ele.scrollLeft();
		if(pos > 0) {
			ele.siblings(".left").addClass('show');
		} else {
			ele.siblings(".left").removeClass('show');
		}
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

// Scroll on click

//Right Click
$('.recommendation .topics .topic .result .right').click(function(){
    let scrollWidth = 245;
    let pos = $(this).siblings(".wrapper").scrollLeft();
    $(this).siblings(".wrapper").scrollLeft(pos + (scrollWidth*3));
});

//Left Click
$('.recommendation .topics .topic .result .left').click(function(){
    let scrollWidth = 245;
    let pos = $(this).siblings(".wrapper").scrollLeft();
    $(this).siblings(".wrapper").scrollLeft(pos - (scrollWidth*3));
});