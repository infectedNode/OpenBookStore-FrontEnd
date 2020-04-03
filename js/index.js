$(document).ready(function(){
    let APIURL = "http://localhost:2000/books";
    fetch(APIURL).then(result => result.json()).then(data => {
        data.books.forEach(book => {
            $('.books').append(`
                <div class="book" id="${book._id}">
                    <div class="cover">
                        <div class="block">
                            <img class="front" src="${book.imageLink}" alt="">
                            <img class="back" src="./images/bookBack.jpg" alt="">
                        </div>
                        <div class="likes">
                            <p class="heart"><i class="far fa-heart"></i></p>
                            <p class="count">10.2k</p>
                        </div>
                    </div>
                    <div class="content">
                        <p>${book.title}</p>
                        <p>Shivam Sharma</p>
                    </div>
                </div>
            `);
        });

        $('.books .book .cover').click(function(){
            let clickedID = $(this).parent().attr('id');
            $('.wall').addClass('active')
            $('.details').addClass('active')
            $('body').css("overflow-y", "hidden");
            fetch(APIURL + `/${clickedID}`).then(result => result.json()).then(data => {

                $('.details .left').append(`
                    <div class="block">
                        <img src="${data.book.imageLink}" alt="">
                    </div>
                    <p class="uploaded" >uploaded by: Shivam Sharma</p>
                `);

                $('.details .right').append(`
                    <p class="title">${data.book.title}</p>
                    <div class="likes">
                        <p class="heart"><i class="fas fa-heart"></i></p>
                        <p class="count">10.2k</p>
                    </div>
                    <p class="description">${data.book.description}</p>
                    <div class="download">
                        <div class="icon"><i class="fas fa-file-pdf"></i></div>
                        <div class="text">Download Now</div>
                    </div>                   
                `);
            });
        });
    });
});