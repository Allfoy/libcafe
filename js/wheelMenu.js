var menu = CMenu("#menu1")

.config({
    // totalAngle:"360",
    // spaceDeg: "0", //broken
    background:"#52302eBB",
    backgroundHover:"#52302eFF",
    // pageBackground:"transparent",
    diameter:"240",
    position:"right",
    // start:"0", //broken
    // horizontal:"true",
    // hideAfterClick:"true",
    menus: [
        {
            title: "Magister",
            icon: "icon-magister",
            href:{
                url: "https://porteum.magister.net/magister/#/vandaag/",
                blank: true
                }
        },
        {
            title: "Schooln't",
            icon: "fa fa-folder",
            menus: [
                    {
                        title: "Discord",
                        icon: "icon-discord",
                        href:{
                            url: "https://www.discord.com/channels/@me",
                            blank: true
                            }
                    },
                    {
                        title: "Youtube",
                        icon: "icon-yt",
                        href:{
                            url: "https://www.youtube.com/",
                            blank: true
                            }
                    },
                    {
                        title: "Whatsapp",
                        icon: "icon-whatsapp",
                        href:{
                            url: "https://web.whatsapp.com/",
                            blank: true
                            }
                    },
                    {
                        title: "Anilist",
                        icon: "icon-anilist",
                        href:{
                            url: "https://anilist.co/home",
                            blank: true
                            }
                    },
                ]
        },
        {
            title: "Outlook",
            icon: "icon-outlook",
            href:{
                url: "https://outlook.live.com/mail/0/",
                blank: true
                }
        },
        {
            title: "Numworks",
            icon: "icon-numworks",
            href:{
                url: "https://www.numworks.com/simulator/",
                blank: true
                }
        },
        {
            title: "Noordhoff",
            icon: "icon-noordhoff",
            href:{
                url: "https://apps.noordhoff.nl/my/nl/bookshelf?redirectPath=%2Fhome%2Foverview&redirectPlatform=sep/",
                blank: true
                }
        }, 
        {
            title: "Translate",
            icon: "icon-translate",
            href:{
                url: "https://translate.google.com/?sl=auto&tl=en&op=translate/",
                blank: true
                }
        },
    ]
})



let mousePos = { x: '50%', y: '50%' };

  // Track mouse movement to store the latest mouse position
$(document).mousemove(function(e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
});

$(document).keydown(function(e) {
    if (e.key === 'Z') {  // Checks if 'Z' is pressed
        console.info(e)
      menu.show([mousePos.x, mousePos.y]);  // Show the menu at the stored mouse position
      return false;  // Prevents any default behavior (optional)
    }
});

$(document).click(function() {
    menu.hide();  // Hide the menu on click
});