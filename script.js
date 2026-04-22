const header = document.getElementById('main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', reveal);
reveal();

const modal = document.getElementById('privacy-modal');
const btnOpen = document.getElementById('open-modal');
const btnClose = document.getElementById('close-modal-btn');
const bgClose = document.getElementById('close-modal-bg');

btnOpen.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
});

btnClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});

bgClose.addEventListener('click', () => {
    modal.classList.add('hidden');
});