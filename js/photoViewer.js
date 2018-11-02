$(document).ready(function(){
    var photoUrls = [
        'https://i.imgur.com/jjt13WD.jpg'
        ,'https://i.imgur.com/O4bkw5q.jpg'
        ,'https://i.imgur.com/Ur03C5l.jpg'
        ,'https://i.imgur.com/E7zVb9o.jpg'
        ,'https://i.imgur.com/rAScQtY.jpg'
        ,'https://i.imgur.com/XHisZYy.jpg'
        ,'https://i.imgur.com/cwgwtmV.jpg'
        ,'https://i.imgur.com/PJ3Upzg.jpg'
        ,'https://i.imgur.com/Xlxvo1v.jpg'
        ,'https://i.imgur.com/LH4AZew.jpg'
        ,'https://i.imgur.com/9O6fLlH.jpg'
        ,'https://i.imgur.com/tdSUQ8c.jpg'
        ,'https://i.imgur.com/J9BJ04x.jpg'
        ,'https://i.imgur.com/rTObFzX.png'
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