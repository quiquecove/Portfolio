window.addEventListener('DOMContentLoaded', function () {
  // Obtener elementos del DOM
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Evento de clic en el icono de menú
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Evento de clic en cualquier parte fuera del menú desplegable para cerrarlo
document.addEventListener('click', (event) => {
  if (!menuIcon.contains(event.target) && !navbar.contains(event.target)) {
    navbar.classList.remove('active');
  }
});
  
  const navbarItems = document.querySelectorAll('.navbar li a');
  
    navbarItems.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Desactivar el elemento activo
        const activeItem = document.querySelector('.navbar li a.home-active');
        activeItem.classList.remove('home-active');
  
        // Activar el elemento seleccionado
        this.classList.add('home-active');
  
        // Obtener el ID del marcador desde el atributo href del elemento <a>
        const target = this.getAttribute('href');
  
        // Desplazarse suavemente hacia el marcador
        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });