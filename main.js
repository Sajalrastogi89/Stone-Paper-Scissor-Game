let x = document.getElementById("first");
const slideshowdiv = document.querySelectorAll("#bg-image div");
const nextImagewait = 4000;
let currentImage = 0;
slideshowdiv[currentImage].style.opacity = 1;

setInterval(nextImage, nextImagewait);
function nextImage() {

    currentImage = (currentImage + 1) % (slideshowdiv.length);
    slideshowdiv[currentImage].style.opacity = 0;
    slideshowdiv[currentImage].style.opacity = 1;
    if ((currentImage >= 0 && currentImage < 5) || (currentImage > 19 && currentImage <= 24)) {
        changeColor();

    }
    else {
        originalColor();
    }
}

function changeColor() {

    x.style.color = "#fff";
}
function originalColor() {
    x.style.color = "#000";
}
let y;
function Stone() {
    document.getElementById("stone1").style.marginLeft = "190px";
    y = randomNumber();
    decisionStone(y);
}
function Paper() {
    document.getElementById("paper1").style.marginLeft = "190px";
    y = randomNumber();
    decisionPaper(y);
}
function Scissor() {
    document.getElementById("scissor1").style.marginLeft = "190px";
    y = randomNumber();
    decisionScissor(y);
}
function randomNumber() {
    let a = Math.floor(Math.random() * 3);
    computerDecision(a);
    return a;

}
function computerDecision(b) {
    switch (b) {
        case 0:
            document.getElementById("stone2").style.marginRight = "190px";
            break;
        case 1:
            document.getElementById("paper2").style.marginRight = "190px";
            break;
        case 2:
            document.getElementById("scissor2").style.marginRight = "190px";
            break;
    }
}

function decisionStone(d) {
    switch (d) {
        case 0:
            alert("Draw");
            Draw();
            break;
        case 1:
            alert("You Lost");
            computer();
            break;
        case 2:

            alert("Congratulations");
            user();
    }
}
function decisionPaper(d) {
    switch (d) {
        case 0:
            alert("Congratulations");

            user();
            break;
        case 1:
            alert("Draw");

            Draw();
            break;
        case 2:
            alert("You Lost");
            computer();
    }
}
function decisionScissor(d) {
    switch (d) {
        case 0:
            alert("You Lost");
            computer();
            break;
        case 1:
            alert("Congratulations");
            user();
            break;
        case 2:
            Draw();
            alert("Draw");

    }



}
function user() {
    document.getElementById("item-1").innerHTML = 1;
}
function computer() {
    document.getElementById("item-2").innerHTML = 1;
}
function Draw() {
    document.getElementById("item-1").innerHTML = 1;
    document.getElementById("item-2").innerHTML = 1;
}
