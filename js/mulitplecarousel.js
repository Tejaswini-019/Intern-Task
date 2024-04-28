// Carousel
var carousel = document.getElementById('carousel');
var indicators = carousel.querySelectorAll('.slidercounter');
var totalSlides = indicators.length;

carousel.addEventListener('slid.bs.carousel', function () {
    var activeIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(carousel.querySelector('.carousel-item.active')) + 1;
    // Ensure activeIndex is within the range of totalSlides
    if (activeIndex > totalSlides) {
        activeIndex = 1;
    } else if (activeIndex < 1) {
        activeIndex = totalSlides;
    }

    indicators.forEach(function (indicator, index) {
        // Format the activeIndex and totalSlides with leading zeros if needed
        var formattedActiveIndex = activeIndex < 10 ? '0' + activeIndex : activeIndex;
        var formattedTotalSlides = totalSlides < 10 ? '0' + totalSlides : totalSlides;

        // Display the slide count for both active and inactive slides
        indicator.textContent = formattedActiveIndex + ' / ' + formattedTotalSlides;

        // Show count for the active slide, hide count for inactive slides
        if (index + 1 === activeIndex) {
            indicator.style.display = 'inline-block'; // Show indicator
        } else {
            indicator.style.display = 'none'; // Hide indicator
        }
    });
});
