'use strict';

const refs = {
    upBtn: document.querySelector('.up-button'),
    downBtn: document.querySelector('.down-button'),
    sideBar: document.querySelector('.sidebar'),
    mainSlide: document.querySelector('.main-slide'),
    container: document.querySelector('.container'),
    slides: document.querySelectorAll('.main-slide div'),
};

const slidesNumber = refs.slides.length;
const height = refs.container.clientHeight;

let activeSlideIndex = 0;

refs.sideBar.style.top = `-${(slidesNumber-1) * 100}vh`;

refs.upBtn.addEventListener('click', () => {
    changeSlide('up')
});
refs.downBtn.addEventListener('click',  () => {
    changeSlide('down')
});

document.addEventListener('keydown', changeSlideByButton);


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex === slidesNumber) {
            activeSlideIndex = 0;
        };
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesNumber - 1;
        };
    };

    refs.mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    refs.sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
};

function changeSlideByButton (evt) {
    if (evt.key === 'ArrowUp') {
        changeSlide('up');
    } else if (evt.key === 'ArrowDown') {
        changeSlide('down');
    };
};