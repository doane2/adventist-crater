document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".archive-section");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("search-input");
    const pagination = document.getElementById("pagination");
    const videoModal = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");

    // Filter functionality
    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter;

            // Hide all sections and show the selected one
            sections.forEach((section) => {
                section.style.display = section.id === filter ? "block" : "none";
            });
        });
    });

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".archive-section .card").forEach((card) => {
            const isVisible = card.innerText.toLowerCase().includes(query);
            card.style.display = isVisible ? "block" : "none";
        });
    });

    // Video modal functionality
    document.querySelectorAll(".video-thumbnail[data-video]").forEach((thumbnail) => {
        thumbnail.addEventListener("click", () => {
            const videoUrl = thumbnail.getAttribute("data-video");
            videoFrame.src = `${videoUrl}?autoplay=1`; // Enable autoplay
            const modal = new bootstrap.Modal(videoModal);
            modal.show();
        });
    });

    // Clear video modal on close
    videoModal.addEventListener("hidden.bs.modal", () => {
        videoFrame.src = ""; // Clear the video source to stop playback
    });

    // Pagination functionality
    const itemsPerPage = 6; // Items per page
    const items = document.querySelectorAll(".archive-section .card");
    let currentPage = 1;

    function renderPagination() {
        const totalPages = Math.ceil(items.length / itemsPerPage);
        pagination.innerHTML = ""; // Clear existing pagination

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            li.innerHTML = `<button class="page-link">${i}</button>`;
            li.addEventListener("click", () => {
                currentPage = i;
                paginate();
                highlightActivePage(i);
            });
            pagination.appendChild(li);
        }
        highlightActivePage(1); // Highlight the first page by default
    }

    function highlightActivePage(page) {
        pagination.querySelectorAll(".page-item").forEach((item, index) => {
            item.classList.toggle("active", index + 1 === page);
        });
    }

    function paginate() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        items.forEach((item, index) => {
            item.style.display = index >= start && index < end ? "block" : "none";
        });
    }

    // Initialize pagination and show items
    renderPagination();
    paginate();
});
