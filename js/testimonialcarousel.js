// Testimonials Carousel
var testimonialsCarousel = document.getElementById('carouselExampleCaption');
var testimonialsIndicators = testimonialsCarousel.querySelectorAll('.slidercounts');
var testimonialsTotalSlides = testimonialsIndicators.length;
testimonialsCarousel.addEventListener('slid.bs.carousel', function () {
    var activeIndex = Array.from(testimonialsCarousel.querySelectorAll('.carousel-item')).indexOf(testimonialsCarousel.querySelector('.carousel-item.active')) + 1;

    // Ensure activeIndex is within the range of totalSlides
    if (activeIndex > testimonialsTotalSlides) {
        activeIndex = 1;
    } else if (activeIndex < 1) {
        activeIndex = testimonialsTotalSlides;
    }

    testimonialsIndicators.forEach(function (indicator, index) {
        // Format the activeIndex and totalSlides with leading zeros if needed
        var formattedActiveIndex = activeIndex < 10 ? '0' + activeIndex : activeIndex;
        var formattedTotalSlides = testimonialsTotalSlides < 10 ? '0' + testimonialsTotalSlides : testimonialsTotalSlides;

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
