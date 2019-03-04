let slideInnerContainer = $(".home_slider__inner_container");

let sliderz = $(".home_slide");
if (sliderz.length > 1) {
    let widthOfInnerContainer = sliderz.length * 100;
    let finalWidth = widthOfInnerContainer + "%";
    slideInnerContainer.css("width", finalWidth);
    slideInnerContainer.css('left', '-100%');
} else {
    slideInnerContainer.css("width", "100%");
    slideInnerContainer.css('left', '0%');
}


function nextSlider() {
    slideInnerContainer.animate({ left: '-200%' }, 300, function () {
        slideInnerContainer.css('left', '-100%');
        $('.home_slide').last().after($('.home_slide').first());
    });
}

function previousSlider() {
    slideInnerContainer.animate({ left: '0%' }, 400, function () {
        slideInnerContainer.css('left', '-100%');
        $('.home_slide').first().before($('.home_slide').last());
    });
}

// setInterval(nextSlider, 8000);
document.querySelector(".home__next").addEventListener("click", function () {
    if (sliderz.length > 1) {
        previousSlider();
    } else {
        return;
    }
});

document.querySelector(".home__previous").addEventListener("click", function () {
    if (sliderz.length > 1) {
        nextSlider();
    } else {
        return;
    }
});
