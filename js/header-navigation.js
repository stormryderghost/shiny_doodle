<script>
    document.addEventListener('DOMContentLoaded', function() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent clicks inside the dropdown from closing it
                const content = this.querySelector('.dropdown-content');

                // Toggle dropdown visibility
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            });
        });

        // Close dropdowns when clicking outside of them
        document.addEventListener('click', function() {
            dropdowns.forEach(dropdown => {
                const content = dropdown.querySelector('.dropdown-content');
                content.style.display = 'none';
            });
        });
    });
</script>
