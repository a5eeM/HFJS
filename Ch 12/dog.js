// Dog constructor
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

// construc new Dog objects

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new  Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var dogs = [fido, fluffy, spot];

for (var i = 0; i < dogs.length; i++) {
    var size = "small";
    console.log(dogs[i]);
    if (dogs[i].weight > 10) {
        size = "large";
    }
    console.log("Dog: " + dogs[i].name
               + " is a " + size
               + " " + dogs[i].breed);
}