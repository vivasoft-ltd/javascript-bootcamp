(function() {
    function Modal() {}

    Modal.prototype.open = function() {
        const modal = document.querySelector(".modal");
        console.log("hello")
        modal.classList.add("modal--active")
    }

    Modal.prototype.close = function() {
        const modal = document.querySelector(".modal");
        modal.classList.remove("modal--active")
    }
        
    document.addEventListener("DOMContentLoaded", function() {
        const modal = new Modal();
        const openModal = document.querySelector("#openModal");
        const closeModal = document.querySelectorAll(".modal__close");
        
    openModal.addEventListener("click", function() {
        modal.open()
    })

    closeModal.forEach(function(btnClose) {
        btnClose.addEventListener("click", function() {
            modal.close()
        })
    })

    
    
    });
})()

