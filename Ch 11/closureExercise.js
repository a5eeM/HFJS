// make password

function makePassword(password) {
    return function guess(passwordGuess) {
        return (passwordGuess === password);
    };
}

/*
// ES6
function makePassword(password) {
    return (passwordGuess) => {
        return (passwordGuess === password);
    };
}
*/

var tryGuess = makePassword("secret");
console.log("Guessing 'nope': " + tryGuess("nope"));
console.log("Guessing 'secret': " + tryGuess("secret"));

// multN

function multN(n) {
    return function multBy(num) {
        return num * n;
    };
}

var multBy4 = multN(4);
console.log("Multiplying 2: " + multBy4(2));
console.log("Multiplying 3: " + multBy4(3));

/*
// ES6
function multN(n) {
    return (num) => {
        return num * n;
    };
}
*/

// counter-modified

function makeCounter() {
    var count = 0;
    
    return {
        increment: function() {
            count = count + 1;
            return count;
        }
    };
}

// ES6
/*
function makeCounter() {
    var count = 0;
    
    return {
        increment: () => {
            return count + 1;
        }
    };
}
*/

var incr = makeCounter();
console.log(incr.increment());
console.log(incr.increment());
console.log(incr.increment());