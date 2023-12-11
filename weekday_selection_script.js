const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

document.addEventListener('DOMContentLoaded', function() {
    const weekdayOptionsContainer = document.getElementById('weekdayOptions');
    weekdays.forEach(weekday => {
        const button = document.createElement('button');
        button.textContent = weekday;
        button.classList.add('weekday-option');
        button.onclick = function() { selectWeekday(weekday); };
        weekdayOptionsContainer.appendChild(button);
    });
    
});
function selectWeekday(weekday) {
    loading(true);
    // Mockup check for assignments and other scenarios
    checkRecurringAssignmentsAvailability(weekday);
    loading(false);
}

function checkRecurringAssignmentsAvailability(weekday) {
    // Mockup logic for checking availability
    const hasRecurringAssignments = Math.random() < 0.7; // 50% chance of having recurring assignments
    if (hasRecurringAssignments) {
        const hasSchedulingConflict = Math.random() < 0.3; // 50% chance of a scheduling conflict
        if (hasSchedulingConflict) {
            alert(`Scheduling conflict`);
            // Show modal informing about scheduling conflict
            showModal(`There are recurring assignments available for Every ${weekday}.
                       Unfortunately, your request cannot be completed because you have a scheduling conflict.
                       Please contact the school nursing line at xxx-xxxxxxx to complete your request.<br><br>
                       Would you like to provide availability for any specific date or another weekday?`, `redirectToChoice('${weekday}')`);
        } else {
            alert(`Recurring assignments found`);
            // Proceed to show available recurring assignments
            showAvailableAssignments(weekday);
        }
    } else {
        alert(`No weekly assignment, but there's one for just next ${weekday}`);
        // Show modal asking if they want to check for this weekday's assignment
        showModal(`There are no recurring assignments for every ${weekday}.<br> Would you like to check if there are any assignments available for only this coming ${weekday}?`,
        `checkSingleDayAssignmentAvailability('${weekday}')`);
    }
}

function redirectToChoice(){
    window.location.href='choice_screen.html';
}

function showModal(message, onConfirm) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="hideModal()">&times;</span>
            <p>${message}</p>
            <button class="modal-button" onclick="${onConfirm}">Yes</button>
            <button class="modal-button" onclick="hideModal()">No</button>
        </div>
    `;  
    modal.classList.add("show");
}

function hideModal() {
    document.getElementById('modal').classList.remove("show");
}

function checkSingleDayAssignmentAvailability(weekday) {
    
    // Mockup logic for checking single day assignment
    const hasSingleDayAssignment = Math.random() < 0.5; // 50% chance
    if (hasSingleDayAssignment) {
        window.location.href = `school_selection.html?message=Select one of these schools for the next ${weekday}`;
    } else {
        // Show a message that they are not scheduled and no assignments are available
        showModal(`You are not scheduled for This ${weekday} and no assignments are available.`);
    }
}

// Add any additional logic as required


document.getElementById('backButton').addEventListener('click', function() {
    // Redirect to the main menu or the appropriate previous screen
    window.location.href = 'main_menu.html'; // Replace with the actual path to your main menu or previous screen
});

function showAvailableAssignments(weekday){
    alert(`Showing availability`);
    window.location.href = `school_selection.html?message=For Every ${weekday}, please select one of the following schools:`;
}