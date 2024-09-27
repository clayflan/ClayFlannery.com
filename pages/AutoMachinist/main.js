


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to quadwrapper elements
const quads = document.querySelectorAll('.quad');
quads.forEach(quad => {
    quad.addEventListener('mouseenter', () => {
        gsap.to(quad, {duration: 0.3, y: -5, boxShadow: '0 6px 20px rgba(94, 94, 94, 0.2)'});
    });
    quad.addEventListener('mouseleave', () => {
        gsap.to(quad, {duration: 0.3, y: 0, boxShadow: '0 4px 30px rgba(94, 94, 94, 0.1)'});
    });
});