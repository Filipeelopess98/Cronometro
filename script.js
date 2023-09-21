let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let stopwatch

document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => stop();
document.form_main.reset.onclick = () => reset();

function start() {

    stopwatch = setInterval(() => { time(); }, 10);
}

function stop() {
    clearInterval(stopwatch);
}

function reset() {
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.querySelector(".hours").innerHTML = '00';
    document.querySelector(".minutes").innerHTML = '00';
    document.querySelector(".seconds").innerHTML = '00';
    document.querySelector(".milliseconds").innerHTML = '000';
}

function time() {
    if ((milliseconds += 10) == 1000) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    document.querySelector(".hours").innerHTML= returnData(hours);
    document.querySelector(".minutes").innerHTML= returnData(minutes);
    document.querySelector(".seconds").innerHTML= returnData(seconds);
    document.querySelector(".milliseconds").innerHTML = returnData(milliseconds);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}