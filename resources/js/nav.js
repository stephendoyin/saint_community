let menuIcon = $(".menu_icon");
let menuModal = $(".nav_menu__resp");


$(".menu__close").click(function(){
    menuModal.animate({left: "-100%"});
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
})

$(window).click(function(e) {
    if(e.target.className === "nav_menu__resp"){
        menuModal.animate({left: "-100%"});
        document.body.style.height = "auto";
    document.body.style.overflow = "auto";
    }
});

menuIcon.click(function(){
    menuModal.animate({left: "0%"});
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
})