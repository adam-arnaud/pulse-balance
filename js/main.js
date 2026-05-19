const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    // Si on a scrollé plus de 60px → ajoute 'scrolled'
    // Sinon → retire 'scrolled'
    nav.classList.toggle('scrolled', window.scrollY > 60);
});