function toggleIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.style.display = (iframe.style.display === 'none') ? 'flex' : 'none';
}

function hidey(tabb){
    var bbat = document.getElementsByClassName(tabb);
    bbat.style.left = -500; // Changes the left property of the asked elementclass
}
