$(document).ready(function(){
    //OPEN GALLERY OF THUMBNAILS BASED ON ICON CLICK
    $('.portfolioBox').click(function(){
        var galleryBoxId = $(this).data('value');
        $('#gb' + galleryBoxId).animate({
                    opacity: 1
            }, 'fast', function(){});
    });
});