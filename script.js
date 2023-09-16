const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('nav-Links');

mobileMenuIcon.addEventListener('click', () => {
    navLinks.classList.toogle('show');
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        navLinks.classList.remove('show');

    }
})