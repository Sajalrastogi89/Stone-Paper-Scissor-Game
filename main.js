let x=document.getElementById("first");
const slideshowdiv=document.querySelectorAll("#bg-image div");
const nextImagewait = 4000;
let currentImage=0;
slideshowdiv[currentImage].style.opacity = 1;

setInterval(nextImage, nextImagewait);
function nextImage(){
    slideshowdiv[currentImage].style.opacity =0;
    currentImage=(currentImage+1)%(slideshowdiv.length);
    slideshowdiv[currentImage].style.opacity = 1;
    if((currentImage>=0 && currentImage<5) || (currentImage>19 && currentImage<=24)){
       changeColor();
      
    }
    else{
        originalColor();
    }
}

function changeColor(){

x.style.color="#fff";
}
function originalColor(){
    x.style.color="#000";
}
