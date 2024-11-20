// color changer of backgroud

function red(){
    document.body.style.backgroundColor = "red";
}
function blue(){
    document.body.style.backgroundColor = "blue";
}
function yellow(){
    document.body.style.backgroundColor = "yellow";
}
function green(){
    document.body.style.backgroundColor = "green";
}
function orange(){
    document.body.style.backgroundColor = "orange";
}
function pink(){
    document.body.style.backgroundColor = "pink";
}
function Reset(){
    document.body.style.backgroundColor = "grey";
}

//STOPWATCH

var minutes = 0;
var seconds = 0;
var miliseconds = 0;
var getHtmlMin = document.getElementById('min');
var getHtmlSec = document.getElementById('sec');
var getHtmlMsec = document.getElementById('msec');
var interval;

function start() {
    interval = setInterval(function() {
        miliseconds++;
        
        if (miliseconds >= 100) {
            miliseconds = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        // Display the updated values with leading zeros
        getHtmlMsec.innerHTML = miliseconds.toString().padStart(2, '0');
        getHtmlSec.innerHTML = seconds.toString().padStart(2, '0');
        getHtmlMin.innerHTML = minutes.toString().padStart(2, '0');
    }, 10);

    document.getElementById('btn').disabled = true;
}

function pause() {
    clearInterval(interval);
    document.getElementById('btn').disabled = false;
}

function reset() {
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    // Reset display with leading zeros
    getHtmlMin.innerHTML = minutes.toString().padStart(2, '0');
    getHtmlSec.innerHTML = seconds.toString().padStart(2, '0');
    getHtmlMsec.innerHTML = miliseconds.toString().padStart(2, '0');
    document.getElementById('btn').disabled = false;
}

//CALCULATOR
function btn(value) {
    let a = document.getElementById('input');
    a.value += value;
}
function calculate(){
    let a = document.getElementById('input');
    a.value = eval(a.value);
}
function clearResult(){
    let a = document.getElementById('input');
    a.value = '';
}









