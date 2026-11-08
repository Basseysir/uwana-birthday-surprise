const galleryImages = document.querySelectorAll(".gallery-item img");

const imageModal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.querySelector(".close-modal");

// Open image
galleryImages.forEach(image => {

    image.addEventListener("click", function() {

        imageModal.style.display = "flex";

        modalImage.src = this.src;

    });

});

// Close image
closeModal.addEventListener("click", function() {

    imageModal.style.display = "none";

});

// Close when background is clicked
imageModal.addEventListener("click", function(event) {

    if (event.target === imageModal) {

        imageModal.style.display = "none";

    }

});

// Close with Escape key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        imageModal.style.display = "none";

    }

});