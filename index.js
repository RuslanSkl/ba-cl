/**
 * Opens the sidebar navigation menu.
 * Sets the width of the sidebar to '250px' (or '100%' on small screens)
 * and adds the 'open' class for CSS transitions.
 */
function openNav() {
    const sidebar = document.getElementById("mySidebar");
    if (window.innerWidth <= 640) {
        // For small screens, open to full width
        sidebar.style.width = "100%";
    } else {
        // For larger screens, open to a fixed width
        sidebar.style.width = "250px";
    }
    sidebar.classList.add("open"); // Add 'open' class for transition
}

/**
 * Closes the sidebar navigation menu.
 * Sets the width of the sidebar back to '0' and removes the 'open' class.
 */
function closeNav() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.style.width = "0";
    sidebar.classList.remove("open"); // Remove 'open' class
}

/**
 * Event listener to adjust sidebar width on window resize.
 * If the sidebar is open and the window is resized, it ensures
 * the width is correctly set (either 250px or 100%).
 */
window.addEventListener('resize', () => {
    const sidebar = document.getElementById("mySidebar");
    if (sidebar.classList.contains("open")) {
        if (window.innerWidth <= 640) {
            sidebar.style.width = "100%";
        } else {
            sidebar.style.width = "250px";
        }
    }
});
