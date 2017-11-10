/*
// ES5
window.onload = function() {
    var button = document.getElementById("bake");
    button.onclick = function() {
        console.log("Time to bake the cookies.");
        cookies.bake(2500);
    }
};

var cookies = {
    instructions: "Preheat oven to 350...",
    bake: function(time) {
        console.log("Baking the cookies.");
        setTimeout(function() {
            alert("Cookies are ready, take them out to cool.");
            console.log("Cooling the cookies.");
            setTimeout(function() {
                alert("Cookies are cool, time to eat!");
            }, 1000);
        }, time);
    }
};
*/

// ES6

window.onload = () => {
    var button = document.getElementById("bake");
    button.onclick = () => {
        console.log("Time to bake the cookies.");
        cookies.bake(2500);
    }
};

const cookies = {
    instructions: "Preheat the cookies.",
    bake: (time) => {
        console.log("Baking the cookies.");
        setTimeout(() => {
            alert("Cookies are ready, take them out to cool.");
            console.log("Cooling the cookies.");
            setTimeout(() => {
                alert("Cookies are cool, time to eat!");
            }, 2000);
        }, time);
    }
};