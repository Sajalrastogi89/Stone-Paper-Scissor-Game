let count1=0;let count2=0;let id1;let id2;
let x = document.getElementById("first");
const slideshowdiv = document.querySelectorAll("#bg-image div");
const nextImagewait = 4000;
let currentImage = 15;
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
    id1="stone1";
    y = randomNumber();
    decisionStone(y);
}
function Paper() {
    document.getElementById("paper1").style.marginLeft = "190px";
   id1="paper1";
    y = randomNumber();
    decisionPaper(y);
}
function Scissor() {
    document.getElementById("scissor1").style.marginLeft = "190px";
    id1="scissor1";
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
            id2="stone2";
            break;
        case 1:
            document.getElementById("paper2").style.marginRight = "190px";
            id2="paper2"
            break;
        case 2:
            document.getElementById("scissor2").style.marginRight = "190px";
            id2="scissor2";
            break;
    }
}

function decisionStone(d) {
    switch (d) {
        case 0:
            alert("Draw");
          
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
           
            alert("Draw");

    }



}
function user() {
    document.getElementById("item-1").innerHTML = ++count1;
}
function computer() {
    document.getElementById("item-2").innerHTML = ++count2;
}
// function Draw() {
//     document.getElementById("item-1").innerHTML = ++count1;
//     document.getElementById("item-2").innerHTML = count;
// }
function defaultLocation(){
document.getElementById(id1).style.marginLeft = 0;
document.getElementById(id2).style.marginRight = 0;
}
