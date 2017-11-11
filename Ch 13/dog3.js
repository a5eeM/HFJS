// Dog Constructor

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

console.log(Dog.prototype);

Dog.prototype.species = "Canine";

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
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
// Spot's own bark function
spot.bark = function() {
    console.log(this.name + " says WOOF!");
}

// create another Dog instance
var barnaby = new Dog("Barnaby", "Basset Hound", 55);

// add another method to Dog prototype which every Dog instance then will automatically inherit
Dog.prototype.sit = function() {
    console.log(this.name + " is now sitting!");
};

fido.bark();
fido.run();
fido.wag();
fido.sit();

fluffy.bark();
fluffy.run();
fluffy.wag();
fluffy.sit();

spot.bark();
spot.run();
spot.wag();
spot.sit();

barnaby.bark();
barnaby.run();
barnaby.wag();
barnaby.sit();