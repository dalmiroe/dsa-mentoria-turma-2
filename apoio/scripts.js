
$(function() {
    //desliza o menu
    var $doc = $('html, body');
    $('.vaiLink a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100
    }, 500);
    return false;
    });    
});    



