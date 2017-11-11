// Game constructor
function Game() {
    this.level = 0
}

Game.prototype.play = function() {
    // player plays game here
    this.level++;
    console.log("Welcomt to level " + this.level);
    this.unlock();
};

Game.prototype.unlock = function() {
    // this -> Game
    if (this.level >= 42) {
        Robot.prototype.deployLaser = function() {
            // this -> Robot
            console.log(this.name + " is blasting you with laser beams.");
        }
    }
};

// Robot constructor
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

var game = new Game();
var robby = new Robot("Robby", 1956, "Dr. Morbius");
var rosie = new Robot("Rosie", 1962, "George Jetson");

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();