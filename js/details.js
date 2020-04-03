// $('.books .book .cover').click(function(){
//     $('.wall').addClass('active')
//     $('.details').addClass('active')
//     $('body').css("overflow-y", "hidden");
// });

$('.details .close').click(function(){
    $('.wall').removeClass('active')
    $('.details').removeClass('active')
    $('body').css("overflow-y", "visible");
    $('.details .left').empty();
    $('.details .right').empty();
});

$('.wall').click(function(){
    $('.wall').removeClass('active')
    $('.details').removeClass('active')
    $('body').css("overflow-y", "visible");
    $('.details .left').empty();
    $('.details .right').empty();
});