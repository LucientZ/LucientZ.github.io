var previousScrollPos = window.scrollY;

window.onscroll = (event) => {
    const currentPos = window.scrollY;
    if (previousScrollPos < currentPos && currentPos > 80) {
        document.getElementById("top-elements").style.transform = "translateY(-200%)";
    }
    else {
        document.getElementById("top-elements").style.transform = "translateY(0%)";
    }
    previousScrollPos = currentPos;
}