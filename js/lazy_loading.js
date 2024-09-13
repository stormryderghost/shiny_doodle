
    document.addEventListener('DOMContentLoaded', function() {
        // Function to load images
        function loadImages(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    observer.unobserve(img); // Stop observing once loaded
                }
            });
        }

        // Create an Intersection Observer instance
        const observer = new IntersectionObserver(loadImages, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Trigger loading when 10% of the image is visible
        });

        // Observe all images with data-src attribute
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => observer.observe(img));

        // Optional: Throttle scroll and resize events if needed (for older browsers)
        function throttle(func, limit) {
            let lastFunc;
            let lastRan;
            return function() {
                const context = this;
                const args = arguments;
                if (!lastRan) {
                    func.apply(context, args);
                    lastRan = Date.now();
                } else {
                    clearTimeout(lastFunc);
                    lastFunc = setTimeout(function() {
                        if ((Date.now() - lastRan) >= limit) {
                            func.apply(context, args);
                            lastRan = Date.now();
                        }
                    }, limit - (Date.now() - lastRan));
                }
            }
        }

        // Throttle scroll and resize events
        window.addEventListener('scroll', throttle(loadImages, 200));
        window.addEventListener('resize', throttle(loadImages, 200));
    });
