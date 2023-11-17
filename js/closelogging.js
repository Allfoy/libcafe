function openWinNh() {
  var newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Check the URL at intervals and close the window if it contains '/content/'
  var interval = setInterval(function() {
    if (newWindow.location.href.indexOf("/content/") !== -1) {
      newWindow.close();
      clearInterval(interval); // Stop checking once closed
    }
  }, 2000); // Adjust the interval as needed; adjust to every 2 seconds
}
