var word = "bottles";
var count = 99;

while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    // if value is still greater than zero but not 1
    if (count > 0 && count !== -1) {
        console.log(count + " " + word + " of beer on the wall.");
    } else if (count === 1) { // if 1 bottle is left, change the value of word
        word = "bottle";
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        word = "bottles";
        console.log("No more " + word + " of beer on the wall.");
    }
}