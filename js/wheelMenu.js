var menu = CMenu("#menu1")

.config({
    menus: [
        {
            title: "map",
            icon: "none",
            href:{
                url: "../map",
                blank: true
                }
        },
        {
            title: "woahh",
            icon: ["my-icon icon1"],
        }, 
        {
            title: "More??",
            icon: "my-icon icon1",
            menus: [
                    {
                        title: 'subMenu1',
                        icon: 'none'
                    },
                    {
                        title: 'subMenu2',
                        icon: 'fa fa-none'
                    }
                ]
        },
        {
            title: "crazy",
            icon: "my-icon icon1"
        },
        {
            title: "click",
            icon: "my-icon icon1"
        },
        {
            title: "numworks",
            href: "#class:~:text=switch%20user-,numworks"
        },
        {
            title: "clickMe!",
            click: function() {
                alert('click event callback');
            }
        },
        {
            disabled: true,
            title: "disabled"
        }
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
      menu.show([mousePos.x, mousePos.y]);  // Show the menu at the stored mouse position
      return false;  // Prevents any default behavior (optional)
    }
});

$(document).click(function() {
    menu.hide();  // Hide the menu on click
});