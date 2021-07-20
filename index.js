'use strict';

const refs = {
    upBtn: document.querySelector('.up-button'),
    downBtn: document.querySelector('.down-button'),
    sideBar: document.querySelector('.sidebar'),
    mainSlide: document.querySelector('.main-slide'),
    container: document.querySelector('.container'),
    slides: document.querySelectorAll('.main-slide div'),
    body: document.querySelector('body'),
};

const slidesNumber = refs.slides.length;

let activeSlideIndex = 0;

refs.sideBar.style.top = `-${(slidesNumber-1) * 100}vh`;

refs.upBtn.addEventListener('click', changeSlideUp);
refs.downBtn.addEventListener('click', changeSlideDown);
document.addEventListener('keydown', changeSlideByButton);


function changeSlideUp() {
    
const height = refs.body.clientHeight;
    activeSlideIndex++;
        if(activeSlideIndex === slidesNumber) {
            activeSlideIndex = 0; 
        };

    refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    refs.sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
};

function changeSlideDown() {
    
const height = refs.body.clientHeight;
    activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesNumber - 1;
        };

    refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    refs.sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
};

function changeSlideByButton (evt) {
    if (evt.key === 'ArrowUp') {
        changeSlideUp();
    } else if (evt.key === 'ArrowDown') {
        changeSlideDown();
    };
};