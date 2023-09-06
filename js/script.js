// responsive navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// scroll sections active links

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })

    // sticky navbar
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);



    // remove menu icon navbar cunado clickeas una opcion
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// dark mode
let darkmodeIcon = document.querySelector('#darkMode-icon');

darkmodeIcon.onclick = () => {
    darkmodeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img img, .services-container, .services-box, .portfolio-box, .testimonios-wrapper, .contact form,.about-content a', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content h3, .home-content p, about-content,.about-content p,.about-content h3 ', {
    origin: 'right'
});


//formulario
document.addEventListener('DOMContentLoaded', function() {
  var formulario = document.getElementById('miFormulario');
  var botonEnviar = document.getElementById('enviarBoton');

  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Cambia el texto del botón a "Enviando..." cuando se envía el formulario
    botonEnviar.value = '¡Enviado!';

    // Envía el formulario usando AJAX (puedes implementar esto en tu caso específico)
    // Aquí puedes realizar la lógica de envío del formulario, como enviarlo al servidor

    // Simulamos un retraso de 3 segundos (puedes eliminar esto en tu implementación real)
    setTimeout(function() {
      // Cambia el texto del botón de vuelta a "Enviar" después de un retraso
      botonEnviar.value = 'Enviar';
    }, 3000); // Cambia 3000 a la cantidad de milisegundos que desees
  });
});

