$(document).ready(function(){
    var photoUrls = [
         '/public/photos/Portfolio/img1.gif'
        ,'/public/photos/Portfolio/img2.gif'
        ,'/public/photos/Portfolio/img4.gif'
        ,'/public/photos/Portfolio/img5.gif'
        ,'/public/photos/Portfolio/img6.gif'
        ,'/public/photos/Portfolio/img7.gif'
        ,'/public/photos/Portfolio/img8.gif'
        ,'/public/photos/Portfolio/img9.gif'
        ,'/public/photos/Portfolio/img10.gif'
        ,'/public/photos/Portfolio/img11.gif'
        ,'/public/photos/Portfolio/img12.gif'
        ,'/public/photos/Portfolio/img13.gif'
    ]
    var tinyGif = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    
    //LOAD PHOTO URL BASED ON THUMBNAIL CLICK
    $('.thumbnail').click(function(){
        var thumbnailValue = $(this).data('value');
        $('.photoContainer').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
            }, 'fast', function(){
                $('.image').attr('src', photoUrls[thumbnailValue]);
        });
    });
    
    //CLEAR PHOTO SRC URL AND HIDE THE FRAME
    $('.photoContainer').click(function(){
        $('.photoCredit').css({opacity:1});
        $('.photoContainer').fadeOut('fast', function(){
             $('.image').attr('src', tinyGif);               
        });
    });
});