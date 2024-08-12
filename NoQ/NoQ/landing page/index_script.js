// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple form validation for the contact form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (email && message) {
        alert('Thank you for your message!');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});
