// Carousel
var carouselsection = document.getElementById('carouselExample');
var indicatorssection = carouselsection.querySelectorAll('.slider');
var totalSlidessection = indicatorssection.length;

carouselsection.addEventListener('slid.bs.carousel', function () {
    var activeIndex = Array.from(carouselsection.querySelectorAll('.carousel-item')).indexOf(carouselsection.querySelector('.carousel-item.active')) + 1;
    // Ensure activeIndex is within the range of totalSlides
    if (activeIndex > totalSlidessection) {
        activeIndex = 1;
    } else if (activeIndex < 1) {
        activeIndex = totalSlidessection;
    }
    indicatorssection.forEach(function (indicator, index) {
        // Display the slide count for both active and inactive slides without leading zeros
        indicator.textContent = activeIndex + ' / ' + totalSlidessection;
        // Show count for the active slide, hide count for inactive slides
        if (index + 1 === activeIndex) {
            indicator.style.display = 'inline-block'; // Show indicator
        } else {
            indicator.style.display = 'none'; // Hide indicator
        }
    });
});
