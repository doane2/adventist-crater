function searchEvents() {
    let input = document.getElementById('eventSearch').value.toLowerCase();
    let events = document.querySelectorAll('.event-card');
    events.forEach(event => {
        let title = event.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(input)) {
            event.style.display = '';
        } else {
            event.style.display = 'none';
        }
    });
}

function showEventDetails(title, description, date) {
    document.getElementById('eventTitle').textContent = title;
    document.getElementById('eventDescription').textContent = description;
    document.getElementById('eventDate').textContent = date;
}