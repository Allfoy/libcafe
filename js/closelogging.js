function openWinNh() {
  var newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Set a timeout to close the window after 16 seconds
  setTimeout(function() {
    newWindow.close();
  }, 16000); // 16 seconds in milliseconds
}
