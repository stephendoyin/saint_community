
let modalTriggerBtn = document.querySelector(".js_modal_trigger__btn");
let closeBtn = document.querySelector(".modal_contact__close");
let contactModal = document.querySelector(".contact_modal");


modalTriggerBtn.addEventListener("click", function(e){
    e.preventDefault();
    toggleModal();
});


closeBtn.addEventListener("click", function(){
    toggleModal();
});

window.addEventListener("click", function(e){
    if(e.target === contactModal)
        toggleModal();
})

function toggleModal() {
    contactModal.classList.toggle("contact_modal--show");
}

