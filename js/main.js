// Requires JQuery

var previousScrollPos = window.scrollY;
$(window).scroll(function(event) {
    const currentPos = window.scrollY;
    // Compares previous scroll position to the current scroll to determine behavior
    if(previousScrollPos < currentPos && currentPos > 20){
        $('.top-elements').css('transform', 'translateY(-200%)');
    }
    else{
        $('.top-elements').css('transform', 'translateY(0%)');
    }
    previousScrollPos = currentPos
});