var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});
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


var swiper = new Swiper(".coming-container", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
});
window.addEventListener('DOMContentLoaded', function () {
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

var players = {}; // Objeto para almacenar los reproductores de YouTube

function playVideo(videoId) {
  if (!players[videoId]) {
    players[videoId] = new YT.Player(videoId, {
      height: '270px',
      width: '100%',
      videoId: getVideoId(videoId),
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        disablekb: 1,
        enablejsapi: 1
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange
      }
    });
  } else {
    players[videoId].playVideo();
  }

  document.getElementById(videoId).style.display = 'block';
  document.getElementById(getImageId(videoId)).style.display = 'none';
}

function stopVideo(videoId) {
  if (players[videoId]) {
    players[videoId].stopVideo();
  }

  document.getElementById(videoId).style.display = 'none';
  document.getElementById(getImageId(videoId)).style.display = 'block';
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    stopVideo(event.target.a.id);
  }
}

function getVideoId(playerId) {
  // Lógica para obtener el ID del video correspondiente según el ID del reproductor
  switch (playerId) {
    case 'video0':
      return 'nZ8FXOpcXSs';
    case 'video1':
      return 'DsRcqwGOmUU';
    case 'video2':
      return '2PT260yUXXw';
    case 'video3':
      return 'XGk2EfbD_Ps';

      case 'video4':
        return 'dXQBL7u7Zlk';
      case 'video5':
        return 'JK-wAfAvJ0g';
      case 'video6':
        return 'gNOX4SEQ7aM';
      case 'video7':
        return 'PpKSuZ-DI1s';

        case 'video8':
          return 'OE_RVrhUqRk';
        case 'video9':
          return 'rKHL5PyAPzs';


    // Agrega los casos para los demás reproductores de video
    // utilizando los ID de video correctos
    default:
      return '';
  }
}

function getImageId(videoId) {
  // Lógica para obtener el ID de la imagen correspondiente según el ID del reproductor
  switch (videoId) {
    case 'video0':
      return 'image0';
    case 'video1':
      return 'image1';
    case 'video2':
      return 'image2';
    case 'video3':
      return 'image3';
    case 'video4':
      return 'image4';
    case 'video5':
      return 'image5';
    case 'video6':
      return 'image6';
    case 'video7':
      return 'image7';
    case 'video8':
      return 'image8';
    case 'video9':
      return 'image9';
    case 'video10':
      return 'image10';
    // Agrega los casos para las demás imágenes
    // utilizando los ID de imagen correctos
    default:
      return '';
  }
}
