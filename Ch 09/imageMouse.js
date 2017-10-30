window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reBlur;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    // console.log(eventObj.type);
    
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
    
    //setTimeout(reBlur, 2000, image);
}

function reBlur(eventObj) {
    var image = eventObj.target;
    var name = image.id; // image = eventObj.target; => name = eventObj.target.id;
    name = name + "blur.jpg";
    image.src = name;
}
