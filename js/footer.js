function Clock(){
    const d = new Date();
    const hours = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours();
    const minutes = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
    document.getElementById("clock").innerHTML= hours + ':' + minutes;
    setTimeout(Clock,500)
}

function Datey(){
    // make work
    const d= new Date();
    const month = (d.getMonth() < 10) ? '0' + d.getMonth() : d.getMonth();
    const date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    const day = d.toString().split(' ')[0];
    document.getElementById("date").innerHTML = day + ' ' + date + '/' + month;
}


Clock();
Datey();