function bake(degrees) {
    var message;
    
    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);
    }
    
    return message;
}

function setMode(mode) { };
function setTemp(temperature) { };

var status = bake(350);
console.log(status);
