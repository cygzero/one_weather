function setTimer() {
    var timer = new Date();
    var timetxt = document.getElementById("timer");
    var day;
    var minute;
    if (timer.getMinutes() < 10) {
        minute = "0" + timer.getMinutes();
    }
    else {
        minute = timer.getMinutes();
    }
    switch (timer.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
    }
    timetxt.innerHTML = day + " " + timer.getHours() + ":" + minute;
}
setInterval(function () {
    setTimer();
}, 1000);