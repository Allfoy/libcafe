var menu = CMenu("#menu1").config({
    // totalAngle:"360",
    // spaceDeg: "0", //broken
    background: "#52302eBB",
    backgroundHover: "#52302eFF",
    // pageBackground:"transparent",
    diameter: "240",
    position: "right", // position is reversed
    // start:"0", //broken
    // horizontal:"true",
    // hideAfterClick:"true",
    menus: [
        {
            title: "Magister",
            icon: "icon-magister",
            href: {
                url: "https://porteum.magister.net/magister/#/vandaag/",
                blank: false,
            },
        },
        {
            title: "Schoolnnnn't",
            icon: "fa fa-folder",
            menus: [
                {
                    title: "Discord",
                    icon: "icon-discord",
                    href: {
                        url: "https://www.discord.com/channels/@me",
                        blank: false,
                    },
                },
                {
                    title: "Youtube",
                    icon: "icon-yt",
                    href: {
                        url: "https://www.youtube.com/",
                        blank: false,
                    },
                },
                {
                    title: "Whatsapp",
                    icon: "icon-whatsapp",
                    href: {
                        url: "https://web.whatsapp.com/",
                        blank: false,
                    },
                },
                {
                    title: "Anilist",
                    icon: "icon-anilist",
                    href: {
                        url: "https://anilist.co/home",
                        blank: false,
                    },
                },
                {
                    title: "Menu.sh",
                    icon: "fa fa-terminal",
                    click: function () {
                        window.location.href = "menubatch://runbatchfile";
                    },
                },
            ],
        },
        {
            title: "Controls",
            icon: "fa fa-folder",
            menus: [
                {
                    title: "use CAPS",
                    disabled:true,
                },
                {
                    title: "Z|menu",
                    disabled:true,
                },
                {
                    title: "A|adaptive",
                    disabled:true,
                },
                {
                    title: "S|Schedule",
                    disabled:true,
                },
                {
                    title: "X|settings",
                    disabled:true,
                },
                {
                    title: "C|hidden",
                    disabled:true,
                },
                {
                    title: "F|friend",
                    disabled:true,
                },{
                    title: "M|map",
                    disabled:true,
                },
            ]
        },
        {
            title: "Outlook",
            icon: "icon-outlook",
            href: {
                url: "https://outlook.live.com/mail/0/",
                blank: false,
            },
        },
        {
            title: "Examen",
            icon: "icon-examen",
            href: {
                url: "https://eindexamensite.nl/dashboard",
                blank: false,
            },
        },
        {
            title: "Priyo",
            icon: "icon-priyo",
            href: {
                url: "https://porteum.onderwijsportalen.nl/dashboard",
                blank: false,
            },
        },
        {
            title: "Numworks",
            icon: "icon-numworks",
            href: {
                url: "https://www.numworks.com/simulator/",
                blank: false,
            },
        },
        {
            title: "Noordhoff",
            icon: "icon-noordhoff",
            href: {
                url: "https://apps.noordhoff.nl/my/nl/bookshelf?redirectPath=%2Fhome%2Foverview&redirectPlatform=sep/",
                blank: false,
            },
        },
        {
            title: "Translate",
            icon: "icon-translate",
            href: {
                url: "https://translate.google.com/?sl=auto&tl=en&op=translate/",
                blank: false,
            },
        },
    ],
});

const centerPos = { x: "50%", y: "50%" };
let mousePos = { x: "50%", y: "50%" };

// Track mouse movement to store the latest mouse position
$(document).mousemove(function (e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
});

$(document).keydown(function (e) {
    if (e.key === "Z") {
        // Checks if 'Z' is pressed
        menu.show([mousePos.x, mousePos.y]); // Show the menu at the stored mouse position
        return false; // Prevents any default behavior (optional)
    }
});

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.show([mousePos.x, mousePos.y])
}
);

$("#shiftyr").click(function () {
    menu.show([centerPos.x, centerPos.y]);
    return false;
});

$(document).click(function () {
    menu.hide(); // Hide the menu on click
});

var makeItRain = function () {
    //clear out everything
    $(".rainny").empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 200) {
        //couple random numbers to use for various randomizations
        //random number between 98 and 1
        var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
        //random number between 5 and 2
        var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
        //increment
        increment += randoFiver;
        //add in a new raindrop with various randomizations to certain CSS properties
        drops +=
            '<div class="drop" style="left: ' +
            increment +
            "%; bottom: " +
            (randoFiver + randoFiver - 1 + 127) +
            "%; animation-delay: 0." +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"><div class="stem" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div><div class="splat" style="animation-delay: 0.' +
            randoHundo +
            "s; animation-duration: 0.5" +
            randoHundo +
            's;"></div></div>';
    }

    $(".rainny.front-row").append(drops);
};

setTimeout(makeItRain,2000)
