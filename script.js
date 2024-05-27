const eventForm = document.getElementById('eventForm');
const eventNameInput = document.getElementById('eventName');
const eventDateInput = document.getElementById('eventDate');
const eventTimeInput = document.getElementById('eventTime');
const eventLocationInput = document.getElementById('eventLocation');
const eventsList = document.getElementById('events');

eventForm.addEventListener('submit', createEvent);

function createEvent(e) {
  e.preventDefault();
  const eventName = eventNameInput.value;
  const eventDate = eventDateInput.value;
  const eventTime = eventTimeInput.value;
  const eventLocation = eventLocationInput.value;

  if (eventName && eventDate && eventTime && eventLocation) {
    const eventItem = document.createElement('li');
    eventItem.innerHTML = `
      <strong>${eventName}</strong><br>
      Date: ${eventDate}<br>
      Time: ${eventTime}<br>
      Location: ${eventLocation}
    `;
    eventsList.appendChild(eventItem);
    eventForm.reset();
  }
}
