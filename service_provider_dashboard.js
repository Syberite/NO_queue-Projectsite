document.addEventListener('DOMContentLoaded', () => {
    const serviceName = 'Barber Shop'; // Replace with actual service name
    document.getElementById('service-name').textContent = serviceName;

    // Sample data
    const reviews = [
        { id: 1, user: 'Jane Doe', comment: 'Great service!', rating: 5 },
        { id: 2, user: 'John Smith', comment: 'Very professional.', rating: 4 },
    ];

    const slots = [
        { id: 1, date: '2024-08-15', time: '10:00 AM' },
        { id: 2, date: '2024-08-15', time: '11:00 AM' },
    ];

    // Function to load reviews into the list
    const loadReviews = () => {
        const reviewList = document.getElementById('review-list');
        reviewList.innerHTML = '';
        reviews.forEach(review => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('review');
            reviewElement.innerHTML = `
                <h4>${review.user}</h4>
                <p>Rating: ${'⭐'.repeat(review.rating)}</p>
                <p>${review.comment}</p>
            `;
            reviewList.appendChild(reviewElement);
        });
    };

    // Function to load slots into the list
    const loadSlots = () => {
        const slotsList = document.getElementById('slots-list');
        slotsList.innerHTML = '';
        slots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.classList.add('slot');
            slotElement.innerHTML = `
                <p>Date: ${slot.date}</p>
                <p>Time: ${slot.time}</p>
                <button onclick="deleteSlot(${slot.id})">Delete Slot</button>
            `;
            slotsList.appendChild(slotElement);
        });
    };

    // Initial load
    loadReviews();
    loadSlots();
});

// Placeholder functions for adding and deleting slots
document.getElementById('slots-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Slot added successfully');
});

function deleteSlot(slotId) {
    alert(`Slot ${slotId} deleted successfully`);
}
