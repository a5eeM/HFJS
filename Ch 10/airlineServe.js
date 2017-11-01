var passengers = [
    {
        name: "Jane Dollop",
        paid: true,
        ticket: "coach"
    },
    
    {
        name: "Dr. Evel",
        paid: true,
        ticket: "firstclass"
    },
    
    {
        name: "Sue Property",
        paid: false,
        ticket: "firstclass"
    },
    
    {
        name: "John Funcall",
        paid: true,
        ticket: "premium"
    }
];

function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
            return false;
        }
    }
    return true;
}

// returns true if the person is on the no fly list
function checkNoFlyList(passenger) {
    return (passenger.name === "Dr. Evel");
}

// returns true if the person has not paid the fees
function checkNotPaid(passenger) {
    return !passenger.paid;
}

// display passengers name
function printPassenger(passenger) {
    if (!passenger.paid) {
        console.log(passenger.name + " has not paid.");
    } else {
        console.log(passenger.name + " has paid.");
    }
    
    return false;
}


var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
    console.log("The plane can't take off: we have a passenger on the no-fly list.");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
    console.log("The plane can't take off: not everyone has paid.")
}

processPassengers(passengers, printPassenger);

// server passengers

function serveCustomer(passenger) {
    var getDrinkOrderFunction = createDrinkOrder(passenger);
    var getDinnerOrderFunction = createDinnerOrder(passenger);
    // get dinner order
    getDinnerOrderFunction();
    
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

function createDrinkOrder(passenger) {
    /*
    // use first class functions
    if (passenger.ticket === "firstclass" ) {
        alert("Would you like a cocktail or wine?");
    } else {
        alert("Your choice is cola or water,");
    }
    */
    var orderFunction;
    
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like a cocktail or wine?");
        };
    } else if (passenger.ticket ==="premium") {
        orderFunction = function() {
            alert("Would you like wine, cola or water?");
        };
    } else {
        orderFunction = function() {
            alert("Your choice is cola or water.");
        };
    }
    
    return orderFunction;
}

function createDinnerOrder(passenger) {
    var orderFunction; 
    
    if (passenger.ticket === "firstclass") {
        orderFunction = function() {
            alert("Would you like chicken or pasta?");
        };
    } else if (passenger.ticket === "premium") {
        orderFunction = function() {
            alert("Would you like a snack box or cheese plate?");
        };
    } else {
        orderFunction = function() {
            alert("Your choice is peanuts or pretzels.");
        };
    }
    
    return orderFunction;
}

function servePassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
        testFunction(passengers[i]);
    }
}

servePassengers(passengers, serveCustomer);