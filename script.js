document.addEventListener('DOMContentLoaded', function() {
    if (isUserAuthenticated()) {
        window.location.href = 'main_menu.html'; // Redirect to Main Menu
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'password'){
        // Save the auth token and redirect
        saveAuthToken("1234567890abcdef"); // Placeholder token
        window.location.href = 'main_menu.html'; // Redirect to Main Menu
    } else {
        // Display error message
        document.getElementById('errorMessage').textContent = 'Incorrect username or password';
    }
});

function saveAuthToken(token) {
    localStorage.setItem('authToken', token);
}

function isUserAuthenticated() {
    return localStorage.getItem('authToken') !== null;
}