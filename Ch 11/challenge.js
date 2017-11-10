// Specimen 1
/*
var secret = "007"

function getSecret() {
    var secret = "008";
    
    function getValue() {
        return secret;
    }
    
    return getValue();
}

getSecret();
*/


// Specimen 2

var secret = "007";

function getSecret() {
    var secret = "008";
    
    function getValue() {
        return secret;
    }
    
    return getValue;
}

var getValueFun = getSecret();
getValueFun();
console.log(getValueFun());