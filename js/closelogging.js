function openWinNh() {
  let newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Check if the URL contains '/content/' and close the window if true
  newWindow.addEventListener("load", function() {
    if (newWindow.location.href.includes("/content/")) {
      newWindow.close();
    }
  });
}
