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

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    
    ships: [
        {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        },
        
        {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        },
        
        {
            locations: [0, 0, 0],
            hits: ["", "", ""]
        }
    ],
    
    fire: function(guess) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            //var locations = ship.locations;
            var index = ship.locations.indexOf(guess);
            
            if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true; // important
            } else if (index >= 0) {
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
    },
    
    generateShipLocations: function() {
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    },
    
    generateShip: function() {
        var direction = Math.floor(Math.random() * 2);
        var row, col;
        
        if (direction === 1) { // horizontal
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
            col = Math.floor(Math.random() * (this.boardSize));
        }
        
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },
    
    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};


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


// helper function to parse a guess from the user
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


// event handlers
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

// init - called when the page completes loading
window.onload = init;

function init() {
    var fireButton =  document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    // place ships on board
    model.generateShipLocations();
}