// JavaScript source code
document.addEventListener("DOMContentLoaded", function () {
    function fadeInOutOnScroll(elementId) {
        var element = document.getElementById(elementId);

        function fadeInOut() {
            var elementTop = element.getBoundingClientRect().top;
            var elementBottom = element.getBoundingClientRect().bottom;
            var windowHeight = window.innerHeight;

            if (elementTop + 300 < windowHeight && elementBottom > 0) {
                // Element is partially or fully visible
                var opacity = 1 //- (elementTop + element.clientHeight) / windowHeight;
                element.style.opacity = opacity;
            } else {
                // Element is outside the viewport
                element.style.opacity = "0.1";
            }
        }

        window.addEventListener('scroll', fadeInOut);
        fadeInOut();
    }

    // Call fadeInOnScroll with the IDs of the elements you want to fade in
    fadeInOutOnScroll('fade-in-out-aboutme');
    fadeInOutOnScroll('fade-in-out-workhistory');
    fadeInOutOnScroll('fade-in-out-education');
    fadeInOutOnScroll('fade-in-out-projects');
});

console.log('Java Script is working!');