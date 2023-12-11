document.getElementById('attendanceBtn').addEventListener('click', function() {
    // Mockup backend request - Randomly decide if the nurse is scheduled
    if (Math.random() < 0.5) {
        // Nurse is scheduled
        window.location.href = 'attendance.html';
    } else {
        // Nurse is not scheduled
        window.location.href = 'not_scheduled.html';
    }
});
// Event listener for Call Out Absent button
document.getElementById('absentBtn').addEventListener('click', function(){
    // alert("Going to Call Out Absent Screen");
    // Future redirection to Absent Screen
    window.location.href = "calling_out_absent.html";
});

// Event listener for Provide Availability button
document.getElementById('availabilityBtn').addEventListener('click', function(){
    // alert("Going to Provide Availability Screen");
    window.location.href = "choice_screen.html";
    // Future redirection to Availability Screen
});

// Event listener for Done/Exit button
document.getElementById('exitBtn').addEventListener('click', function(){
    clearSessionAndRedirect();
});
