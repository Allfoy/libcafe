// here some code for the cookie
// this works by checking if this specific cookie exist, if it don't make one, another bit of code for switching
initiatef()
async function initiatef(){
    document.getElementById('dateInput').valueAsDate = new Date();
    keywordLinks = await fetch('../json/events.json').then(response => response.json())
}
function CalIDcookie(){
    if(!(document.cookie.split(";").some((item) => item.trim().startsWith("calendarsId" + "=")))){
        var CalID = prompt("What is your calendarID?","kvme0ikmjq4825g8ee860tm058clorcg");
        const d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "calendarsId" + "=" + CalID + ";" + expires + ";path=/";
        console.log("we have found a cookie: "+document.cookie);
        fetchEventsAndUpdateTime(getCookie("calendarsId"));
    }else{
        console.log("we have found the cookie:" + getCookie("calendarsId"));
        document.getElementById('events').innerHTML = ``;
        fetchEventsAndUpdateTime(getCookie("calendarsId"));
        // showTime();
    }
};


function fetchEventsAndUpdateTime(CalID) {
    // Fetch events from Google Calendar API
    const monday = getDatee(1);
    const friday = getDatee(5);
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${CalID}@import.calendar.google.com/events?key=AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ&timeMin=${monday}T00:00:00Z&timeMax=${friday}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
            let events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
            events = events.filter(function(event){return (!event.summary.includes("rt_"))});
            sortedEvents = events.sort((a, b) => {
                const dateA = new Date(a.start.dateTime); // Convert dateTime strings to Date objects
                const dateB = new Date(b.start.dateTime);
                return dateA - dateB; // Sort based on the dateTime
            });
            const eventsdiv = document.getElementById('events');
            arr = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
            for (i=0;i<5;i++) {
                eventsdiv.innerHTML += `<p class="days column${i+1}">${arr[i]}</p>`;
            }
            sortedEvents.forEach(event => {
                const startTime = new Date(event.start.dateTime).toLocaleTimeString().slice(0, -3);
                const endTime = new Date(event.end.dateTime).toLocaleTimeString().slice(0, -3);
                const day = new Date(event.start.dateTime).getDay();
                const row = event.summary.match(/\d+/)[0];
                const title = getLinkAndImageForEvent(event.summary);
                eventsdiv.innerHTML += 
                `<p class="time row${row}" title="${row}">${startTime} - ${endTime}</p>
                <p class="event column${day} row${row}" title="${event.location}">${title.actualName}${title.picto}</p>`;
            });
            let realDay = new Date().getDay(); // flag for which column
            const blockStartTimes = ["00:00", "08:15", "09:00", "09:45", "10:50", "11:35", "12:45", "13:30", "14:30", "15:15", "16:00"]
            for(i=0;i<blockStartTimes.length;i++){
                let d = new Date().toLocaleTimeString();
                d = d.slice(0,-3);
                if(d>=blockStartTimes[i]&&d<blockStartTimes[i+1]){
                    let nodeList = document.getElementsByClassName(`column${realDay} row${i}`);
                    for (let i = 0; i < nodeList.length; i++) {
                        nodeList[i].style.backgroundColor = "#7ae4ff";
                    }
                }
            }
		
		
		
		})
	};

// here some code for the cookie
// this works by checking if this specific cookie exist, if it don't make one, another bit of code for switching
function CalIDcookie2(){
    if(!(document.cookie.split(";").some((item) => item.trim().startsWith("friendcookie" + "=")))){
        prompt("you need to select a friend");
    }else{
        console.log("we have found the cookie:" + getCookie("friendcookie"));
        document.getElementById('events').innerHTML = ``;
        fetchEventsAndUpdateTime(getCookie("friendcookie"));
        showTime();
        const friendName = getName()
        document.getElementById('events').innerHTML += `<p class="friendName">${friendName}</p>`;
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

function showTime(){
    const timeLine = document.getElementById('timeLine');
    let d = new Date();
    d = d.toLocaleTimeString();
    d = d.slice(0,-3);
    timeLine.title=d;
    const min = tT(d)
    if (min<=tT('8:15')){ // 0:00 - 8:15
        timeLine.style.top = '0%';
        console.log('it be early');
        timeBox = document.getElementById('timeBox');
        timeBox.style.borderStyle = 'solid';
    }else if (min<=tT('10:30')){
        const empty = tT('8:15');
        const full = tT('10:30');
        let percentage = (100*(min-empty))/(full-empty);
        const minPP = 0; // f(0) = minPP
        const maxPP = 29; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else if (min<=tT('10:50')){
        let percentage = 100; // always 100% due to the break
        const minPP = 0; // f(0) = minPP
        const maxPP = 30.5; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else if (min<=tT('12:20')){
        const empty = tT('10:50');
        const full = tT('12:20');
        let percentage = (100*(min-empty))/(full-empty);
        const minPP = 30.5; // f(0) = minPP
        const maxPP = 49; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else  if (min<=tT('12:45')){
        let percentage = 100; //always 100% due to the break
        const minPP = 30.5; // f(0) = minPP
        const maxPP = 49; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else if (min<=tT('14:15')){
        const empty = tT('12:45');
        const full = tT('14:15');
        let percentage = (100*(min-empty))/(full-empty);
        const minPP = 49; // f(0) = minPP
        const maxPP = 69.7; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else if (min<=tT('14:30')){
        let percentage = 100;
        const minPP = 49; // f(0) = minPP
        const maxPP = 69.7; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b
        timeLine.style.top = percentage +'%';
    }else if (min<=tT('16:45')){
        const empty = tT('14:30');
        const full = tT('16:45');
        let percentage = (100*(min-empty))/(full-empty);
        const minPP = 69.7; // f(0) = minPP
        const maxPP = 100; //f(100) = maxPP
        percentage = ((maxPP-minPP)/100)*percentage+minPP; // y=rc*x+b, rc=(b-a)
        timeLine.style.top = percentage +'%';
    }else if(min>=tT('16:45')){// 16:45 - 23:59
        timeLine.style.top = '100%'
        console.log('it be late')
        timeBox = document.getElementById('timeBox');
        timeBox.style.borderStyle = 'solid';
    }
}

function tT(str){ // tT = translateTime
    str = str.split(':'); // so end up array 12 : 23
    str = parseInt(str[0])*60+parseInt(str[1]);
    return str;
}
function getLinkAndImageForEvent(title) {
    // Check if any keyword in the title matches, and return the corresponding link and image source
    for (const keyword in keywordLinks) {
        if (title.includes(keyword)) {
            if(!(keywordLinks[keyword].actualName.includes('Workshop'))){
                return {
                    link: keywordLinks[keyword].link,
                    imageSrc: keywordLinks[keyword].imageSrc,
                    actualName: keywordLinks[keyword].actualName,
                    picto: keywordLinks[keyword].picto
                };
            }else{
                return {
                    link: keywordLinks[keyword].link,
                    imageSrc: keywordLinks[keyword].imageSrc,
                    actualName: keywordLinks[keyword].actualName + ' ' + title.slice(11,12),
                    picto: keywordLinks[keyword].picto
                };
            }
        }
    }
    // Return a default link and image source if no match is found
    return {
        ...noBook,
        actualName: title,
        picto:''
    };
}

function getName(){
    const friendcookie = getCookie('friendcookie');
    switch (friendcookie) {
        case '0pspeo6e4k6e329k4h56mkam0k9t6gnq':
            return 'Casper'
        case 'i32q28ad785oqs2dom81460a186j6uvr':
                return 'Kevin'
        case 'kvme0ikmjq4825g8ee860tm058clorcg':
                return 'Allfoy'
        case '3hvsosg4io5fdefbn66meln2un2hu33k':
                return 'Troy'
        case '32ddu2ndrbe8jtp1olg6rko3f5cntog3':
            return 'Myrthe'
        case 'k1jvlnvnatotdc1rkba5tkevo8r98gjk':
                return 'Onah'
            default:
            return 'who dis?'
    }
};

function getDatee(day){
    const chosenDateObject = new Date(document.getElementById("dateInput").value);
    let dayzDate = new Date(chosenDateObject); 
    dayzDate.setDate(chosenDateObject.getDate() - chosenDateObject.getDay() + (chosenDateObject.getDay() === 0 ? day-7 : day));
    const dayz = dayzDate.toISOString().split('T')[0];
    return dayz
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'M':
            window.location.href = "../map";
        break;
        case 'H':
            window.location.href = "../home";
        break;
        case 'F':
            window.location.href = "../friend";
        break;
    }
});