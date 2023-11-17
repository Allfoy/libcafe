function openWinNh() {
  var newWindow = window.open('', '_blank', 'width=850,height=500,left=350,top=150');

  // Set the URL after opening to avoid opening a blank tab
  newWindow.location.href = 'https://apps.noordhoff.nl/se/home/overview';

  // Event listener for the button click (anchor tag in this case)
  var anchorTag = document.querySelector('.emotion-cache-166vfo4'); // Replace with the actual class
  anchorTag.addEventListener('click', function() {
    // Check if the URL contains '/content/' when the button is clicked
    if (newWindow.location.href.indexOf("/content/") !== -1) {
      newWindow.close();
    }
  });
}
