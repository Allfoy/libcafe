function openWinNh() {
  var newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Set an interval to send a message to the original window every second
  var interval = setInterval(function() {
    if (newWindow.location.href.indexOf("/content/") !== -1) {
      clearInterval(interval); // Stop the interval if the condition is met
      newWindow.close();
    } else {
      // Send a message to the console of the original window
      window.opener.console.log("Checking the URL...");
    }
  }, 1000); // Every second
}
