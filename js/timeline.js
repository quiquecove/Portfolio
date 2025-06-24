$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function revealCards() {
    $('.timeline-main ul li').each(function () {
        if ($(this).isInViewport() && !$(this).hasClass('adding')) {
            $(this).addClass('adding');
            $(this).css({
                'opacity': '1',
                'transform': 'translateY(0)'
            });
        }
    });
}

function hideCards() {
    $('.timeline-main ul li').each(function () {
        if (!$(this).isInViewport() && $(this).hasClass('adding')) {
            $(this).removeClass('adding');
            $(this).css({
                'opacity': '0',
                'transform': 'translateY(20px)'
            });
        }
    });
}

$(document).ready(function () {
    // Inicializar ScrollReveal
    ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Aplicar ScrollReveal a las tarjetas
    ScrollReveal().reveal('.custom-section .timeline-main ul li.adding .custom-box', {
        origin: 'left',
        distance: '20px',
        duration: 1000,
        afterReveal: function () {
            revealCards();
        }
    });

    // Configurar el seguimiento de desplazamiento de la línea de tiempo
    $(window).on('scroll', function () {
        revealCards();
        hideCards();
    });

    // Configurar el seguimiento de desplazamiento basado en la línea de tiempo
    var winHeight = $(window).height(),
        element = $('.timeline-main'),
        elementTop = $(element).offset().top - winHeight,
        elementHeight = $(element).outerHeight();

    var scrollPos = $(window).scrollTop();

    console.log('elementTop ', elementTop, ' elementHeight ', elementHeight, ' scrollPos ', scrollPos);

    $(window).on('scroll', function () {
        scrollPos = $(window).scrollTop() - $(window).height() / 2;
        var r = scrollPos - elementTop;
        console.log('r ' + r);
        if (scrollPos >= elementTop) {
            console.log('inn');
            if (elementHeight >= r) {
                $('.pogress').css('height', r);
            }
        }
        if (r < 0) {
            console.log('0 inn')
            $('.pogress').css('height', 0);
        }

        if (elementHeight < r) {
            $('.pogress').css('height', elementHeight);
        }
        
        // Al desplazarse hacia arriba, muestra las tarjetas nuevamente
        if (scrollPos < elementTop) {
            revealCards();
        }
    });

    // Mostrar las tarjetas iniciales al cargar la página
    revealCards();
    hideCards();
});
