$('.recommendation .topics .topic').click(function(){
    $('.recommendation .topics .topic').removeClass('active');
    $(this).addClass('active');

    $('.recommendation .topics .topic .result').removeClass('active');
    $(this).children().addClass('active');
});