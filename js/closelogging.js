function openWinNh() {
  // Open the window with the specified link
  let newWindow = window.open("https://apps.noordhoff.nl/se/home/overview");

  // Check if the URL contains '/content/' and close the window if true
  newWindow.addEventListener("load", function() {
    if (newWindow.location.href.includes("/content/")) {
      newWindow.close();
    }
  });
}
