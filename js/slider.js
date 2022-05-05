"use strict"

let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider');
const firstDot = document.querySelector('.first');
const secondDot = document.querySelector('.second');
const thirdDot = document.querySelector('.third');
const initialClientWidth = document.documentElement.clientWidth;
let clientWidth = document.documentElement.clientWidth;

// Прокрутка

// Для  экрана шириной 480px

// function Reload() {
//     if (clientWidth != initialClientWidth) {
//         document.location.reload();
//     }
// };

// Reload();

// if (clientWidth != initialClientWidth) {
//     clearInterval(intervalId);
// }

// let intervalId = setInterval(function () {
//     if (clientWidth > 1600) {
//     clientWidth = 1600;
//     };
//     if (clientWidth < 480) {
//         clientWidth = 480;
//     };
//     offset = offset + clientWidth;
//     if(offset > 2*clientWidth){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// }, 2500);

// Для  экрана шириной 1600px

// let intervalId = setInterval(function () {
//     offset = offset + 1600;
//     if(offset > 3200){
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
// }, 2500);


// Для кнопок

document.querySelector('.next').addEventListener('click', function () {
    if (clientWidth > 1600) {
    clientWidth = 1600;
    };
    if (clientWidth < 480) {
        clientWidth = 480;
    };
    offset = offset + clientWidth;
    if(offset > 2*clientWidth){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    clearInterval(intervalId);
});

document.querySelector('.prev').addEventListener('click', function(){
    offset = offset - clientWidth;
    if(offset < 0){
        offset = 2*clientWidth;
    }
    sliderLine.style.left = -offset + 'px';
    clearInterval(intervalId);
});

// Для кружков

document.querySelector('.dots').addEventListener('click', function(event){
    if(event.target.contains( firstDot )){
        offset = 0;
        secondDot.classList.remove('active');
        thirdDot.classList.remove('active');
        firstDot.classList.add('active');
    };
    if(event.target.contains( secondDot )){
        offset = 1600;
        firstDot.classList.remove('active');
        thirdDot.classList.remove('active');
        secondDot.classList.add('active');
    };
    if(event.target.contains( thirdDot )){
        offset = 3200;
        firstDot.classList.remove('active');
        secondDot.classList.remove('active');
        thirdDot.classList.add('active');
    };
    sliderLine.style.left = -offset + 'px';
});

