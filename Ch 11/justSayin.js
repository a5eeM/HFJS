var beingFunny = true;
var notSoMuch = false;
var phrase = "Yo";

function justSayin(phrase) {
    var ending = "";
    if (beingFunny) {
        ending = " -- I'm just sayin!";
    } else if (notSoMuch) {
        ending = " -- Not so much.";
    }
    
    alert(phrase + ending);
}

justSayin(phrase);