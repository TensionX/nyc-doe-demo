document.getElementById('submitAttendance').addEventListener('click', function() {
    var arrivalTime = document.getElementById('arrivalTime').value;
    if (arrivalTime) {
        // In a real scenario, submit the attendance information to the backend
        alert("Attendance for " + document.getElementById('schoolName').textContent + " at " + arrivalTime + " submitted.");
        window.location.href = 'main_menu.html'; // Redirect back to Main Menu
    } else {
        alert("Please enter your arrival time.");
    }
});
document.getElementById('goBackButton').addEventListener('click', function() {
    // Redirect to the appropriate previous screen, such as the main menu
    window.location.href = 'main_menu.html'; // Replace with the actual path to your previous screen
});