/*
String.prototype.palindrome = function() {
    var len = this.length - 1;
    for (var i = 0; i < len/2; i++) {
        if (this.charAt(i) !== this.charAt(len - i)) {
            return false;
        }
    }
    return true;
}
*/

// preferred solution
String.prototype.palindrome = function() {
    if (this.split("").reverse().join("") === this.valueOf()) {
        return true;
    } else {
        return false;
    }
}

console.log("aseem".palindrome());

var phrases = [
    "eve",
    "kayak",
    "mom",
    "wow",
    "noon",
    "Not a palindrome"
];

for (var i = 0; i < phrases.length; i++) {
    var phrase = phrases[i];
    if (phrase.palindrome()) {
        console.log("'" + phrase + "' is a palindrome");
    } else {
        console.log("'" + phrase + "' is NOT a palindrome");
    }
}