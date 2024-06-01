// Requires JQuery

var previousScrollPos = window.scrollY;
$(window).scroll(function(event) {
    const currentPos = window.scrollY;
    // Compares previous scroll position to the current scroll to determine behavior.
    // Because of some mobile devices bouncing the scroll when a user scrolls to the top, add an extra argument that makes sure the current position reaches a certain threshhold.
    if(previousScrollPos < currentPos && currentPos > 30){
        $('.top-elements').css('transform', 'translateY(-200%)');
    }
    else{
        $('.top-elements').css('transform', 'translateY(0%)');
    }
    previousScrollPos = currentPos;
});
