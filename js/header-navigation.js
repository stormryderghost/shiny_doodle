document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.dropdown');

    // Add click event listener to each dropdown
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent clicks inside the dropdown from closing it
            const content = this.querySelector('.dropdown-content');

            // Toggle dropdown visibility
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function(event) {
        // Only close dropdowns if the click is outside any dropdown
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.dropdown-content');
            if (content.style.display === 'block') {
                // Check if the click was outside the current dropdown
                if (!dropdown.contains(event.target)) {
                    content.style.display = 'none';
                }
            }
        });
    });
});
