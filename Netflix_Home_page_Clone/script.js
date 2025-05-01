const container = document.getElementById("trendingContainer");
let scrollStep = 300; // Distance to scroll per step
let isScrolling = false; // To prevent multiple scrolls at once
let autoScroll; // Variable to store the auto-scroll interval

// Function to scroll right
function scrollRight() {
    if (isScrolling) return;
    isScrolling = true;

    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        // If at the end, scroll back to the start
        container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
        // Scroll right by scrollStep
        container.scrollBy({ left: scrollStep, behavior: "smooth" });
    }

    // Reset the scrolling flag after a delay
    setTimeout(() => {
        isScrolling = false;
    }, 500); // Delay to prevent rapid scrolling
}

// Function to scroll left
function scrollLeft() {
    if (isScrolling) return;
    isScrolling = true;

    if (container.scrollLeft <= 0) {
        // If at the start, scroll to the end
        container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
    } else {
        // Scroll left by scrollStep
        container.scrollBy({ left: -scrollStep, behavior: "smooth" });
    }

    // Reset the scrolling flag after a delay
    setTimeout(() => {
        isScrolling = false;
    }, 500); // Delay to prevent rapid scrolling
}

// Auto-scroll function
function startAutoScroll() {
    autoScroll = setInterval(scrollRight, 3000); // Scroll every 3 seconds
}

// Stop auto-scroll when user hovers over the container
container.addEventListener("mouseenter", () => {
    clearInterval(autoScroll);
});

// Resume auto-scroll when user stops hovering
container.addEventListener("mouseleave", () => {
    startAutoScroll();
});

// Start auto-scrolling when the page loads
startAutoScroll();