document.addEventListener('DOMContentLoaded', function() {
    generateDateOptions();
});

function generateDateOptions() {
    const dateOptionsContainer = document.getElementById('dateOptions');
    for (let i = 0; i < 10; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        const button = document.createElement('button');
        button.textContent = formatDate(date);
        button.classList.add('date-option');
        button.onclick = function() { checkAvailability(date); };
        dateOptionsContainer.appendChild(button);
    }
}

function formatDate(date) {
    // Assuming you want a format like "Monday, Jan 1"
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function checkAvailability(date) {
    // Placeholder function for checking availability
    // This should be replaced with actual logic to check if the nurse is already booked
    // and then show the modal window accordingly
    const isBooked = Math.random() < 0.2; // Randomly decide if booked for the mockup
    const opportinitiesExist = Math.random() < 0.7; // Randomly decide if booked for the mockup
    if (isBooked) {
        alert(`Already booked for that date`);
        showModal('You are already booked for this date. Please call XXX-XXX-XXXX to sort it out.');
    } else if(opportinitiesExist){
        alert(`Not booked, there are available openings`);
        window.location.href = 'borough_selection.html';

        // Proceed with checking for openings and further steps...
    }else{
        alert(`There are no openings for this date`);
        showModal('There are no openings for this date. We will keep you posted if more openings will appear');
    }
}

function showModal(message) {
    var modal = document.getElementById('modal');
    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.innerHTML = `<span class="close">&times;</span><p>${message}</p>`;
    
    // Add the close functionality
    modalContent.querySelector('.close').onclick = function() {
        modal.classList.remove("show");
    };
    
    // Clear previous content and add new content
    modal.innerHTML = '';
    modal.appendChild(modalContent);
    
    modal.classList.add("show");
}

function hideModal() {
    var modal = document.getElementById('modal');
    modal.classList.remove("show");
}


// ... existing code for generating date options ...

document.getElementById('goBackButton').addEventListener('click', function() {
    // Redirect to the previous screen, which could be the main menu or the initial availability screen
    window.location.href = 'main_menu.html'; // Replace with the actual path to your previous screen
});

// ... rest of the script ...
