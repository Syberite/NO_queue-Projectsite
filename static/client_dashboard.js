document.addEventListener('DOMContentLoaded', () => {
    const clientName = 'John Doe'; // Replace with actual client name
    document.getElementById('client-name').textContent = clientName;

    // Sample data
    const providers = [
        { id: 1, name: 'Barber Shop', description: 'Haircuts and grooming services' },
        { id: 2, name: 'Massage Parlour', description: 'Relaxing massage services' },
        { id: 3, name: 'Beauty Parlour', description: 'Beauty treatments and services' },
    ];

    const previousSlots = [
        { id: 1, provider: 'Barber Shop', date: '2024-08-01', time: '10:00 AM' },
        { id: 2, provider: 'Massage Parlour', date: '2024-08-05', time: '2:00 PM' },
    ];

    // Function to load service providers into the list
    const loadProviders = () => {
        const providerList = document.getElementById('provider-list');
        providerList.innerHTML = '';
        providers.forEach(provider => {
            const providerElement = document.createElement('div');
            providerElement.classList.add('provider');
            providerElement.innerHTML = `
                <h3>${provider.name}</h3>
                <p>${provider.description}</p>
                <button onclick="bookProvider(${provider.id})">Book</button>
            `;
            providerList.appendChild(providerElement);
        });
    };

    // Function to load previous booked slots into the list
    const loadPreviousSlots = () => {
        const slotsList = document.getElementById('slots-list');
        slotsList.innerHTML = '';
        previousSlots.forEach(slot => {
            const slotElement = document.createElement('div');
            slotElement.classList.add('slot');
            slotElement.innerHTML = `
                <h3>${slot.provider}</h3>
                <p>Date: ${slot.date}</p>
                <p>Time: ${slot.time}</p>
                <button onclick="rebookSlot(${slot.id})">Rebook</button>
            `;
            slotsList.appendChild(slotElement);
        });
    };

    // Initial load
    loadProviders();
    loadPreviousSlots();
});

// Placeholder functions for booking and rebooking slots
function bookSlot() {
    alert('Book slot functionality');
}

function bookProvider(providerId) {
    // alert(`Book provider ${providerId} functionality`);
    const newPageUrl = `slot_booking.html`;
    window.location.href = newPageUrl;
}

function rebookSlot(slotId) {
    alert(`Rebook slot ${slotId} functionality`);
}
