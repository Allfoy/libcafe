
// the weekday code
document.addEventListener('DOMContentLoaded', function() {
getweekday()
function getweekday(){
const weekdays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let weekday = weekdays[new Date().getDay()];
document.getElementById('weekday').innerHTML = weekday;
}

})