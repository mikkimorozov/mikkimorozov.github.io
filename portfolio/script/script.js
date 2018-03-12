$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -60
        }, 1000);
    }
});

$('.container a').on('click', function(){ 
        if($('.navbar-toggler').css('display') !='none'){
            $(".navbar-toggler").trigger( "click" );
        }
 });
