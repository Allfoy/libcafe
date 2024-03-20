function toggleIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.style.display = (iframe.style.display === 'none') ? 'flex' : 'none';
}
// doesn't work yet
document.addEventListener("DOMContentLoaded", function(){locateybbat();});

function locateybbat(){
    var ybbat = document.getElementById('ybbat');
    var tabby = document.getElementById('tabby');
    var theight = tabby.offsetHeight;
    var ttop = tabby.offsetTop;
    tabby.style.height = 'auto';
    var tapp = tabby.offsetHeight;
    //console.log(tapp,theight,ybbat.style.top);
    ybbat.style.top= ttop + theight + 50 +'px';
}

function hidey(goney) {
    var goner = document.getElementById(goney);
    var width = goner.offsetWidth;
    console.log(width);
    if(goner.style.left === 0 + 'px'){goner.style.left= - width + 20 + 'px';}
    else {goner.style.left = 0 + 'px'}
}