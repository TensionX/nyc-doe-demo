document.getElementById('submitAbsence').addEventListener('click', function() {
    var absenceDate = document.getElementById('absenceDate').value;
    var reason = document.getElementById('absenceReason').value;
    var feedbackMessage = document.getElementById('feedbackMessage');

    // Check if both fields are filled
    if (!absenceDate || !reason.trim()) {
        feedbackMessage.textContent = 'Please fill in both the date and the reason for absence.';
        return; // Stop the function if validation fails
    }

    // Clear the feedback message as the form is correctly filled
    feedbackMessage.textContent = '';

    // var fourDayRuleWarning = document.getElementById('fourDayRuleWarning');
    // if () {
    //     fourDayRuleWarning.classList.remove('hidden');
    // } else {
    //     fourDayRuleWarning.classList.add('hidden');
    // }

    var message = `Are you sure you want to submit this absence report?<br>
    <button id="confirmAbsence">Yes, Submit</button>`;
    if(isFourthConsecutiveDay()){
        message = `Warning: This is the 4th consecutive day of absence. A doctor's note is required. <br>` + message;
    }
    showModal(message); // Show the modal only if validation passes
    document.getElementById('confirmAbsence').addEventListener('click', function() {
        // document.getElementById('feedbackMessage').textContent = 'Absence reported successfully';
        alert(`Absence reported successfully`);
        hideModal();
    });
    
});


document.getElementById('backToMenu').addEventListener('click', function() {
    window.location.href = 'main_menu.html';
});
function showModal(message) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <p class="modal-text">${message}</p>
            <button class="modal-button">Close</button>
        </div>
    `;

    modal.classList.add("show");

    // Add click event listener for the close elements
    modal.querySelector('.close').onclick = hideModal;
    modal.querySelector('.modal-button').onclick = hideModal;
}

function hideModal() {
    document.getElementById('modal').classList.remove("show")
}


function isFourthConsecutiveDay() {
    // Mock check with a 50% chance
    return Math.random() < 0.25;
}
