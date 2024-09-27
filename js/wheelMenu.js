var menu = CMenu("#menu1")

.config({
    menus: [
        {
            title: "Magister",
            icon: "my-icon icon3",
            href:{
                url: "https://porteum.magister.net/magister/#/vandaag",
                blank: true
                }
        },
        {
            title: "Noordhoff",
            icon: "my-icon icon1",
            href:{
                url: "https://apps.noordhoff.nl/my/nl/bookshelf?redirectPath=%2Fhome%2Foverview&redirectPlatform=sep",
                blank: true
                }
        }, 
        {
            title: "More",
            icon: "fa fa-folder",
            menus: [
                    {
                        disabled: true,
                        title: "disabled",
                        icon: "fa fa-ban"
                    },
                    {
                        disabled: true,
                        title: "disabled",
                        icon: "fa fa-ban"
                    },
                ]
        },
        {
            title: "Translate",
            icon: "my-icon icon4",
            href:{
                url: "https://translate.google.com/?sl=auto&tl=en&op=translate",
                blank: true
                }
        },
        {
            disabled: true,
            title: "disabled",
            icon: "fa fa-ban"
        },
        {
            title: "Numworks",
            icon: "my-icon icon2",
            href:{
                url: "https://www.numworks.com/simulator/",
                blank: true
                }
        },
        {
            disabled: true,
            title: "disabled",
            icon: "fa fa-ban"
        },
        {
            disabled: true,
            title: "disabled",
            icon: "fa fa-ban"
        },
    ]
})



let mousePos = { x: 0, y: 0 };

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