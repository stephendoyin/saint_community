let menuIcon = $(".menu_icon");
let menuModal = $(".nav_menu__resp");


$(".menu__close").click(function(){
    menuModal.animate({left: "-100%"})
})

$(window).click(function(e) {
    if(e.target.className === "nav_menu__resp"){
        menuModal.animate({left: "-100%"})
    }
});

menuIcon.click(function(){
    menuModal.animate({left: "0%"});
})