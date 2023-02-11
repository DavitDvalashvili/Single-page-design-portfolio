const slider = document.getElementsByClassName("slider")[0];
const sliderImg = document.querySelectorAll(".slider img");
// buttons
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

let counter = 0;
let size = sliderImg[0].clientWidth;
let gap = parseInt(getComputedStyle(slider).gap);


// slider.style.transform = `translateX(${-size*counter}px)`;

leftArrow.addEventListener("click",  () => {
    if (counter == 2) {
        return 
    } else {
        slider.style.transition = 'transform 0.4s ease-in-out';
        counter ++;
        slider.style.transform = `translateX(${-size*counter-gap*counter}px)`;
    }
})

rightArrow.addEventListener("click",  () => {
    if (counter == -2) {
        return 
    } else {
        slider.style.transition = 'transform 0.4s ease-in-out';
        counter --;
        slider.style.transform = `translateX(${-size*counter-gap*counter}px)`;
    }
})
