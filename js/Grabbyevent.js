// Replace 'YOUR_API_KEY_HERE' with your actual Google Calendar API key
const apiKey = 'AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ';
const calendarId = 'kvme0ikmjq4825g8ee860tm058clorcg@import.calendar.google.com'; // Replace with your actual calendar ID

// Function to fetch events and update time
function fetchEventsAndUpdateTime() {
    // Fetch events from Google Calendar API
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const events = data.items;
            const now = new Date();
            let currentEvent = null;
            let upcomingEvent = null;

            // Find the first event that is currently happening
            for (const event of events) {
                const eventStart = new Date(event.start.dateTime);
                const eventEnd = new Date(event.end.dateTime);

                if (eventStart <= now && eventEnd >= now) {
                    currentEvent = event;
                } else if (eventStart > now && (!upcomingEvent || eventStart < new Date(upcomingEvent.start.dateTime))) {
                    upcomingEvent = event;
                }
            }

            const eventContainer = document.getElementById('event-container');
            const upcomingEventContainer = document.getElementById('upcoming-event-container');

            if (currentEvent) {
                const eventTitle = currentEvent.summary;
                const eventStart = new Date(currentEvent.start.dateTime);
                const eventEnd = new Date(currentEvent.end.dateTime);

                // Display the current time in military format
                const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

                // Display the current event and time in the container
                eventContainer.innerHTML = `
                    <h2>${eventTitle}</h2>
                    <p>${eventStart.toDateString()} from ${eventStart.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} to ${eventEnd.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>Current Time: ${currentTime}</p>
                `;
            } else {
                eventContainer.innerHTML = '<p>No ongoing events.</p>';
            }

            if (upcomingEvent) {
                const upcomingEventTitle = upcomingEvent.summary;
                const upcomingEventStart = new Date(upcomingEvent.start.dateTime);

                // Calculate the time until the upcoming event
                const timeUntilEvent = upcomingEventStart - now;
                const hoursUntilEvent = Math.floor(timeUntilEvent / (1000 * 60 * 60));
                const minutesUntilEvent = Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));

                // Display the upcoming event and countdown in the container
                upcomingEventContainer.innerHTML = `
                    <h2>Upcoming Event</h2>
                    <p>${upcomingEventTitle}</p>
                    <p>Time Until Event: ${hoursUntilEvent} hours ${minutesUntilEvent} minutes</p>
                `;
            } else {
                upcomingEventContainer.innerHTML = '<p>No upcoming events.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
}

// Initial fetch and time update
fetchEventsAndUpdateTime();

// Set up interval to update time every 1 second (adjust as needed)
setInterval(fetchEventsAndUpdateTime, 1000);