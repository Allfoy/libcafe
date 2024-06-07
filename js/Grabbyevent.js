//const apiKey = 'AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ';
//let calendarId = 'kvme0ikmjq4825g8ee860tm058clorcg';
// object literal with keywords and their respective links
const noBook = {link: 'https://allfoy.github.io/libcafe/home/error2', imageSrc: '../img/bg.jpg'};
const keywordLinks = {
    'entl': {
        link: 'https://apps.noordhoff.nl/se/content/book/4e33ffb8-40c9-45fa-a67c-eae545d7dbea/ebooks/d6cafc0b-fb70-438c-8668-c017ee87ff73',
        imageSrc: '../img/covers/ENG.jpeg',
        actualName: 'English',
        picto : '🍵'
    },
    'nat': {
        link: 'https://e-book.boomdigitaal.nl/boek/9789464420180?layoutmode-double=1/sso',
        imageSrc: '../img/covers/physics.jpg',
        actualName: 'Physics',
        picto : '🍎'
    },
    'schk': {
        link: 'https://apps.noordhoff.nl/se/content/book/3d237f12-c196-4650-839c-bea7f798792e/ebooks/3847b67a-6f0b-4d10-9f5e-d485d7496fda',
        imageSrc: '../img/covers/CHEM.jpeg',
        actualName: 'Chemistry',
        picto : '🧪'
    },
    'biol': {
        link: 'https://apps.noordhoff.nl/se/content/book/3c9f39f7-6a4b-4403-a898-508d1ddcf68f/ebooks/2afd6210-0fb1-4007-8d2a-b63ef7cad649',
        imageSrc: '../img/covers/BIO.jpeg',
        actualName: 'Biology',
        picto : '🌱'
    },
    'netl': {
        link: 'https://apps.noordhoff.nl/se/content/book/a904673b-f07d-480a-8201-57b56d94112b/ebooks/89f0e06c-3f93-403f-9804-04bad7a197de',
        imageSrc: '../img/covers/DUTCH.jpeg',
        actualName: 'Dutch',
        picto : '🌷'
    },
    'sptl': {
        link: 'https://apps.noordhoff.nl/se/content/book/443fbd5e-bef7-4222-ae56-f41d5e83e468/ebooks/5569eff5-1057-4de0-8129-e3e703fbf89e',
        imageSrc: '../img/covers/SPAN.jpeg',
        actualName: 'Spanish',
        picto : '🐂'
    },
    'wisb': {
        link: 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
        imageSrc: '../img/covers/MATHB.jpeg',
        actualName: 'Mathematics B',
        picto : '🧮'
    },
    'wisd': {
        link: 'https://apps.noordhoff.nl/se/content/book/4acdfa97-1845-4bf6-8320-10181b908e29/ebooks/a476fd26-1eeb-4c59-979c-16b971e37cc1',
        imageSrc: '../img/covers/MATHD.jpeg',
        actualName: 'Mathematics D',
        picto : '🧮'
    },
    'me': {
        ...noBook,
        actualName: 'Mentorles',
        picto : ''
    },
    'maat': {
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/MAAT.jpg',
        actualName: 'Social studies',
        picto : '🌎'
    },
    'ckv':{
        ...noBook,
        actualName: 'CKV',
        picto : '🎥'
    },
    'rt':{
        ...noBook,
        actualName: 'Route-uur',
        picto : '🥱'
    },
    'wisa':{
        ...noBook,
        actualName: 'Mathematics A',
        picto : '🧮'
    },
    'econ':{
        ...noBook,
        actualName: 'Economics',
        picto : '💸'
    },
    'lo':{
        ...noBook,
        actualName: 'PE',
        picto : '🏀'
    },
    'kumu':{
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/music.png',
        actualName: 'Music',
        picto : '🎼'
    },
    'kubv':{
        ...noBook,
        actualName: 'Sketchy',
        picto : '✏️🕶️🕵️'
    },
    'kua':{
        link: 'https://allfoy.github.io/libcafe/home/error2',
        imageSrc: '../img/covers/KUA.jpg',
        actualName: 'General Arts',
        picto : '🎨'
    },
    'ak':{
        ...noBook,
        actualName: 'Geography',
        picto : '🪨'
    },
    'ges':{
        ...noBook,
        actualName: 'History',
        picto : '🕰️'
    },
    'maw':{
        ...noBook,
        actualName: 'Social sciences',
        picto : '🤓'
    },
    '-wi':{
        link: 'https://apps.noordhoff.nl/se/content/book/0818ce8f-cdb6-468d-b160-6874cfda8372/ebooks/e4405ab2-d6f8-4f64-abf9-d0d327474ab2',
        imageSrc: '../img/covers/MATHB.jpeg',
        actualName: 'Mathematics rt',
        picto : '🧮'
    },
    'CKV':{
        ...noBook,
        actualName: 'CKV event',
        picto : '🎥'
    },
    'Zelfstudie':{
        ...noBook,
        actualName: 'Zelfstudie',
        picto : '📖'
    },
    'exact':{
        ...noBook,
        actualName: 'Exact',
        picto : '🎯'
    },'fatl':{
        ...noBook,
        actualName:'French',
        picto : '🥐'
    },'delf':{
        ...noBook,
        actualName:'French crazy mode',
        picto : '🥐'
    }
    // Add more keywords and links for silly guy
};
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
};
function CalIDcookie2(){
    if(!(document.cookie.split(";").some((item) => item.trim().startsWith("friendcookie" + "=")))){
        alert("you need to select a friend in the finder");
        sleep(2000);
        window.location.replace("https://allfoy.github.io/libcafe/home/");
    }else{
        console.log("we have found the cookie:" + getCookie("friendcookie"));
        fetchEventsAndUpdateTime(getCookie("friendcookie"));
        startendfree(getCookie("friendcookie"));
    }
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
            //code for binary conditions
            // first digit 0 declaration starts
                // make src a variable and let default {be black}
                let imagesrc = "error";
                // local due to the breaks being in such format
                const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
                //code for the time since it's shown in all 4 cases
                document.getElementById('time-container').innerHTML = `<p>Time: ${currentTime}</p>`;
                const breaks = {
                    "10:30": "10:50",
                    "12:20": "12:45",
                    "14:15": "14:30"
                };
                const conditions = {//put the conditions in an object literal for readability
                    weekend: new Date().getDay() === 6 || new Date().getDay() === 0, //is it weekend?
                    isInBreak: Object.entries(breaks).some(([start, end]) => {return currentTime >= start && currentTime <= end;}), // is it break?
                    isBeforeSchool: new Date().toLocaleTimeString() <= new Date(filteredEvents[0].start.dateTime).toLocaleTimeString(),
                    isAfterSchool: new Date().toLocaleTimeString() >= new Date(filteredEvents[filteredEvents.length-1].end.dateTime).toLocaleTimeString(),
                };
            // first digit 0 declaration ends
            // first digit 1 declaration starts
                let linkAndImage;
            // first digit 1 declaration ends
            // second digit any declaration starts
                let timeUntilEndEvent;
                let hoursUntilEndEvent;
                let minutesUntilEndEvent;
                let secondsUntilEndEvent;
                let timeUntilNextEvent;
                let hoursUntilNextEvent;
                let minutesUntilNextEvent;
                let secondsUntilNextEvent;
            // second digit any declaration ends
            let conditionkey = (currentEvent ? 2 : 0) + (upcomingEvent ? 1 : 0); // turn currentEvent and upcomingEvents existancy into a decimal representation of binary
            switch (conditionkey) {
                case 3://situation 11=3
                    // first digit 1 code starts
                        linkAndImage = getLinkAndImageForEvent(currentEvent.summary);
                        imagesrc = "inschool";
                        document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
                        document.getElementById('adaptivebi').src = linkAndImage.imageSrc;
                        document.getElementById('event-button').href = linkAndImage.link;
                        document.getElementById('classIcon').innerHTML = linkAndImage.picto;
                        // Display the current event and time in the container
                        if(!(document.getElementById('event-container').innerHTML === `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${currentEvent.location})</p>`)){
                        document.getElementById('event-container').innerHTML = `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${currentEvent.location})</p>`;
                        }
                        document.getElementById('countdown-container').innerHTML = `<p>${new Date(currentEvent.start.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} to ${new Date(currentEvent.end.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>`;
                    // first digit 1 code ends
                    // double digit 11 code starts
                        linkAndImage = getLinkAndImageForEvent(upcomingEvent.summary);
                        // Calculate the time until this event ends
                        msInHour = 60 * 60 * 1000;
                        msInMinute = 60 * 1000;
                        msInSecond = 1000;
                        timeUntilEndEvent = new Date(currentEvent.end.dateTime) - now;
                        hoursUntilEndEvent = Math.floor(timeUntilEndEvent / msInHour);
                        minutesUntilEndEvent = Math.floor((timeUntilEndEvent % msInHour) / msInMinute);
                        secondsUntilEndEvent = Math.ceil((timeUntilEndEvent % msInMinute) / msInSecond);
                        // Calculate the time until the upcoming event
                        timeUntilNextEvent = new Date(upcomingEvent.start.dateTime) - now;
                        hoursUntilNextEvent = Math.floor(timeUntilNextEvent / msInHour);
                        minutesUntilNextEvent = Math.floor((timeUntilNextEvent % msInHour) / msInMinute);
                        secondsUntilNextEvent = Math.ceil((timeUntilNextEvent % msInMinute) / msInSecond);              // Display the upcoming event and countdown in the container
                        if (!(document.getElementById('upcoming-event-container').innerHTML === `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`)){
                        document.getElementById('upcoming-event-container').innerHTML = `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`
                        }
                        document.getElementById('countdown-container').innerHTML = `
                            <p>Time Until This Event Ends: ${hoursUntilEndEvent} h ${minutesUntilEndEvent} min ${secondsUntilEndEvent} s</p>
                            <p>Time Until Next Event: ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>
                        `
                        if(hoursUntilEndEvent == hoursUntilNextEvent && minutesUntilEndEvent == minutesUntilNextEvent && secondsUntilEndEvent == secondsUntilNextEvent){
                            document.getElementById('countdown-container').innerHTML = `<p>Time Until Next Event (no break): ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>`;
                        }
                    // double digit 11 code ends
                break;
                case 1://situation 01=1
                    // first digit 0 code starts
                        if(conditions.weekend){
                            imagesrc = "weekend";//is it weekend
                            }else if(conditions.isInBreak){
                            imagesrc = "break";//is it break?
                            }else if(conditions.isBeforeSchool){
                            imagesrc = "beforeschool";
                            }else if(conditions.isAfterSchool){imagesrc = "afterschool";}
                            document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
                            if(!(document.getElementById('event-container').innerHTML === `<p>No ongoing events.</p>`)){
                                document.getElementById('event-container').innerHTML = `<p>No ongoing events.</p>`;
                            }
                        document.getElementById('event-button').href = 'https://allfoy.github.io/libcafe/home/error1'; // Set a default link or disable the button if no ongoing event
                    // first digit 0 code ends
                    // double digit 01 code starts
                        linkAndImage = getLinkAndImageForEvent(upcomingEvent.summary);
                        // Calculate the time until the upcoming event
                        msInHour = 60 * 60 * 1000;
                        msInMinute = 60 * 1000;
                        msInSecond = 1000;
                        timeUntilNextEvent = new Date(upcomingEvent.start.dateTime) - now;
                        hoursUntilNextEvent = Math.floor(timeUntilNextEvent / msInHour);
                        minutesUntilNextEvent = Math.floor((timeUntilNextEvent % msInHour) / msInMinute);
                        secondsUntilNextEvent = Math.ceil((timeUntilNextEvent % msInMinute) / msInSecond);
                        // Display the upcoming event and countdown in the container
                        if(!(document.getElementById('upcoming-event-container').innerHTML === `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`)){
                            document.getElementById('upcoming-event-container').innerHTML = `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`;
                        }
                        document.getElementById('countdown-container').innerHTML = `<p>Time Until Next Event: ${hoursUntilNextEvent} h ${minutesUntilNextEvent} min ${secondsUntilNextEvent} s</p>`
                    // double digit 01 code ends
                break;
                case 2://situation 10=2
                    // first digit 1 code starts
                        linkAndImage = getLinkAndImageForEvent(currentEvent.summary);
                        imagesrc = "inschool";
                        document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
                        document.getElementById('adaptivebi').src = linkAndImage.imageSrc;
                        document.getElementById('event-button').href = linkAndImage.link;
                        document.getElementById('classIcon').innerHTML = linkAndImage.picto;
                        // Display the current event and time in the container
                        if(!(document.getElementById('event-container').innerHTML === `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`)){
                            document.getElementById('event-container').innerHTML = `<h2>${linkAndImage.actualName}${linkAndImage.picto}</h2><p>(${upcomingEvent.location})</p>`;
                        }
                        document.getElementById('countdown-container').innerHTML = `<p>${new Date(currentEvent.start.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} to ${new Date(currentEvent.end.dateTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>`;
                    // first digit 1 code ends
                    //double digit 10 code starts
                        if(!(document.getElementById('upcoming-event-container').innerHTML === '<p>No upcoming events.</p>')){
                        document.getElementById('upcoming-event-container').innerHTML = '<p>No upcoming events.</p>';
                        }
                    //double digit 10 code ends
                break;
                default:// situation 00 = 0
                    // first digit 0 code starts
                    if(conditions.weekend){
                        imagesrc = "weekend";//is it weekend
                        }else if(conditions.isInBreak){
                        imagesrc = "break";//is it break?
                        }else if(conditions.isBeforeSchool){
                        imagesrc = "beforeschool";
                        }else if(conditions.isAfterSchool){imagesrc = "afterschool";}
                        document.getElementById('icony').src = "../img/icony/" + imagesrc + ".jpg";
                        if(!(document.getElementById('event-container').innerHTML === `<p>No ongoing events.</p>`)){
                        document.getElementById('event-container').innerHTML = `<p>No ongoing events.</p>`;
                        }
                        document.getElementById('event-button').href = 'https://allfoy.github.io/libcafe/home/error1'; // Set a default link or disable the button if no ongoing event
                    // first digit 0 code ends
                    //double digit 00 code starts
                        if(!(document.getElementById('upcoming-event-container').innerHTML === '<p>No upcoming events.</p>')){
                        document.getElementById('upcoming-event-container').innerHTML = '<p>No upcoming events.</p>';
                        }
                    //double digit 00 code ends
                break;
            }
        })
        .catch(error => {
            console.error('Error fetching events:', error);
        });
        setTimeout(fetchEventsAndUpdateTime,1000,calid)
}

// here code for adaptive book
// Function to get the link and image for the event based on its title
function getLinkAndImageForEvent(title) {
    // Check if any keyword in the title matches, and return the corresponding link and image source
    for (const keyword in keywordLinks) {
        if (title.includes(keyword)) {
            return {
                link: keywordLinks[keyword].link,
                imageSrc: keywordLinks[keyword].imageSrc,
                actualName: keywordLinks[keyword].actualName,
                picto: keywordLinks[keyword].picto
            };
        }
    }
    // Return a default link and image source if no match is found
    return {
        ...noBook,
        actualName: title,
        picto:''
    };
}


// Function to redirect to the link associated with the current event's title
function redirectToLink() {
    // Check if the button is disabled (no ongoing event) before redirecting
    if (document.getElementById('event-button').href !== '#') {
        window.location.href = document.getElementById('event-button').href;
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
    const firstInfo = getLinkAndImageForEvent(firstEvent.summary);
    const finalInfo = getLinkAndImageForEvent(finalEvent.summary);

    eventsContainer.innerHTML = `
        <h2>Today's Events</h2>
        <p><strong>First Event:</strong> ${firstInfo.actualName}${firstInfo.picto}, <strong>Start Time:</strong> ${formattedStartTime}</p>
        <p><strong>Final Event:</strong> ${finalInfo.actualName}${finalInfo.picto}, <strong>End Time:</strong> ${formattedEndTime}</p>
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
    let flag = true;
    if (freePeriods.length === 0) {
        eventsContainer.innerHTML += '<p>No free periods found.</p>';
    } else {
        console.log("you have " + freePeriods.length + " free period(s)");
        
        freePeriods.forEach(period => {
            var d = new Date();
            // currently manual but you could go function
            var timeFormatted = tT(d.getHours()+':'+d.getMinutes())
            var timeStart = tT(period.startTime);
            var timeEnd = tT(period.endTime); 
            //console.log(timeStart, timeFormatted, timeEnd)
            eventsContainer.innerHTML += `<p><strong>Block ${period.block}:</strong> ${period.startTime} to ${period.endTime}</p>`;
            // check if rn is between the free periods
            if(flag){
                if (timeStart < timeFormatted && timeFormatted < timeEnd){
                    document.getElementById('freeIcony').style.display = 'flex';
                    //console.log("it do be freeperiod");
                    flag = false;
                    document.getElementById('freeIcony').src = "../img/icony/" + "freeperiod" + ".jpg";
                } else {
                    document.getElementById('freeIcony').style.display = 'none';
                    //console.log("it don't be freeperiod");
                }
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

function tT(str){ // tT = translateTime
    str = str.split(':'); // so end up array 12 : 23
    str = parseInt(str[0])*60+parseInt(str[1]);
    return str;
}