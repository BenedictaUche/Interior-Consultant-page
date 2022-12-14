const btnMobile = document.getElementById('button-mobile');
const linkMobile = document.querySelectorAll('#nav-menu a');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
    const active = navMenu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);