var winner = function() {
    alert("WINNER!");
};

var loser = function() {
    alert("LOSER!");
};

// let's test as a warm up
winner();

// let's assign to other variables for practice

var a = winner;
var b = loser;
var c = loser;

a();
b();

// now lets' try your luck with a shell game

c = a;
a = b;
b = c;
c = a;
a = c;
a = b;
b = c;

a();