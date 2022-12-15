const interval = 3000;
let currentIndex = 0;
let images = ["assets/alumni1.png", "assets/alumni2.png", "assets/alumni3.png"]
let texts = ["Felicia Putri Tjiasaka, Co-founder at Ternak Uang", "Charles Lim, Founder & CEO IDgroup at Companies", "Co-founder & CEO at NusaTalent Side Jobs"]
function changeImage(){
    currentIndex = (currentIndex + 1) % images.length;
    
    const imageElement = document.getElementById("changing-image");
    const textElement = document.getElementById("change-text");

    imageElement.style.opacity = 0;
    textElement.style.opacity = 0;

    setTimeout(function() {
        imageElement.src = images[currentIndex];
        textElement.textContent = texts[currentIndex];
        imageElement.style.opacity = 1;
        textElement.style.opacity = 1;
      }, 500);
}

setInterval(changeImage, interval);

function goBack() {
    window.history.back();
}

function changeTextColor() {
    const text1 = document.getElementById("president");
    const text2 = document.getElementById("university");

    text1.style.color = "blue";
    text2.style.color = "red";
}

document.addEventListener("DOMContentLoaded", function(){
    changeTextColor();
});