// Dog constructor
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;

Dog.prototype.sit = function() {
    if (this.sitting) {
        console.log(this.name + " is already sitting.");
    } else {
        this.sitting = true;
        console.log(this.name + " is now sitting.");
    }
};

Dog.prototype.bark = function() {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};

Dog.prototype.run = function() {
    console.log("Run!");
};

Dog.prototype.wag = function() {
    console.log("Wag!");
}
// showDog constructor
function ShowDog(name, breed, weight, handler) {
    /*
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    */
    // we will call the 'call' function on Dog which will handle the assignments
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

// making ShowDog prototype an instance of Dog
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog; // make sure constructor property is correct

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function() {
    console.log("Stack!");
};

ShowDog.prototype.bait = function() {
    console.log("Bait!");
};

ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing!");
};

ShowDog.prototype.groom = function() {
    console.log("Groom!");
};

// creating new objects
var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

// spot's own bark method
spot.bark = function() {
    console.log(this.name + " says WOOF!");
};

var scotty = new ShowDog("Scooty", "Scottish Terrier", 15, "Cookie");
var beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");

fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();

scotty.gait("Walk");
beatrice.groom();
scotty.stack();
console.log(scotty.league);
console.log(scotty.species);