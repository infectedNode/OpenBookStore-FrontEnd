// <i class="fas fa-heart"></i>
// <i class="far fa-heart"></i>

$('.books .book .cover .likes .heart').click(function(){
    let cur = $(this).html();
    if(cur === '<i class="fas fa-heart"></i>') {
        $(this).html('<i class="far fa-heart"></i>');
    } else {
        $(this).html('<i class="fas fa-heart"></i>'); 
    }
});
