
// the weekday code
document.addEventListener('DOMContentLoaded', function() {getweekday()})

function getweekday(){
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let weekday = weekdays[new Date().getDay()];
document.getElementById('weekday').innerHTML = weekday;
}