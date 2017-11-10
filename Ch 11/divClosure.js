// without closure
/*
var count = 0;

window.onload = function() {
    var button = document.getElementById("clickme");
    button.onclick = handleClick;
};

function handleClick() {
    var message = "You clicked me ";
    var div = document.getElementById("message");
    count++;
    div.innerHTML = message + count + " times!";
}
*/

// with closure

window.onload = function() {
    var count = 0;
    var button = document.getElementById("clickme");
    button.onclick = function() {
        var message = "You clicked me ";
        var div = document.getElementById("message");
        count++;
        div.innerHTML = message + count + " times!";
    }
}
