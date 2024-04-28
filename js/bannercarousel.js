// Banner Carousel
var bannerCarousel = document.getElementById('carouselExampleCaptions');
var bannerIndicators = bannerCarousel.querySelectorAll('.slidercount');
var bannerTotalSlides = bannerIndicators.length;

bannerCarousel.addEventListener('slid.bs.carousel', function () {
    var activeIndex = Array.from(bannerCarousel.querySelectorAll('.carousel-item')).indexOf(bannerCarousel.querySelector('.carousel-item.active')) + 1;

    // Ensure activeIndex is within the range of totalSlides
    if (activeIndex > bannerTotalSlides) {
        activeIndex = 1;
    } else if (activeIndex < 1) {
        activeIndex = bannerTotalSlides;
    }

    bannerIndicators.forEach(function (indicator, index) {
        // Format the activeIndex and totalSlides with leading zeros if needed
        var formattedActiveIndex = activeIndex < 10 ? '0' + activeIndex : activeIndex;
        var formattedTotalSlides = bannerTotalSlides < 10 ? '0' + bannerTotalSlides : bannerTotalSlides;

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

