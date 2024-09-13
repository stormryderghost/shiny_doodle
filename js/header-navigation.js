document.addEventListener('DOMContentLoaded', function() {
    // Select all dropdown menu elements
    const dropdowns = document.querySelectorAll('.dropdown');

    // Function to toggle dropdown visibility
    function toggleDropdown(event) {
        event.stopPropagation(); // Prevent clicks inside the dropdown from closing it
        const content = this.querySelector('ul');

        // Toggle dropdown visibility
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }

    // Add click event listeners to dropdowns
    dropdowns.forEach(dropdown => {
        dropdown.parentElement.addEventListener('click', toggleDropdown);
    });

    // Close dropdowns when clicking outside of them
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('ul');
            content.style.display = 'none';
        });
    });
});
