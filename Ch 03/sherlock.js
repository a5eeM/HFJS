var balance = 10500; // actual balance
var cameraOn = true;

function steal(balance, amount) {
    cameraOn = false;
    if (amount < balance) {
        balance = balance - amount;
        // balance in local scope, not the same as the actual balance
        console.log(balance);
    }
    
    return amount;
    cameraOn = true;
}

var amount = steal(balance, 1250);
alert("Criminal: you stole " + amount + "!");
// actual balance remains unaffected, pass by value
console.log(balance);