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
function Stone() {
    document.getElementById("stone1").style.marginLeft = "190px";
randomNumber();
}
function Paper() {
    document.getElementById("paper1").style.marginLeft = "190px";
    randomNumber();
}
function Scissor() {
    document.getElementById("scissor1").style.marginLeft = "190px";
    randomNumber();
}
function randomNumber(){
    let a=Math.floor(Math.random()*3);
 computerDecision(a);
}
function computerDecision(b){
switch(b){
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