function toggleIframe(iframeId) {
    var iframe = document.getElementById(iframeId);
    iframe.style.display = (iframe.style.display === 'none') ? 'flex' : 'none';
}
// doesn't work yet
document.addEventListener("DOMContentLoaded", function(){locateybbat();mobilemode()});


//this only does verticals
function locateybbat(){
    var ybbat = document.getElementById('ybbat');
    var tabby = document.getElementById('tabby');
    var theight = tabby.offsetHeight;
    var ttop = tabby.offsetTop;
    tabby.style.height = 'auto';
    //var tapp = tabby.offsetHeight;
    //console.log(tapp,theight,ybbat.style.top);
    ybbat.style.top= ttop + theight + 50 +'px';
}

function mobilemode(){
if ((window.innerWidth <= 1500) || (window.innerHeight <= 700)){
    console.log("your screen is smaller: " + window.innerWidth +" by "+ window.innerHeight);
    // relocate the tabs
    var ybbat = document.getElementById('ybbat');
    var tabby = document.getElementById('tabby');
    tabby.style.position = 'absolute';
    ybbat.style.position = 'absolute';
    tabby.style.top = 4900 +'px';
    ybbat.style.top = 5100 +'px';
    // relocat the adaptiveicon 
    var icony = document.getElementById('icony');
    icony.style.top = 5300 + 'px';
    icony.style.right = 500 + 'px'; //a few ig
    // relocate the weekday
    var dayimage = document.getElementById('dayimage');
    dayimage.style.top = 5100 + 'px';
} else {console.log("your screen is default");}

}

// this only does horizontals
function hidey(goney) {
    var goner = document.getElementById(goney);
    var width = goner.offsetWidth;
    console.log(width);
    if(goner.style.left === 0 + 'px'){goner.style.left= - width + 20 + 'px';}
    else {goner.style.left = 0 + 'px'}
}

// size detection( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
