document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const selectedImage = document.querySelector('.selected_image');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal_image');
    const closeModal = document.getElementById('close_modal');
    const modalThumbnails = document.querySelectorAll('.modal_thumbnail');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const imageSources = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ];

    selectedImage.src = imageSources[0];
    thumbnails[0].classList.add('selected');

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            selectedImage.src = imageSources[index];
            updateModalImage(index);
            thumbnails.forEach(tn => tn.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    selectedImage.addEventListener('click', function() {
        modal.style.display = "flex"; // Show the modal
        modalImage.src = selectedImage.src; // Set the modal image source
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none"; // Hide the modal
    });

    // Add click event to modal thumbnails
    modalThumbnails.forEach((modalThumbnail, index) => {
        modalThumbnail.addEventListener('click', function() {
            updateModalImage(index);
        });
    });

    function updateModalImage(index) {
        modalImage.src = imageSources[index]; // Change the modal image to the selected thumbnail
        modalThumbnails.forEach(mt => mt.style.border = '2px solid white'); // Reset borders
        modalThumbnails[index].style.border = '2px solid hsl(26, 100%, 55%)'; // Highlight selected
    }

    // Navigation button functionality
    let currentIndex = 0; // Keep track of the current image index

    function showImage(index) {
        currentIndex = index;
        updateModalImage(currentIndex);
        modalImage.src = imageSources[currentIndex];
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageSources.length - 1; // Loop back to last if at start
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < imageSources.length - 1) ? currentIndex + 1 : 0; // Loop back to first if at end
        showImage(currentIndex);
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide the modal
        }
    });
});
