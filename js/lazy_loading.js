<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Function to load images
        function loadImages() {
            const images = document.querySelectorAll('img[data-src]');

            images.forEach(img => {
                if (isInViewport(img)) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                }
            });
        }

        // Check if element is in viewport
        function isInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Load images on scroll and resize events
        window.addEventListener('scroll', loadImages);
        window.addEventListener('resize', loadImages);

        // Initial load
        loadImages();
    });
</script>
