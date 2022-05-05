const items = document.querySelectorAll('.item');

let f = document.querySelector('.filter').addEventListener('click', (event) => {
    if(event.target.tagName !== 'BUTTON') return false;
    let filterClass = event.target.dataset['value'];
    items.forEach((elem) => {
        elem.classList.remove('none');
        if(!elem.classList.contains(filterClass) && filterClass !== 'all'){
            elem.classList.add('none');
        }
    });
});

