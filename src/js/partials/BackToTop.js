$('.back-to-top').fadeOut();
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.back-to-top').show();
    } else {
        $('.back-to-top').hide();
    }
});

// Click event to scroll to top
$('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});