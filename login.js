// Handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const password = document.getElementById('password').value;
    const correctPassword = 'Love'; // The password (case-sensitive)

    if (password === correctPassword) {
        // Redirect to main page
        window.location.href = 'main.html';
    } else {
        // Show error alert
        alert('Incorrect password. Please try again.');
        document.getElementById('password').value = ''; // Clear the field
    }
});