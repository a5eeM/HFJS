function addN(n) {
    var adder = function(x) {
        return n + x;
    };
    
    return adder;
}

// use case
var a = addN(5);
console.log(a(4));