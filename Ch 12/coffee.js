function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    
    //ES6
    /*
    this.size = () => {
        if (this.ounces == 16) {
            return "large";
        } else if (this.ounces == 12) {
            return "medium"
        } else {
            return "small";
        }
    };
    
    this.toString = () => {
        return "You've ordered a " + this.size()
        + " " + this.roast + " coffee.";
    }
    */
    
    // ES5
    
    this.getSize = function() {
        if (this.ounces === 16) {
            return "large";
        } else if (this.ounces === 12) {
            return "medium";
        } else {
            return "small";
        }
    };
    
    this.toString = function() {
        return "You've ordered a " + this.getSize()
        + " " + this.roast + " coffee.";
    }
}

var houseBlend = new Coffee("House Blend", 12);
console.log(houseBlend.toString());

var darkRoast = new Coffee("Dark Roast", 16);
console.log(darkRoast.toString());