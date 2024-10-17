window.addEventListener('load', () => {
    document.body.classList.add('visible');
});

// Открытие и закрытие бокового меню
function toggleMenu() {
    const sidenav = document.getElementById('sidenav');
    const main = document.getElementById('main');
    sidenav.classList.toggle('open');
    main.classList.toggle('shifted');
}