$(document).ready(function(){
    //var photoUrls;
    // var portfolioPhotoUrls = [
    //      '/public/photos/Portfolio/img1.gif'
    //     ,'/public/photos/Portfolio/img2.gif'
    //     ,'/public/photos/Portfolio/img4.gif'
    //     ,'/public/photos/Portfolio/img5.gif'
    //     ,'/public/photos/Portfolio/img6.gif'
    //     ,'/public/photos/Portfolio/img7.gif'
    //     ,'/public/photos/Portfolio/img8.gif'
    //     ,'/public/photos/Portfolio/img9.gif'
    //     ,'/public/photos/Portfolio/img10.gif'
    //     ,'/public/photos/Portfolio/img11.gif'
    //     ,'/public/photos/Portfolio/img12.gif'
    //     ,'/public/photos/Portfolio/img13.gif'
    // ]
    // var elementsPhotoUrls = [
    //      '/public/photos/ElementsOfArt/img1.gif'
    //     ,'/public/photos/ElementsOfArt/img2.gif'
    //     ,'/public/photos/ElementsOfArt/img3.gif'
    //     ,'/public/photos/ElementsOfArt/img4.gif'
    //     ,'/public/photos/ElementsOfArt/img5.gif'
    //     ,'/public/photos/ElementsOfArt/img6.gif'
    //     ,'/public/photos/ElementsOfArt/img7.gif'
    // ];
    var tinyGif = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    
    //LOAD PHOTO URL BASED ON THUMBNAIL CLICK
    $('.thumbnail').click(function(){
        var identifierValue = $(this).data('identifier');
        var photoUrlValue = $(this).data('photo-url');
        // switch(identifierValue) {
        //     case 0:
        //         photoUrls = portfolioPhotoUrls;
        //         break;
        //     case 1:
        //         photoUrls = elementsPhotoUrls;
        //     default:
        //         break;
        // }
        var thumbnailValue = $(this).data('value');
        
        //Comparison logic for proper display resolution of panorama 
        if(identifierValue == 1 && thumbnailValue == 6){
            $('.image').css({height:'50vh'});
        }
        // else{
        //     $('.image').css({height:'90vh'});
        // }
        
        $('.photoContainer').css({opacity: 0, display: 'flex'}).animate({
                    opacity: 1
            }, 'fast', function(){
                $('.image').attr('src', photoUrlValue);
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