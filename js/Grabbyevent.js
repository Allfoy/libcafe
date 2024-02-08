

const apiKey = 'AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ';
const calendarId = 'kvme0ikmjq4825g8ee860tm058clorcg@import.calendar.google.com'; // Replace with your actual calendar ID

// Object with keywords and their respective links
const keywordLinks = {
'entl':'https://apps.noordhoff.nl/se/content/book/4e33ffb8-40c9-45fa-a67c-eae545d7dbea/ebooks/d6cafc0b-fb70-438c-8668-c017ee87ff73',
'nat': 'https://e-book.boomdigitaal.nl/boek/9789464420180?layoutmode-double=1/sso',
'schk': 'https://apps.noordhoff.nl/se/content/book/3d237f12-c196-4650-839c-bea7f798792e/ebooks/3847b67a-6f0b-4d10-9f5e-d485d7496fda',
'biol': 'https://apps.noordhoff.nl/se/content/book/3c9f39f7-6a4b-4403-a898-508d1ddcf68f/ebooks/2afd6210-0fb1-4007-8d2a-b63ef7cad649',
'netl': 'https://apps.noordhoff.nl/se/content/book/a904673b-f07d-480a-8201-57b56d94112b/ebooks/89f0e06c-3f93-403f-9804-04bad7a197de',
'sptl': 'https://apps.noordhoff.nl/se/content/book/443fbd5e-bef7-4222-ae56-f41d5e83e468/ebooks/f71f3bc8-a5aa-4aa4-8951-fbab795b35c0',
'wisb': 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
'wisd': 'https://apps.noordhoff.nl/se/content/book/4acdfa97-1845-4bf6-8320-10181b908e29/ebooks/a476fd26-1eeb-4c59-979c-16b971e37cc1'
    // Add more keywords and links for silly guy
};
//  here code for current events and current time (split it later for clean code)
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
            const eventButton = document.getElementById('event-button');

            if (currentEvent) {
                const eventTitle = currentEvent.summary;
                const eventStart = new Date(currentEvent.start.dateTime);
                const eventEnd = new Date(currentEvent.end.dateTime);

                // Display the current time in military format
                const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });


                // Display the current event and time in the container
                eventContainer.innerHTML = `
                    <h2>${eventTitle}</h2>
                    <p>${eventStart.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} to ${eventEnd.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                    <p>Time:${currentTime}</p>
                    `;

                // Update the link for the event button based on the current event's title
                const link = getLinkForEvent(eventTitle);
                eventButton.href = link;
            } else {
                eventContainer.innerHTML = '<p>No ongoing events.</p>';
                eventButton.href = 'https://allfoy.github.io/libcafe/error1'; // Set a default link or disable the button if no ongoing event
            }
// here code for upcoming event and time remaining
            if (upcomingEvent) {
                const upcomingEventTitle = upcomingEvent.summary;
                const upcomingEventStart = new Date(upcomingEvent.start.dateTime);

                // Calculate the time until the upcoming event
                const timeUntilEvent = upcomingEventStart - now;
                const hoursUntilEvent = Math.floor(timeUntilEvent / (1000 * 60 * 60));
                const minutesUntilEvent = Math.floor((timeUntilEvent % (1000 * 60 * 60)) / (1000 * 60));

                // Display the upcoming event and countdown in the container
                upcomingEventContainer.innerHTML = `
                    <h2>${upcomingEventTitle}</h2>
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
// here code for adaptive book
// Function to get the link for the event based on its title
function getLinkForEvent(title) {
    // Check if any keyword in the title matches, and return the corresponding link
    for (const keyword in keywordLinks) {
        if (title.toLowerCase().includes(keyword.toLowerCase())) {
            return keywordLinks[keyword];
        }
    }
    // Return a default link if no match is found
    return 'https://allfoy.github.io/libcafe/error2';
}

// Function to redirect to the link associated with the current event's title
function redirectToLink() {
    const eventButton = document.getElementById('event-button');
    // Check if the button is disabled (no ongoing event) before redirecting
    if (eventButton.href !== '#') {
        window.location.href = eventButton.href;
    }
}

//here code for start and end event times and now also missingblocks AKA free periods

// Get today's date and tomorrow's date in the format required by the Google Calendar API
const today = new Date().toISOString().split('T')[0];
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowFormatted = tomorrow.toISOString().split('T')[0];

// Fetch events from Google Calendar API and determine which events to display
fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${today}T00:00:00Z&timeMax=${tomorrowFormatted}T00:00:00Z`)
    .then(response => response.json())
    .then(data => {
        const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
        const sortedEvents = events.sort((a, b) => {
            const numA = parseInt(a.summary.match(/^\d+/)[0]); // Extract number from event title
            const numB = parseInt(b.summary.match(/^\d+/)[0]);
            return numA - numB; // Sort events based on the numbers in their titles
        });

        const currentTime = new Date();
        const finalEvent = sortedEvents[sortedEvents.length - 1];
        const finalEventEndTime = new Date(finalEvent.end.dateTime);
        finalEventEndTime.setMinutes(finalEventEndTime.getMinutes() + 10); // Add 10 minutes to the final event end time

        if (currentTime >= finalEventEndTime) {
            // Display events for tomorrow
            displayTomorrowEvents();
        } else {
            // Display events for today
            const firstEvent = sortedEvents[0];
            const finalEvent = sortedEvents[sortedEvents.length - 1];
            const freePeriods = findFreePeriods(sortedEvents);
            displayEvents(firstEvent, finalEvent);
            displayFreePeriods(freePeriods);
        }
    })
    .catch(error => console.error('Error fetching data:', error));

// Display events for tomorrow
function displayTomorrowEvents() {
    // Fetch events for tomorrow
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${tomorrowFormatted}T00:00:00Z&timeMax=${tomorrowFormatted}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
            const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
            const sortedEvents = events.sort((a, b) => {
                const numA = parseInt(a.summary.match(/^\d+/)[0]); // Extract number from event title
                const numB = parseInt(b.summary.match(/^\d+/)[0]);
                return numA - numB; // Sort events based on the numbers in their titles
            });

            const firstEvent = sortedEvents[0];
            const finalEvent = sortedEvents[sortedEvents.length - 1];
            const freePeriods = findFreePeriods(sortedEvents);
            displayEvents(firstEvent, finalEvent);
            displayFreePeriods(freePeriods);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to display events on the HTML page
function displayEvents(firstEvent, finalEvent) {
    const eventsContainer = document.getElementById('events-container');
    
    // Format start time of first event
    const startTime = new Date(firstEvent.start.dateTime);
    const formattedStartTime = startTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Format end time of final event
    const endTime = new Date(finalEvent.end.dateTime);
    const formattedEndTime = endTime.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    eventsContainer.innerHTML = `
        <h2>Today's Events</h2>
        <p><strong>First Event:</strong> ${firstEvent.summary}, <strong>Start Time:</strong> ${formattedStartTime}</p>
        <p><strong>Final Event:</strong> ${finalEvent.summary}, <strong>End Time:</strong> ${formattedEndTime}</p>
    `;
}

// Function to find free periods
function findFreePeriods(events) {
    
    const freePeriods = [];
    let lastEventBlock = 0;

    for (const event of events) {
        const eventBlock = parseInt(event.summary.match(/^\d+/)[0]);
        while (lastEventBlock < eventBlock - 1) {
            const block = lastEventBlock + 1;
            const startTime = getTimeForBlock(block);
            const endTime = new Date(getTimeForBlock(block).getTime() + 45*60000); // End time is 45 minutes after start time
            freePeriods.push({ block, startTime, endTime });
            lastEventBlock++;
        }
        lastEventBlock = eventBlock;
    }

    // Add the last block if it's a free period
    if (lastEventBlock < 10) {
        const block = lastEventBlock + 1;
        const startTime = getTimeForBlock(block);
        const endTime = new Date(getTimeForBlock(block).getTime() + 45*60000); // End time is 45 minutes after start time
        freePeriods.push({ block, startTime, endTime });
    }

    return freePeriods;
}



// Function to display free periods
function displayFreePeriods(freePeriods) {
    const eventsContainer = document.getElementById('events-container');
    eventsContainer.innerHTML += '<h2>Free Periods</h2>';

    if (freePeriods.length === 0) {
        eventsContainer.innerHTML += '<p>No free periods found.</p>';
    } else {
        freePeriods.forEach(period => {
            eventsContainer.innerHTML += `<p><strong>Block ${period.block}:</strong> ${period.startTime} to ${period.endTime}</p>`;
        });
    }
}

// Helper function to get starttime for a given block number
function getTimeForBlock(block) {
  const blockStartTimes = ["00:00", "08:15", "09:00", "09:45", "10:50", "11:35", "12:45", "13:30", "14:30", "15:15", "16:00"];
  const time = new Date();
  time.setHours(...blockStartTimes[block].split(":"));
  return time.toLocaleTimeString('en-US', {hour12: false,hour: '2-digit',minute: '2-digit'});
}



