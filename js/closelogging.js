/* function openWin() {
    openLogging = window.open('https:/apps.noordhoff.nl/se/home/overview','_blank','width=850,height=500,left=350,top=150');
}

    // Get the URL from the specific window
var windowUrl = openLogging.location.href;

// Check if "/content/" be present in the URL
if (windowUrl.indexOf("/content/") !== -1) {
    window.close();
}*/
function openWinNh() {
    // Open the window and store the reference(meaning assign a var)
    var openLogging = window.open('https://apps.noordhoff.nl/se/home/overview', '_blank', 'width=850,height=500,left=350,top=150');

    // Set up a message event listener
    window.addEventListener('message', function(event) {
        // Check if the message contains the desired URL
        if (event.data.indexOf("/content/") !== -1) {
            openLogging.close();
        }
    });

    // Periodically post a message to the opened window to check its URL
    var checkUrlInterval = setInterval(function() {
        openLogging.postMessage('Check URL', 'file:///C:/Users/Dell/Downloads/AnimatedBooks/AnimatedBooks/index2.html');
    }, 1000); // Check every 1000 milliseconds (1 second)
}


