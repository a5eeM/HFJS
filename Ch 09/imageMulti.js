window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
}

function showAnswer(eventObj) {
    var image = eventObj.target;
    // console.log(eventObj.type);
    
    var name = image.id;
    name = name + ".jpg";
    image.src = name;
    
    setTimeout(reBlur, 2000, image);
}

function reBlur(image) {
    var name = image.id;
    name = name + "blur.jpg";
    image.src = name;
}



