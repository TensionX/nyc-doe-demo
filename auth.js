// Function to check if user is authenticated
function checkAuthentication() {
    if (!isUserAuthenticated()) {
        redirectToLogin();
    }
}

// Function to determine if the user is authenticated
function isUserAuthenticated() {
    return localStorage.getItem('authToken') !== null;
}

// Function to clear the user session
function clearSessionAndRedirect() {
    localStorage.removeItem('authToken');
    redirectToLogin();
}

// Function to redirect to the login page
function redirectToLogin() {
    window.location.href = 'index.html';
}
