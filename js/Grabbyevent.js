// Replace 'YOUR_API_KEY_HERE' with your actual Google Calendar API key
const apiKey = 'AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ';
const calendarId = 'kvme0ikmjq4825g8ee860tm058clorcg@import.calendar.google.com'; // Replace with your actual calendar ID

// Object with keywords and their respective links
const keywordLinks = {
    'nat': 'https://e-book.boomdigitaal.nl/boek/9789464420180?layoutmode-double=1/sso',
    'schk': 'https://apps.noordhoff.nl/se/content/book/3d237f12-c196-4650-839c-bea7f798792e/ebooks/3847b67a-6f0b-4d10-9f5e-d485d7496fda',
    'biol': 'https://apps.noordhoff.nl/se/content/book/3c9f39f7-6a4b-4403-a898-508d1ddcf68f/ebooks/2afd6210-0fb1-4007-8d2a-b63ef7cad649',
    'netl': 'https://apps.noordhoff.nl/se/content/book/a904673b-f07d-480a-8201-57b56d94112b/ebooks/89f0e06c-3f93-403f-9804-04bad7a197de',
    'sptl': 'https://apps.noordhoff.nl/se/content/book/443fbd5e-bef7-4222-ae56-f41d5e83e468/ebooks/f71f3bc8-a5aa-4aa4-8951-fbab795b35c0',
    'wisb': 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
    'wisd': 'https://apps.noordhoff.nl/se/content/book/4acdfa97-1845-4bf6-8320-10181b908e29/ebooks/a476fd26-1eeb-4c59-979c-16b971e37cc1'
    // Add more keywords and links as needed
};

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
            const eventButtonsContainer = document.getElementById('event-buttons-container');

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

                // Generate buttons for each keyword
                eventButtonsContainer.innerHTML = Object.keys(keywordLinks).map(keyword => {
                    return `<button onclick="redirectToLink('${keyword}')">${keyword}</button>`;
                }).join('');
            } else {
                eventContainer.innerHTML = '<p>No ongoing events.</p>';
                eventButtonsContainer.innerHTML = ''; // Clear buttons if no ongoing event
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

// Function to redirect to the link associated with the keyword
function redirectToLink(keyword) {
    const link = keywordLinks[keyword];
    if (link) {
        window.location.href = link;
    } else {
        console.error('No link found for the keyword:', keyword);
    }
}