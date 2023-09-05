//dark
let darkmodeIcon = document.querySelector('#darkMode-icon');

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.custom-section , .heading h2', {
    origin: 'top'
});