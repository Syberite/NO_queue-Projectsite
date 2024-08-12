document.addEventListener('DOMContentLoaded', () => {
    // Sample data
    const users = [
        { id: 1, email: 'user1@example.com', role: 'Client' },
        { id: 2, email: 'user2@example.com', role: 'Service Provider' },
        { id: 3, email: 'user3@example.com', role: 'Admin' },
    ];

    const services = [
        { id: 1, name: 'Barber Shop', description: 'Haircuts and grooming services' },
        { id: 2, name: 'Massage Parlour', description: 'Relaxing massage services' },
        { id: 3, name: 'Beauty Parlour', description: 'Beauty treatments and services' },
    ];

    const reviews = [
        { id: 1, user: 'Jane Doe', service: 'Barber Shop', review: 'Great service!' },
        { id: 2, user: 'John Smith', service: 'Massage Parlour', review: 'Very relaxing.' },
        { id: 3, user: 'Emily Johnson', service: 'Beauty Parlour', review: 'Loved it!' },
    ];

    // Function to load users into the table
    const loadUsers = () => {
        const userTable = document.getElementById('user-table');
        userTable.innerHTML = '';
        users.forEach(user => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            `;
            userTable.appendChild(row);
        });
    };

    // Function to load services into the table
    const loadServices = () => {
        const serviceTable = document.getElementById('service-table');
        serviceTable.innerHTML = '';
        services.forEach(service => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${service.id}</td>
                <td>${service.name}</td>
                <td>${service.description}</td>
                <td>
                    <button onclick="editService(${service.id})">Edit</button>
                    <button onclick="deleteService(${service.id})">Delete</button>
                </td>
            `;
            serviceTable.appendChild(row);
        });
    };

    // Function to load reviews into the table
    const loadReviews = () => {
        const reviewTable = document.getElementById('review-table');
        reviewTable.innerHTML = '';
        reviews.forEach(review => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${review.id}</td>
                <td>${review.user}</td>
                <td>${review.service}</td>
                <td>${review.review}</td>
                <td>
                    <button onclick="deleteReview(${review.id})">Delete</button>
                </td>
            `;
            reviewTable.appendChild(row);
        });
    };

    // Initial load
    loadUsers();
    loadServices();
    loadReviews();
});

function addUser() {
    alert('Add user functionality');
}

function editUser(userId) {
    alert(`Edit user ${userId} functionality`);
}

function deleteUser(userId) {
    alert(`Delete user ${userId} functionality`);
}

function addService() {
    alert('Add service functionality');
}

function editService(serviceId) {
    alert(`Edit service ${serviceId} functionality`);
}

function deleteService(serviceId) {
    alert(`Delete service ${serviceId} functionality`);
}

function deleteReview(reviewId) {
    alert(`Delete review ${reviewId} functionality`);
}
