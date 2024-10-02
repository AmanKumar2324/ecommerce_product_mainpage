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

    let currentIndex = 0;

    // Function to update selected image and thumbnail highlights
    function updateSelectedImage(index) {
        selectedImage.src = imageSources[index];
        thumbnails.forEach(tn => tn.classList.remove('selected'));
        thumbnails[index].classList.add('selected');
    }

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', function() {
            currentIndex = index;
            updateSelectedImage(index);
        });
    });

    selectedImage.addEventListener('click', function() {
        modal.style.display = "flex";
        modalImage.src = imageSources[currentIndex];
        updateModalImage(currentIndex);
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
    // Update current index when a modal thumbnail is clicked
    modalThumbnails.forEach((modalThumbnail, index) => {
        modalThumbnail.addEventListener('click', function() {
            updateModalImage(index);
            currentIndex = index; 
        });
    });

    function updateModalImage(index) {
         // Change the modal image to the selected thumbnail
        modalImage.src = imageSources[index];
        // Reset borders
        modalThumbnails.forEach(mt => mt.style.border = '2px solid white');
        // Highlight selected
        modalThumbnails[index].style.border = '2px solid hsl(26, 100%, 55%)';
    }

    // Navigation button functionality
    function showImage(index) {
        currentIndex = index;
        updateModalImage(currentIndex);
        modalImage.src = imageSources[currentIndex];
    }

    prevBtn.addEventListener('click', function() {
         // Looping back to last if at start
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageSources.length - 1;
        showImage(currentIndex);
    });

    nextBtn.addEventListener('click', function() {
        // Looping back to first if at end
        currentIndex = (currentIndex < imageSources.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
