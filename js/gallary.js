// Get all image elements with the class 'gallery-item'
const galleryImages = document.querySelectorAll('.gallery-item img');

// Loop through each image and add an event listener to open the modal with the corresponding image and data
galleryImages.forEach(image => {
    image.addEventListener('click', function () {
        // Get data attributes from the clicked image
        const imgSrc = this.getAttribute('data-img-src');
        const imgTitle = this.getAttribute('data-img-title');
        const imgDescription = this.getAttribute('data-img-description');

        // Set modal content dynamically
        document.getElementById('modal-img').src = imgSrc;
        document.getElementById('modal-img').alt = imgTitle;
        document.getElementById('galleryModalLabel').textContent = imgTitle;
        document.getElementById('modal-description').textContent = imgDescription;
    });
});