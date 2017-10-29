var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    
    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};

/*
// testing view
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Tap tap, is this thing on?")
*/

/*
// Ship objects
var ship1 = {
    locations: ["10", "20", "30"],
    hits: ["", "", ""]
};

var ship2 = {
    locations: ["22", "32", "34"],
    hits: ["", "", ""]
};

var ship3 = {
    locations: ["63", "64", "65"],
    hits: ["", "", ""]
};
*/

/*
// this ships array will be added to model object as a property!
var ships = [
    {
        locations: ["10", "20", "30"],
        hits: ["", "", ""]
    },
    
    {
        locations: ["32", "33", "34"],
        hits: ["", "", ""]
    },
    
    {
        locations: ["63", "64", "65"],
        hits: ["", "", "hit"]
    }
];
*/

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    
    ships: [
        {
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }
    ],
    
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            //var locations = ship.locations;
            var index = ship.locations.indexOf(guess);
            if (index >= 0) {
                ship.hits[index] = "hit";
                
                // notify the view that we got a hit at the location in guess
                // and ask the view to display the message "Hit!"
                view.displayHit(guess);
                view.displayMessage("HIT!");
                
                // check whether the ship has sunk, if yes then add it to the number of ships sunk.
                if (this.isSunk(ship)) {
                    // let player know this hit sank the battlship
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        
        // notify the view we got a miss at the location in guess
        // and ask the view to display the message "You missed."
        view.displayMiss(guess);
        view.displayMessage("You missed.");
        return false;
    },
    
    isSunk: function(ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
                }
        }
        return true;
    }
};

/*
// testing model
model.fire("53");

model.fire("06");
model.fire("16");
model.fire("26");

model.fire("34");
model.fire("24");
model.fire("44");

model.fire("12");
model.fire("11");
model.fire("10");
*/

var controller = {
    guesses: 0,
    
    processGuess: function(guess) {
        var location = parseGuess(guess);
        if (location) { // check for valid location object, if we get null its not valid
            this.guesses++;
            var hit = model.fire(location);
            
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my batleships, in " + 
                                   this.guesses + " guesses");
            }
        }
        
    }
};

function parseGuess(guess) {
    // helper array
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    
    if (guess === null || guess.length !== 2) {
        alert("Oops, please enter a letter and a number on the board.");
    } else {
        var firstChar = guess.charAt(0); // grab the first character of the guess
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1); // grab the second character
        
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize ||
                  column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}

/*
// test parseGuess
console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0"));
console.log(parseGuess("A7"));

*/

/*
// test controller
controller.processGuess("A0");

controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");

controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");

controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");
*/

function init() {
    var fireButton =  document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
}

function handleFireButton() {
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    
    // pass it to the controller
    controller.processGuess(guess);
    // revert back
    guessInput.value = "";
}

function handleKeyPress(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;