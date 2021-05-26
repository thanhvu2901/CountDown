var setday = "1 january 2022";
const daySet = new Date(setday);

var daysset = document.getElementById("days");
var hoursset = document.getElementById("hours");
var minsset = document.getElementById("mins");
var secondsset = document.getElementById("seconds");
//var daysset = document.getElementById("day");
//console.log(daysset);


function countdown() {
    //  const daySet = new Date(setday);
    const currentDay = new Date();
    const mul = daySet - currentDay;
    var seconds_temp = mul / 1000;
    const daysmul = Math.floor((seconds_temp / 60) / 60 / 24);
    const hoursmul = Math.floor(seconds_temp / 60 / 60) % 24;
    const minsmul = Math.floor(seconds_temp / 60) % 60;
    const secondsmul = Math.floor(seconds_temp % 60);

    console.log(daysmul, hoursmul, minsmul, secondsmul);

    daysset.innerHTML = format(daysmul);
    hoursset.innerHTML = format(hoursmul);
    minsset.innerHTML = format(minsmul);
    secondsset.innerHTML = format(secondsmul);


}

function format(time) {
    return (time < 10) ? (`0${time}`) : time;
}
//countdown();
window.setInterval(countdown, 1000); //loop each time