// Array of boroughs, replace with actual data if needed
const boroughs = ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'];

document.addEventListener('DOMContentLoaded', function() {
    const boroughOptionsContainer = document.getElementById('boroughOptions');
    boroughs.forEach(borough => {
        const button = document.createElement('button');
        button.textContent = borough;
        button.classList.add('borough-option');
        button.onclick = function() { selectBorough(borough); };
        boroughOptionsContainer.appendChild(button);
    });
});

function selectBorough(borough) {
    // Here you would handle the borough selection
    // For example, save the selected borough to local storage or session storage
    // and redirect to the school selection screen
    localStorage.setItem('selectedBorough', borough);
    window.location.href = 'school_selection.html'; // Redirect to the School Selection Screen
}

// If you have a back button, handle the click event
document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
