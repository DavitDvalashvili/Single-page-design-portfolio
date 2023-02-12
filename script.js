const slider = document.getElementsByClassName("slider")[0];
const imageBox = document.querySelectorAll(".slider div");
// buttons
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let counter = 0;
let size = imageBox[0].clientWidth;


leftArrow.addEventListener("click",  () => {
    if (counter == 2) {
        return 
    } else {
        counter ++;
        slider.style.transition = 'transform 0.4s ease-in-out';
        slider.style.transform = `translateX(${-size*counter}px)`;
    }
})

rightArrow.addEventListener("click",  () => {
    if (counter == -2) {
        return 
    } else {
        counter --;
        slider.style.transition = 'transform 0.4s ease-in-out';
        slider.style.transform = `translateX(${-size*counter}px)`;
    }
})
