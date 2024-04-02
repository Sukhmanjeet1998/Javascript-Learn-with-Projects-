'use strict';

let modal = document.querySelector(".modal");
let closeModalbtn = document.querySelector(".close-modal");
let overLay = document.querySelector(".overlay");
let showModal = document.querySelectorAll(".show-modal");
// console.log(showModal);

// function expression!
const closeModal = function(){
    modal.classList.add("hidden");
    overLay.classList.add("hidden");
}

const openModal = function(){
    modal.classList.remove("hidden");
    overLay.classList.remove("hidden");
}

// close modal via Escape key
document.addEventListener("keydown",function(event){
    console.log(event);
    if (event.key == "Escape" && (!(modal.classList.contains("hidden")))){
            closeModal();
    }
});

for (let index = 0; index < showModal.length; index++){
    // console.log(showModal[index].textContent);   
    showModal[index].addEventListener("click", openModal); 
}

closeModalbtn.addEventListener("click",closeModal);
overLay.addEventListener("click",closeModal);
