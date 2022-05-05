(() => {
    const refs = {
      menuBtn: document.querySelector('.menu-button'),
      menu: document.querySelector('.nav-menu'),
    };
  
    refs.menuBtn.addEventListener('click', () => {
        refs.menu.classList.toggle('is-open');
        refs.menuBtn.classList.toggle('is-open');
    });
  })();