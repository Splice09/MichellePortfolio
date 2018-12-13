$(document).ready(function(){
    var photoUrls = [
        '/public/photos/Portfolio/1.gif'
        ,'/public/photos/Portfolio/2.gif'
        ,'/public/photos/Portfolio/4.gif'
        ,'/public/photos/Portfolio/5.gif'
        ,'/public/photos/Portfolio/6.gif'
        ,'/public/photos/Portfolio/7.gif'
        ,'/public/photos/Portfolio/8.gif'
        ,'/public/photos/Portfolio/9.gif'
        ,'/public/photos/Portfolio/10.gif'
        ,'/public/photos/Portfolio/11.gif'
        ,'/public/photos/Portfolio/12.gif'
        ,'/public/photos/Portfolio/13.gif'
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
        $('.photoCredit').css({opacity:0});
    });
    
    //CLEAR PHOTO SRC URL AND HIDE THE FRAME
    $('.photoContainer').click(function(){
        $('.photoCredit').css({opacity:1});
        $('.photoContainer').fadeOut('fast', function(){
             $('.image').attr('src', tinyGif);               
        });
    });
});