document.getElementById('specificDateBtn').addEventListener('click', function() {
    window.location.href = 'date_selection.html'; // Redirect to Specific Date Screen
});

document.getElementById('recurringAssignmentBtn').addEventListener('click', function() {
    window.location.href = 'weekday_selection.html'; // Redirect to Recurring Assignment Screen
});

document.getElementById('exitBtn').addEventListener('click', function() {
    window.location.href = 'main_menu.html'; // Redirect back to Main Menu
});
