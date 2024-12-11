// Hero Section Animations
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector(".hero-section");
    const animatedText = document.querySelector(".animated-text");

    // Add class for zoom-in animation after page load
    heroSection.classList.add("zoom-in");

    // Add animation to text with delay
    setTimeout(() => {
        animatedText.classList.add("text-animated");
    }, 1000); // Delay in milliseconds (1 second)
});

// Subscription Button Logic
document.getElementById('subscribeBtn').addEventListener('click', function() {
    const subscribeButton = document.getElementById('subscribeBtn');
    const subscribeMessage = document.getElementById('subscribeMessage');
    const emailInput = document.getElementById('subscribeEmail');
    
    // Process the email (here we just clear it for simplicity)
    const email = emailInput.value;
    
    if (email) {
        // Simulate email processing (e.g., send to server)
        emailInput.value = ''; // Clear the email input field

        // Add spinning effect to the button
        subscribeButton.classList.add('btn-spin');
        
        // Display the thank you message
        subscribeMessage.style.display = 'block';
        
        // After 2 seconds, hide the thank you message and reset the button
        setTimeout(function() {
            subscribeMessage.style.display = 'none';
            subscribeButton.classList.remove('btn-spin');
        }, 3000); // 3 seconds delay
    } else {
        alert('Please enter a valid email address.');
    }
});

// Scroll animation for counting numbers with different durations
let hasScrolled = false;

const countUp = (id, target, duration) => {
  let current = 0;
  const increment = target / (duration / 25); // Dynamically adjust based on duration
  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    document.getElementById(id).textContent = Math.floor(current);
  }, 25);
};

// Function to animate the text and numbers when scrolling
const animateOnScroll = () => {
  const statsSection = document.querySelector('.stats-section');
  if (!hasScrolled && window.scrollY + window.innerHeight > statsSection.offsetTop) {
    // Start counting animation for each stat
    countUp('year-count', 2024, 4000);  // 2024 years (4 seconds)
    countUp('members-count', 1000, 5000);  // 1000 members (5 seconds)
    countUp('outreach-count', 10, 3000);  // 10 outreach programs (3 seconds)
    countUp('team-count', 15, 2000);  // 15 team members (2 seconds)
    
    // Animate text with a pop-in effect
    const textItems = document.querySelectorAll('.stat-item');
    textItems.forEach((item, index) => {
      item.style.animation = `popIn 1s ease forwards ${index * 0.2}s`;
    });

    hasScrolled = true;
  }
};

window.addEventListener('scroll', animateOnScroll);

// Image fade-in and zoom-in effect on hover
const imageElement = document.getElementById('community-img');
imageElement.addEventListener('mouseover', () => {
  imageElement.style.transform = 'scale(1.05)'; // Slight zoom-in effect
  imageElement.style.transition = 'transform 0.3s ease-in-out';
});

imageElement.addEventListener('mouseout', () => {
  imageElement.style.transform = 'scale(1)'; // Reset zoom effect
  imageElement.style.transition = 'transform 0.3s ease-in-out';
});

// Initial fade-in for the image on page load
document.addEventListener('DOMContentLoaded', () => {
  imageElement.style.transition = 'opacity 1s ease';
  setTimeout(() => {
    imageElement.style.opacity = '1'; // Make the image visible
  }, 500);
});

// Scroll animation for the new worship section
let hasScrolledForWorship = false;

const animateWorshipSection = () => {
  const worshipSection = document.querySelector('.worship-section');
  if (!hasScrolledForWorship && window.scrollY + window.innerHeight > worshipSection.offsetTop) {
    // Animate text with pop-in effect for worship section
    const worshipHeading = document.querySelector('.worship-left h2');
    const worshipParagraph = document.querySelector('.worship-right p');
    const worshipDetailItems = document.querySelectorAll('.detail-item');

    worshipHeading.style.animation = 'popIn 1s ease forwards';
    worshipParagraph.style.animation = 'popIn 1.2s ease forwards';

    worshipDetailItems.forEach((item, index) => {
      item.style.animation = `popIn 1.2s ease forwards ${index * 0.2}s`; // Staggered animation for the detail items
    });

    hasScrolledForWorship = true;
  }
};

window.addEventListener('scroll', animateWorshipSection);

// Scroll animation for the new community outreach section
let hasScrolledForOutreach = false;

const animateOutreachSection = () => {
  const outreachSection = document.querySelector('.community-outreach-section');
  if (!hasScrolledForOutreach && window.scrollY + window.innerHeight > outreachSection.offsetTop) {
    // Animate text with pop-in effect for outreach section
    const outreachHeading = document.querySelector('.outreach-left h2');
    const outreachParagraph = document.querySelector('.outreach-right p');

    outreachHeading.style.animation = 'popIn 1s ease forwards';
    outreachParagraph.style.animation = 'popIn 1.2s ease forwards';

    hasScrolledForOutreach = true;
  }
};

window.addEventListener('scroll', animateOutreachSection);

// Countdown Timer
const countdownDate = new Date("Dec 31, 2024 23:59:59").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

//navbar toggle -Handle click on dropdown items for small/medium screens
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".nav-item.dropdown");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  const isSmallScreen = () => window.innerWidth <= 991;

  // Manage aria-expanded for accessibility
  const toggleAriaExpanded = (element, expanded) => {
    element.setAttribute("aria-expanded", expanded);
  };

  // Handle dropdown toggle
  dropdowns.forEach((dropdown) => {
    const link = dropdown.querySelector(".nav-link");
    const menu = dropdown.querySelector(".dropdown-menu");

    link.addEventListener("click", (event) => {
      if (isSmallScreen()) {
        event.preventDefault();
        const isExpanded = dropdown.classList.toggle("show");
        toggleAriaExpanded(link, isExpanded);

        // Close other dropdowns
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown) {
            otherDropdown.classList.remove("show");
            toggleAriaExpanded(otherDropdown.querySelector(".nav-link"), false);
          }
        });
      }
    });

    // Prevent dropdown closure on click inside
    menu.addEventListener("click", (event) => event.stopPropagation());
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".nav-item.dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("show");
        toggleAriaExpanded(dropdown.querySelector(".nav-link"), false);
      });
    }
  });

  // Handle navbar toggler for small screens
  navbarToggler.addEventListener("click", () => {
    const isExpanded = navbarCollapse.classList.toggle("show");
    toggleAriaExpanded(navbarToggler, isExpanded);
  });

  // Optimize the screen width check with debounce
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      if (!isSmallScreen()) {
        dropdowns.forEach((dropdown) => {
          dropdown.classList.remove("show");
          toggleAriaExpanded(dropdown.querySelector(".nav-link"), false);
        });
        navbarCollapse.classList.remove("show");
        toggleAriaExpanded(navbarToggler, false);
      }
    }, 150);
  });
});







