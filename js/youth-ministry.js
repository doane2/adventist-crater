document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel-container");
  
    carousels.forEach((carousel) => {
      const slides = carousel.querySelectorAll(".carousel-slide");
      let currentIndex = 0;
  
      const changeSlide = () => {
        slides.forEach((slide, index) => {
          slide.style.display = index === currentIndex ? "block" : "none";
        });
        currentIndex = (currentIndex + 1) % slides.length;
      };
  
      // Initialize by displaying the first slide
      changeSlide();
  
      // Set interval for automatic sliding
      setInterval(changeSlide, 3000); // Change every 3 seconds
    });
  });
  