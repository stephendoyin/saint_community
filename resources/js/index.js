

$(document).ready(function () {
    let owl = $(".owl-one");
    owl.owlCarousel({
        items: 1,
        autoPlay: true,
        autoplayHoverPause: true,
        loop: true
    });

    $('.home__next').click(function () {
        owl.trigger('next.owl.carousel');
    })


    $('.home__previous').click(function () {
        owl.trigger('prev.owl.carousel');
    })
});



$(document).ready(function () {
    let owl = $(".owl_three");
    owl.owlCarousel({
        items: 1,
        autoPlay: true,
        autoplayHoverPause: true,
        loop: true
    });

    


    
});