document.addEventListener('DOMContentLoaded', function() {
    const confirmedBooking = localStorage.getItem('confirmedBooking');
    const confirmationDetailsElement = document.getElementById('confirmationDetails');
    if (confirmedBooking) {
        confirmationDetailsElement.textContent = `You are confirmed for ${confirmedBooking}.`;
    } else {
        confirmationDetailsElement.textContent = 'No booking details found.';
    }
});
