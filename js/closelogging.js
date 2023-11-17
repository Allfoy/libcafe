function openWinNh() {
  var newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Check if the URL contains '/content/' when the window is about to unload
  newWindow.onbeforeunload = function() {
    if (newWindow.location.href.indexOf("/content/") !== -1) {
      newWindow.close();
    }
  };
}
