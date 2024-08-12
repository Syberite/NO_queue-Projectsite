document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userType = document.getElementById('userType').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (userType && email && password) {
        errorMessage.textContent = '';
        // Here you can add your login logic based on userType, email, and password
        console.log('User Type:', userType);
        console.log('Email:', email);
        console.log('Password:', password);
        // For example, you can redirect users based on their userType
        if (userType === 'client') {
            // Redirect to client dashboard
            window.location.href = 'client_dashboard.html';
        } else if (userType === 'serviceProvider') {
            // Redirect to service provider dashboard
            window.location.href = 'service_provider_dashboard.html';
        } else if (userType === 'admin') {
            // Redirect to admin dashboard
            window.location.href = 'admin.html';
        }
    } else {
        errorMessage.textContent = 'Please fill in all fields.';
    }
});
