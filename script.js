// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration
    easing: 'ease-in-out', // Easing function
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 1)'; // Solid background on scroll
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)'; // Semi-transparent background
    }
});

// Typed.js for Hero Title
const typed = new Typed('.typed-text', {
    strings: ['a Student', 'a Problem Solver', 'a Newbie'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
});

// Modal functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modalId = card.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    });
});

modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Form submission alert
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});