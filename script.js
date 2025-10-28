document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (if you add internal links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple active class toggling for navbar (if needed for single-page nav)
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove 'active' from all links
            navLinks.forEach(item => item.classList.remove('active'));
            // Add 'active' to the clicked link
            link.classList.add('active');
        });
    });

    // You can add more interactive JavaScript here if needed,
    // for example, a subtle parallax effect on scroll or dynamic content loading.

    // Example: A more complex text animation if desired (currently handled by CSS keyframes)
    // You could use a library like Anime.js or GSAP for more advanced text effects.

    // For now, the primary animations are handled via CSS keyframes and transitions.
});





//============================================================PROJECT-DETAILS SECTION =============================

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links (if you add internal links later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple active class toggling for navbar
    const navLinks = document.querySelectorAll('.navbar nav ul li a');

    // Function to set active nav link based on current page
    const setActiveNavLink = () => {
        const path = window.location.pathname;
        navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the current path matches the link's href
            if (path.endsWith(link.getAttribute('href')) ||
               (link.getAttribute('href') === 'index.html' && (path === '/' || path.endsWith('/')))) { // Handles root or index.html
                link.classList.add('active');
            }
        });
    };

    setActiveNavLink(); // Set active link on page load

    // --- Tab functionality for project-details.html ---
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                // Hide all tab content
                tabContents.forEach(content => content.classList.remove('active'));

                // Add active class to the clicked button
                button.classList.add('active');

                // Get the target tab ID from the data-tab attribute
                const targetTabId = button.dataset.tab;

                // Show the corresponding tab content
                document.getElementById(targetTabId).classList.add('active');
            });
        });

        // Set the first tab as active by default on page load
        // This ensures one tab is always visible initially
        if (tabButtons[0]) {
            tabButtons[0].click(); // Simulate a click on the first button
        }
    }
});
