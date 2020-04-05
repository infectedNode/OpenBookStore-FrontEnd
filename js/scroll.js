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