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


//E-mail Ajax Send
$("form").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        alert("Thank you!");
        setTimeout(function() {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});