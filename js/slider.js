let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 1600;
    if(offset > 3200){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function(){
    offset = offset - 1600;
    if(offset < 0){
        offset = 3200;
    }
    sliderLine.style.left = -offset + 'px';
})