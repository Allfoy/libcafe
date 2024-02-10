function toggleIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.style.display = (iframe.style.display === 'none') ? 'flex' : 'none';
}

function hidey(goney) {
    var goner = document.getElementById(goney);
    if(goner.style.left === 0 + 'px'){goner.style.left= -280 + 'px';}
    else {goner.style.left = 0 + 'px'}
}