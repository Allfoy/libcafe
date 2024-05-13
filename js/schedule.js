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
        showTime()
    }
        //'kevin' : CalID = 'i32q28ad785oqs2dom81460a186j6uvr'; user = 'Kevin' ;break;
        //'allfoy': CalID = 'kvme0ikmjq4825g8ee860tm058clorcg'; user = 'Allfoy';break;
        //'myrthe': CalID = '32ddu2ndrbe8jtp1olg6rko3f5cntog3'; user = 'Myrthe';break;
		//'troy'  : CalID = '3hvsosg4io5fdefbn66meln2un2hu33k'; user = 'Troy'  ;break;
};

document.getElementById('dateInput').valueAsDate = new Date();

function fetchEventsAndUpdateTime(CalID) {
    // Fetch events from Google Calendar API
	// Get today's date and tomorrow's date in the format required by the Google Calendar API
	const today = new Date().toISOString().split('T')[0];
    //get and convert user inputted date
    const dateChosen = document.getElementById("dateInput").value;
    const chosenDate = new Date(dateChosen);
    const chosenday = chosenDate.getDay();
    const minDate = new Date().setDate(chosenDate.getDate()-chosenday+1); // so tuesday chosenday=2, -2+1= -1 and 2-1=1=monday
    const maxDate = new Date().setDate(chosenDate.getDate()-chosenday+5); // so tuesday chosenday=2, -2+1 = -1 and 2-1=1= monday, +4=friday
    const minday = new Date(minDate).toISOString().split('T')[0];
    const maxday = new Date(maxDate).toISOString().split('T')[0];
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${CalID}@import.calendar.google.com/events?key=AIzaSyCaky52HRXhv-E5bIuHt5uvWlGPoA-YmvQ&timeMin=${minday}T00:00:00Z&timeMax=${maxday}T23:59:59Z`)
        .then(response => response.json())
        .then(data => {
			const events = data.items.filter(event => /^\d/.test(event.summary)); // Filter events starting with a number
			const sortedEvents = events.sort((a, b) => {
            const numA = parseInt(a.summary.match(/^\d+/)[0]); // Extract number from event title
            const numB = parseInt(b.summary.match(/^\d+/)[0]);
            return numA - numB; // Sort events based on the numbers in their titles
        });
        const eventsdiv = document.getElementById('events');
        for (i=0;i<5;i++) {
            arr = ['Monday','Tuesday','Wednesday','Thursday','Friday'];
            eventsdiv.innerHTML += `<p class="days column${i+1}">${arr[i]}</p>`;
        }

        sortedEvents.forEach(event => {
            const startTime = new Date(event.start.dateTime).toLocaleTimeString().slice(0, -3);
            const endTime = new Date(event.end.dateTime).toLocaleTimeString().slice(0, -3);
            const day = new Date(event.start.dateTime).getDay();
            const row = event.summary.match(/\d+/)[0];
            const title = getLinkAndImageForEvent(event.summary);
            eventsdiv.innerHTML += 
            `<p class="time row${row}" title="${day}">${startTime} - ${endTime}</p>
            <p class="event column${day} row${row}" title="${event.location}">${title.actualName}${title.picto}</p>`;
        });
		
		
		
		
		})
	};

// here some code for the cookie
// this works by checking if this specific cookie exist, if it don't make one, another bit of code for switching
function CalIDcookie2(){
    if(!(document.cookie.split(";").some((item) => item.trim().startsWith("friendcookie" + "=")))){
        prompt("you need to select a friend");
    }else{
        console.log("we have found the cookie:" + getCookie("friendcookie"));
        fetchEventsAndUpdateTime(getCookie("friendcookie"));
        showTime();
        const friendName = getName()
        document.getElementById('events').innerHTML += `<p class="friendName">${friendName}</p>`;
    }
        //'kevin' : CalID = 'i32q28ad785oqs2dom81460a186j6uvr'; user = 'Kevin' ;break;
        //'allfoy': CalID = 'kvme0ikmjq4825g8ee860tm058clorcg'; user = 'Allfoy';break;
        //'myrthe': CalID = '32ddu2ndrbe8jtp1olg6rko3f5cntog3'; user = 'Myrthe';break;
		//'troy'  : CalID = '3hvsosg4io5fdefbn66meln2un2hu33k'; user = 'Troy'  ;break;
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

const keywordLinks = {
    'entl': {
        actualName: 'English',
        picto : '🍵'
    },
    'nat': {
        actualName: 'Physics',
        picto : '🍎'
    },
    'schk': {
        actualName: 'Chemistry',
        picto : '🧪'
    },
    'biol': {
        actualName: 'Biology',
        picto : '🌱'
    },
    'netl': {
        actualName: 'Dutch',
        picto : '🌷'
    },
    'sptl': {
        actualName: 'Spanish',
        picto : '🐂'
    },
    'wisb': {
        actualName: 'Mathematics B',
        picto : '🧮'
    },
    'wisd': {
        actualName: 'you’ve been π-d',//'Mathematics D',
        picto : '🧮'
    },
    'me': {
        actualName: 'Mentorles',
        picto : ''
    },
    'maat': {
        actualName: 'Social studies',
        picto : '🌎'
    },
    'ckv':{
        actualName: 'CKV',
        picto : '🎥'
    },
    'rt':{
        actualName: 'Route-uur',
        picto : '🥱'
    },
    'wisa':{
        actualName: 'Mathematics A',
        picto : '🧮'
    },
    'econ':{
        actualName: 'Economics',
        picto : '💸'
    },
    'lo':{
        actualName: 'PE',
        picto : '🏀'
    },
    'kumu':{
        actualName: 'Music',
        picto : '🎼'
    },
    'kua':{
        actualName: 'General Arts',
        picto : '🎨'
    },
    'ak':{
        actualName: 'Geography',
        picto : '🪨'
    },
    'ges':{
        actualName: 'History',
        picto : '🕰️'
    },
    'maw':{
        actualName: 'Social sciences',
        picto : '🤓'
    },
    '-wi':{
        actualName: 'Mathematics rt',
        picto : '🧮'
    },
    'CKV':{
        actualName: 'CKV event',
        picto : '🎥'
    },
    'Zelfstudie':{
        actualName: 'Zelfstudie',
        picto : '📖'
    },
    'exact':{
        actualName: 'Exact',
        picto : '🎯'
    },'fatl':{
        actualName:'French',
        picto : '🥐'
    },'delf':{
        actualName:'French crazy mode',
        picto : '🥐'
    }
    // Add more keywords and links for silly guy
};

function getLinkAndImageForEvent(title) {
    // Check if any keyword in the title matches, and return the corresponding link and image source
    for (const keyword in keywordLinks) {
        if (title.includes(keyword)) {
            return {
                actualName: keywordLinks[keyword].actualName,
                picto: keywordLinks[keyword].picto
            };
        }
    }
    // Return a default link and image source if no match is found
    return {
        actualName: title,
        picto:''
    };
}

function getName(){
    const friendcookie = getCookie('friendcookie');
    switch (friendcookie) {
        case '0pspeo6e4k6e329k4h56mkam0k9t6gnq':
            return 'Casper'
        break;
        case 'i32q28ad785oqs2dom81460a186j6uvr':
                return 'Kevin'
        break;
        case 'kvme0ikmjq4825g8ee860tm058clorcg':
                return 'Allfoy'
        break;
        case '3hvsosg4io5fdefbn66meln2un2hu33k':
                return 'Troy'
        break;
        case '32ddu2ndrbe8jtp1olg6rko3f5cntog3':
                return 'Myrthe'
        break;
        default:
            return 'who dis?'
        break;
    }
};