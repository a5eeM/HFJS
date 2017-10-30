window.onload = init;

function display(text) {
    var message = document.getElementById("message");
    message.innerHTML = message.innerHTML + "<br />" + text;
}

var tick = true;

function ticker() {
    if (tick) {
        display("tick");
        tick = false;
    } else {
        display("tock");
        tick = true;
    }
}

function init() {
    setInterval(ticker, 1000);
}