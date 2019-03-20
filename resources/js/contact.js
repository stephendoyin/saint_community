
let modalTriggerBtn = document.querySelector(".js_modal_trigger__btn");
let closeBtn = document.querySelector(".modal_contact__close");
let contactModal = document.querySelector(".contact_modal");


modalTriggerBtn.addEventListener("click", function(e){
    e.preventDefault();
    document.body.classList.add("body");
    toggleModal();
});


closeBtn.addEventListener("click", function(){
    toggleModal();
    document.body.classList.remove("body");

});

window.addEventListener("click", function(e){
    if(e.target === contactModal)
        toggleModal();
        document.body.classList.remove("body");

})

function toggleModal() {
    contactModal.classList.toggle("contact_modal--show");
}

