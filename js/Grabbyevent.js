//const apiKey = 'AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ';
//let calendarId = 'kvme0ikmjq4825g8ee860tm058clorcg';
// object literal with keywords and their respective links
const noBook = {link: 'https://allfoy.github.io/libcafe/home/error2', imageSrc: '../img/bg.jpg'};
const keywordLinks = {
    'entl': {
        link: 'https://apps.noordhoff.nl/se/content/book/4e33ffb8-40c9-45fa-a67c-eae545d7dbea/ebooks/d6cafc0b-fb70-438c-8668-c017ee87ff73',
        imageSrc: '../img/covers/ENG.jpeg',
        actualName: 'English'
    },
    'nat': {
        link: 'https://e-book.boomdigitaal.nl/boek/9789464420180?layoutmode-double=1/sso',
        imageSrc: '../img/covers/physics.jpg',
        actualName: 'Physics'
    },
    'schk': {
        link: 'https://apps.noordhoff.nl/se/content/book/3d237f12-c196-4650-839c-bea7f798792e/ebooks/3847b67a-6f0b-4d10-9f5e-d485d7496fda',
        imageSrc: '../img/covers/CHEM.jpeg',
        actualName: 'Chemistry'
    },
    'biol': {
        link: 'https://apps.noordhoff.nl/se/content/book/3c9f39f7-6a4b-4403-a898-508d1ddcf68f/ebooks/2afd6210-0fb1-4007-8d2a-b63ef7cad649',
        imageSrc: '../img/covers/BIO.jpeg',
        actualName: 'Biology'
    },
    'netl': {
        link: 'https://apps.noordhoff.nl/se/content/book/a904673b-f07d-480a-8201-57b56d94112b/ebooks/89f0e06c-3f93-403f-9804-04bad7a197de',
        imageSrc: '../img/covers/DUTCH.jpeg',
        actualName: 'Dutch'
    },
    'sptl': {
        link: 'https://apps.noordhoff.nl/se/content/book/443fbd5e-bef7-4222-ae56-f41d5e83e468/ebooks/f71f3bc8-a5aa-4aa4-8951-fbab795b35c0',
        imageSrc: '../img/covers/SPAN.jpeg',
        actualName: 'Spanish'
    },
    'wisb': {
        link: 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
        imageSrc: '../img/covers/MATHB.jpeg',
        actualName: 'Mathematics B'
    },
    'wisd': {
        link: 'https://apps.noordhoff.nl/se/content/book/4acdfa97-1845-4bf6-8320-10181b908e29/ebooks/a476fd26-1eeb-4c59-979c-16b971e37cc1',
        imageSrc: '../img/covers/MATHD.jpeg',
        actualName: 'Mathematics D'
    },
    'me': {
        ...noBook,
        actualName: 'Mentorles'
    },
    'maat': {
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/MAAT.jpg',
        actualName: 'Maatschappijleer'
    },
    'ckv':{
        ...noBook,
        actualName: 'CKV'
    },
    'rt':{
        ...noBook,
        actualName: 'Route-uur'
    },
    'wisa':{
        ...noBook,
        actualName: 'Mathematics A'
    },
    'econ':{
        ...noBook,
        actualName: 'Economics'
    },
    'lo':{
        ...noBook,
        actualName: 'PE'
    },
    'kumu':{
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/music.png',
        actualName: 'Music'
    },
    'kua':{
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/KUA.jpg',
        actualName: 'General Arts'
    },
    'ak':{
        ...noBook,
        actualName: 'Geography'
    },// i think it's ges? idk no casper yet
    'ges':{
        ...noBook,
        actualName: 'History'
    },
    'maw':{
        ...noBook,
        actualName: 'Social sciences'
    },
    '-wi':{
        link: 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
        imageSrc: '../img/covers/MATHB.jpeg',
        actualName: 'Mathematics rt'
    },
    'CKV':{
        ...noBook,
        actualName: 'CKV event'
    },
    'Zelfstudie':{
        ...noBook,
        actualName: 'Zelfstudie'
    }
    // Add more keywords and links for silly guy
};
CalIDcookie();
// here some code for the cookie
// this works by checking if this specific cookie exist, if it don't make one, another bit of code for switching
function CalIDcookie(){
    if(!(document.cookie.split(";").some((item) => item.trim().startsWith("calendarsId" + "=")))){
        var CalID = prompt("What is your calendarID?","kvme0ikmjq4825g8ee860tm058clorcg");
        const d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "calendarsId" + "=" + CalID + ";" + expires + ";path=/";
        console.log("we have found a cookie: "+document.cookie);
        fetchEventsAndUpdateTime(getCookie("calendarsId"));
        startendfree(getCookie("calendarsId"));
    }else{
        console.log("we have found the cookie:" + getCookie("calendarsId"));
        fetchEventsAndUpdateTime(getCookie("calendarsId"));
        startendfree(getCookie("calendarsId"));
    }
        //'kevin' : CalID = 'i32q28ad785oqs2dom81460a186j6uvr'; user = 'Kevin' ;break;
        //'allfoy': CalID = 'kvme0ikmjq4825g8ee860tm058clorcg'; user = 'Allfoy';break;
        //'myrthe': CalID = '32ddu2ndrbe8jtp1olg6rko3f5cntog3'; user = 'Myrthe';break;
		//'troy'  : CalID = '3hvsosg4io5fdefbn66meln2un2hu33k'; user = 'Troy'  ;break;
};
function switchcookie(){
    var CalID = prompt("What is your calendarID?","kvme0ikmjq4825g8ee860tm058clorcg");
    if (CalID.length != 32){
        var CalID = prompt("What is your calendarID?","kvme0ikmjq4825g8ee860tm058clorcg");
    }
    else{
    const d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "calendarsId" + "=" + CalID + ";" + expires + ";path=/";
        location.reload()
    }
};
// read cookie functie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}
//  here code for current events and current time (split it later for clean code)
// Function to fetch events and update time
function fetchEventsAndUpdateTime(calid) {
    // Fetch events from Google Calendar API
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 7); // change 7 to 3 or 4 if you notice inconsistencies again
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calid}@import.calendar.google.com/events?key=AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ&timeMin=${today}T00:00:00Z&timeMax=${tomorrowFormatted}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
            const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
            const filteredEvents = events.filter(function(event){return (!event.summary.includes("rt_"))});
            const now = new Date();
            let currentEvent = null;
            let upcomingEvent = null;
            /*events.forEach(event => {
                console.log(event.summary);
                console.log(event.start.dateTime);
                console.log(event.end.dateTime);
                }); */
            // Find the first event that is currently happening
            for (const event of filteredEvents) {
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
            
            if(!currentEvent){
                    // make src a variable and let default {be black}
                    let imagesrc = "https://fakeimg.pl/200x100/cccccc/fff";
                    const currentTime = new Date();
                    // local due to the breaks being in such format
                    const localTime = new Date().toLocaleTimeString('en-US', {hour12: false});
                    const breaks = {
                        "10:30": "10:50",
                        "12:20": "12:45",
                        "14:15": "14:30"
                    };
                    //put the conditions in an object literal for readability
                    const conditions = {
                        //is it weekend?
                        weekend: new Date().getDay() === 6 || new Date().getDay() === 0,
                        // is it break?
                        isInBreak: Object.entries(breaks).some(([start, end]) => {return localTime >= start && localTime <= end;}),
                        //isInFP: freePeriods.forEach(period => {console.log(period.block + period.startTime + period.endTime)})
                    };
                    // reorderment
                    if(conditions.weekend){
                        imagesrc = "weekend";//is it weekend
                    }else{ if(conditions.isInBreak){
                        imagesrc = "break";//is it break?
                        }else if(imagesrc == "freeperiod"){
                        imagesrc = "freeperiod";} // no event, no weekend and no break means no school (maybe add a free period check later)
                        else{imagesrc = "schoolover";}}
                        // actually set the source to the one deducted by last bit of code
                        document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
            }
            if (currentEvent) {
            //some code that be dem adaptiveicon
            // there do be a current
            // make src a variable and let default {be black}
                let imagesrc = "https://fakeimg.pl/200x100/cccccc/fff";
                imagesrc = "inschool";
                document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
            // the norma code now
                const eventTitle = currentEvent.summary;
                const eventStart = new Date(currentEvent.start.dateTime);
                const eventEnd = new Date(currentEvent.end.dateTime);
                const linkAndImage = getLinkAndImageForEvent(eventTitle);
                document.getElementById('adaptivebi').src = linkAndImage.imageSrc;
                eventButton.href = linkAndImage.link;
                const actualTitle = linkAndImage.actualName;
                // Display the current time in military format
                const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });


                // Display the current event and time in the container
                eventContainer.innerHTML = `
                    <h2>${actualTitle}</h2><p>(${currentEvent.location})</p>
                    <p>${eventStart.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} to ${eventEnd.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
                    <p>Time: ${currentTime}</p>
                    `;

                // Update the link and image for the event button based on the current event's title
                
            } else {
                const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                eventContainer.innerHTML = `<p>No ongoing events.</p><p>Time: ${currentTime}</p>`;
                eventButton.href = 'https://allfoy.github.io/libcafe/home/error1'; // Set a default link or disable the button if no ongoing event
            }
// here code for upcoming event and time remaining
            if (upcomingEvent && currentEvent) {
                const upcomingEventTitle = upcomingEvent.summary;
                const upcomingEventStart = new Date(upcomingEvent.start.dateTime);
                //console.log(currentEvent);
                const CurrentEventEnd = new Date(currentEvent.end.dateTime);
                const linkAndImage = getLinkAndImageForEvent(upcomingEventTitle);
                const upcomingActualTitle = linkAndImage.actualName;
                // Calculate the time until this event ends
                const timeUntilEndEvent = CurrentEventEnd - now;
                const hoursUntilEndEvent = Math.floor(timeUntilEndEvent / (1000 * 60 * 60));
                const minutesUntilEndEvent = Math.floor((timeUntilEndEvent % (1000 * 60 * 60)) / (1000 * 60));
                const secondsUntilEndEvent = Math.ceil((timeUntilEndEvent % (1000 * 60))/(1000));
                // Calculate the time until the upcoming event
                const timeUntilNextEvent = upcomingEventStart - now;
                const hoursUntilNextEvent = Math.floor(timeUntilNextEvent / (1000 * 60 * 60));
                const minutesUntilNextEvent = Math.floor((timeUntilNextEvent % (1000 * 60 * 60)) / (1000 * 60));
                const secondsUntilNextEvent = Math.ceil((timeUntilNextEvent % (1000 * 60)) / (1000));
                // Display the upcoming event and countdown in the container
                upcomingEventContainer.innerHTML = `
                    <h2>${upcomingActualTitle}</h2><p>(${upcomingEvent.location})</p>
                    <p>Time Until This Event Ends: ${hoursUntilEndEvent} h ${minutesUntilEndEvent} min ${secondsUntilEndEvent} s</p>
                    <p>Time Until Next Event: ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>
                `;
                if(hoursUntilEndEvent == hoursUntilNextEvent && minutesUntilEndEvent == minutesUntilNextEvent && secondsUntilEndEvent == secondsUntilNextEvent){
                    upcomingEventContainer.innerHTML = `
                    <h2>${upcomingActualTitle}</h2><p>(${upcomingEvent.location})</p>
                    <p>Time Until Next Event (no break): ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>
                `;
                }
            }   else if(upcomingEvent && !currentEvent){
                const upcomingEventTitle = upcomingEvent.summary;
                const upcomingEventStart = new Date(upcomingEvent.start.dateTime);
                const linkAndImage = getLinkAndImageForEvent(upcomingEventTitle);
                const upcomingActualTitle = linkAndImage.actualName;
                // Calculate the time until the upcoming event
                const timeUntilNextEvent = upcomingEventStart - now;
                const hoursUntilNextEvent = Math.floor(timeUntilNextEvent / (1000 * 60 * 60));
                const minutesUntilNextEvent = Math.floor((timeUntilNextEvent % (1000 * 60 * 60)) / (1000 * 60));
                const secondsUntilNextEvent = Math.ceil((timeUntilNextEvent % (1000 * 60))/(1000));
                // Display the upcoming event and countdown in the container
                upcomingEventContainer.innerHTML = `
                    <h2>${upcomingActualTitle}</h2><p>(${upcomingEvent.location})</p>
                    <p>Time Until Next Event: ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>
                `;

            } else {
                upcomingEventContainer.innerHTML = '<p>No upcoming events.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
        setTimeout(fetchEventsAndUpdateTime,1000,getCookie("calendarsId"))
}

// Initial fetch and time update
fetchEventsAndUpdateTime(getCookie("calendarsId"));

// Set up interval to update time every 1 second (adjust as needed)
//document.addEventListener("DOMContentLoaded", (event) => {
//    setInterval(fetchEventsAndUpdateTime(calendarId), 500);
//});
// here code for adaptive book
// Function to get the link and image for the event based on its title
function getLinkAndImageForEvent(title) {
    // Check if any keyword in the title matches, and return the corresponding link and image source
    for (const keyword in keywordLinks) {
        if (title.includes(keyword)) {
            return {
                link: keywordLinks[keyword].link,
                imageSrc: keywordLinks[keyword].imageSrc,
                actualName: keywordLinks[keyword].actualName
            };
        }
    }
    // Return a default link and image source if no match is found
    return {
        ...noBook,
        actualName: title
    };
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
function startendfree(calid1){
    // Get today's date and tomorrow's date in the format required by the Google Calendar API
    const today = new Date().toISOString().split('T')[0];
    // Fetch events from Google Calendar API and determine which events to display
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calid1}@import.calendar.google.com/events?key=AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ&timeMin=${today}T00:00:00Z&timeMax=${today}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
            const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
            const filteredEvents = events.filter(function(event){return (!event.summary.includes("rt_"))});
            const sortedEvents = filteredEvents.sort((a, b) => {
                const numA = parseInt(a.summary.match(/^\d+/)[0]); // Extract number from event title
                const numB = parseInt(b.summary.match(/^\d+/)[0]);
                return numA - numB; // Sort events based on the numbers in their titles
            });
            /* sortedEvents.forEach(event => {
            console.log(event.summary);
            console.log(event.start);
            console.log(event.end);
            }); */
    // logic for changing to tommorow if it's 10 min after finalevent
            const currentTime = new Date();
            const finalEvent = sortedEvents[sortedEvents.length - 1];
            if (finalEvent && finalEvent.end && finalEvent.end.dateTime) {
                const finalEventEndTime = new Date(finalEvent.end.dateTime);
                finalEventEndTime.setMinutes(finalEventEndTime.getMinutes() + 10); // Add 10 minutes to the final event end time
                if (currentTime >= finalEventEndTime) {
                    if(new Date().getDay() + 1 === 6){
                        document.getElementById('events-container').innerHTML = `<p>no events cuz tommorow be free</p>`;
                    }
                    else {
                        // Display events for tomorrow
                        displayTomorrowEvents(getCookie("calendarsId"));}
                } else {
                    // Display events for today
                    const firstEvent = sortedEvents[0];
                    const finalEvent = sortedEvents[sortedEvents.length - 1];
                    const freePeriods = findFreePeriods(sortedEvents);
                    displayEvents(firstEvent, finalEvent);
                    displayFreePeriods(freePeriods);
                }
            } else {
                document.getElementById('events-container').innerHTML = `no events today fella`;
            }        
        })
        .catch(error => console.error('Error fetching data:', error));
}
//startendfree(getCookie("calendarsId"))
// Display events for tomorrow
function displayTomorrowEvents(calid2) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    // Fetch events for tomorrow
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${calid2}@import.calendar.google.com/events?key=AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ&timeMin=${tomorrowFormatted}T00:00:00Z&timeMax=${tomorrowFormatted}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
            const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
            const filteredEvents = events.filter(function(event){return (!event.summary.includes("rt_"))});
            const sortedEvents = filteredEvents.sort((a, b) => {
                const numA = parseInt(a.summary.match(/^\d+/)[0]); // Extract number from event title
                const numB = parseInt(b.summary.match(/^\d+/)[0]);
                return numA - numB; // Sort events based on the numbers in their titles
            });

            const firstEvent = sortedEvents[0];
            const finalEvent = sortedEvents[sortedEvents.length - 1];
            const freePeriods = findFreePeriods(sortedEvents);
            if(firstEvent == undefined){
                document.getElementById('events-container').innerHTML = `<p>no events cuz tommorow be free</p>`;
            }else{
            displayEvents(firstEvent, finalEvent);
            displayFreePeriods(freePeriods);}
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
function findFreePeriods(events, firstEvent, finalEvent) {
    
    const freePeriods = [];
    let lastEventBlock = firstEvent;

    for (const event of events) {
        const eventBlock = parseInt(event.summary.match(/^\d+/)[0]);
        while (lastEventBlock < eventBlock - 1) {
            const block = lastEventBlock + 1;
            const startTime = getTimeForBlock(block).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });;
            const endTime = new Date(getTimeForBlock(block).getTime() + 45*60000).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });; // End time is 45 minutes after start time
            freePeriods.push({ block, startTime, endTime });
            lastEventBlock++;
        }
        lastEventBlock = eventBlock;
    }

    // Add the last block if it's a free period
    if (lastEventBlock < finalEvent) {
        const block = lastEventBlock + 1;
        const startTime = getTimeForBlock(block).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });;
        const endTime = new Date(getTimeForBlock(block).getTime() + 45*60000).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });; // End time is 45 minutes after start time
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
        console.log("you have " + freePeriods.length + " free period(s)");
        
        freePeriods.forEach(period => {
            var d = new Date();
            // currently manual but you could go function
            var timeFormatted = [d.getHours(),d.getMinutes()]
            timeFormatted[0] = (parseInt(timeFormatted[0]))*60;
            var timeFormatted = timeFormatted[0]+timeFormatted[1];
            var timeStart = period.startTime.split(":");
            timeStart[0] = (parseInt(timeStart[0]))*60;
            var timeEnd = period.endTime.split(":");
            timeEnd[0] = (parseInt(timeEnd[0]))*60;
            var timestarts = timeStart[0]+parseInt(timeStart[1]);
            var timeEnds = timeEnd[0]+parseInt(timeEnd[1]); 
            
            eventsContainer.innerHTML += `<p><strong>Block ${period.block}:</strong> ${period.startTime} to ${period.endTime}</p>`;
            // check if rn is between the free periods
            if (timestarts < timeFormatted && timeFormatted < timeEnds){
                document.getElementById('freeIcony').style.display = 'flex';
                console.log("it do be freeperiod");
                document.getElementById('freeIcony').src = "../img/icony/" + "freeperiod" + ".jpg";
            } else {
                document.getElementById('freeIcony').style.display = 'none';
                console.log("it don't be freeperiod");
            }
        });
        }
    }

// Helper function to get starttime for a given block number
function getTimeForBlock(block) {
    const blockStartTimes = ["00:00", "08:15", "09:00", "09:45", "10:50", "11:35", "12:45", "13:30", "14:30", "15:15", "16:00"];
    const [hours, minutes] = blockStartTimes[block].split(":");
    const startFP = new Date();
    startFP.setHours(parseInt(hours), parseInt(minutes), 0, 0); // Set hours, minutes, seconds, and milliseconds
    return startFP;
}

//here function for adaptiveicon
// for now it's directly in the code


/*function changeCalID(){
    var CalID = prompt("What is your calendarID?","allfoy");
    var user = 'unknown2'
    switch (CalID) {
        case 'kevin' : CalID = 'i32q28ad785oqs2dom81460a186j6uvr'; user = 'Kevin' ;break;
        case 'allfoy': CalID = 'kvme0ikmjq4825g8ee860tm058clorcg'; user = 'Allfoy';break;
        case 'myrthe': CalID = '32ddu2ndrbe8jtp1olg6rko3f5cntog3'; user = 'Myrthe';break;
		case 'troy'  : CalID = '3hvsosg4io5fdefbn66meln2un2hu33k'; user = 'Troy'  ;break;
        default      : CalID = 'kvme0ikmjq4825g8ee860tm058clorcg'; user = 'Allfoy';break;
        // we gonna make it remember allat later
    }
    console.log(CalID)
    document.getElementById('user').innerHTML = `${user}`;
    fetchEventsAndUpdateTime(CalID);
    startendfree(CalID);
}*/

