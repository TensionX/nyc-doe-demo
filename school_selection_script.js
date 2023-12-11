// Array of schools for demonstration purposes
const schools = [
    { name: 'Lincoln High School', address: '1234 Education Rd', startTime: '8:00 AM', endTime: '3:00 PM' },
    { name: 'Washington Elementary', address: '5678 Learning Ln', startTime: '9:00 AM', endTime: '2:00 PM' },
    { name: 'Roosevelt Middle School', address: '9101 Knowledge Ave', startTime: '8:30 AM', endTime: '3:30 PM' },
    { name: 'Hamilton Secondary School', address: '1121 Scholarship Blvd', startTime: '7:45 AM', endTime: '2:45 PM' },
    { name: 'Franklin Academy', address: '1314 Discovery St', startTime: '8:15 AM', endTime: '3:15 PM' },
    { name: 'Adams High School', address: '1516 Pioneer Way', startTime: '7:50 AM', endTime: '2:50 PM' },
    { name: 'Jefferson Technical Institute', address: '1718 Innovation Dr', startTime: '9:30 AM', endTime: '4:30 PM' },
    { name: 'Madison Arts School', address: '1920 Creativity Ct', startTime: '8:45 AM', endTime: '3:45 PM' },
    // ... more schools
];

document.addEventListener('DOMContentLoaded', function() {
    const schoolOptionsContainer = document.getElementById('schoolOptions');
    schools.forEach(school => {
        const button = document.createElement('button');
        button.textContent = `${school.name} - ${school.address}`;
        button.classList.add('school-option');
        button.onclick = function() { selectSchool(school); };
        schoolOptionsContainer.appendChild(button);
    });


    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Get the 'message' query parameter
    const message = getQueryParam('message');
    if (message) {
        // If message parameter exists and is not empty, update the text
        document.getElementById('dynamicText').textContent = message;
    }
});

function confirmSchoolSelection(school) {
    const confirmationMessage = `Are you sure you want to confirm your booking at ${school.name} for ${school.address}?`;
    showModal(confirmationMessage, function() {
        redirectToSuccessPage(school);
    });
}

function showModal(message, onConfirm) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="hideModal()">&times;</span>
            <p>${message}</p>
            <button class="modal-button" id="confirmButton">Confirm</button>
            <button class="modal-button" onclick="hideModal()">Go Back</button>
        </div>
    `;
    modal.classList.add("show");
    document.getElementById('confirmButton').onclick = onConfirm;
}

function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

function redirectToSuccessPage(school) {
    const today = new Date();
    // Assuming you have a way to format the date as "today" or "FUTURE DATE"
    const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const successMessage = `
        Great! You are confirmed at ${school.name} for ${formattedDate}.
        The address is ${school.address} and the hours are ${school.startTime} through ${school.endTime}.
        Remember... Calling In Attendance is required when you arrive at the school.
    `;
    // Store the success message in local storage or pass through query parameters
    localStorage.setItem('successMessage', successMessage);
    window.location.href = 'success_page.html'; // Redirect to the Success Page
}
function selectSchool(school) {
    // Assuming this function is around line 34 where the error occurs
    const modal = document.getElementById('modal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }

    // Build the modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="hideModal()">&times;</span>
            <p>Confirm your booking at ${school.name}?</p>
            <button class="modal-button" onclick="confirmBooking('${school.name}')">Confirm</button>
            <button class="modal-button" onclick="hideModal()">Cancel</button>
        </div>
    `;
    modal.classList.add("show");
}

function hideModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove("show")
    } else {
        console.error('Modal element not found');
    }
}

function confirmBooking(schoolName) {
    hideModal();

    // Store the confirmed booking details in localStorage or send them to the server
    localStorage.setItem('confirmedBooking', schoolName);

    // Redirect to a success page or update the UI accordingly
    window.location.href = 'booking_success.html'; // Replace with the actual success page path
}
document.querySelector(`#backButton`).onclick = function(){window.history.back()}