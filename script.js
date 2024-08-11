document.addEventListener('DOMContentLoaded', function() {
  const swiperQuiz = new Swiper(".animeslide", {
    loop: false, 
    speed: 500, // Riduzione della velocità di transizione
    centeredSlides: true,
    autoplay: {
      delay: 5000, // Cambia slide ogni 5000 millisecondi (5 secondi)
      disableOnInteraction: false // Permette all'autoplay di continuare anche dopo interazioni manuali
    },
    pagination: {
      el: ".animeslide-pagination",
      clickable: true, // Permette di cliccare sui puntini per cambiare slide
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>'; // Renderizza i puntini
      }
    },
    navigation: {
      nextEl: null, // Disabilita il pulsante "next"
      prevEl: null  // Disabilita il pulsante "prev"
    },
    scrollbar: {
      el: null, // Disabilita la scrollbar
      draggable: false // Disabilita la scrollbar
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    on: {
      init: function() {
        // Rimuove una classe CSS dal body per cercare di evitare problemi di rendering
        document.body.classList.remove('swiper-slide-active');
      }
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("reservationModal");
    var openModalButton = document.getElementById("openReservationModal");
    var closeModalButton = document.getElementById("closeReservationModal");

    // Apri il modulo quando il pulsante è cliccato
    openModalButton.onclick = function() {
        modal.style.display = "block";
    }

    // Chiudi il modulo quando l'utente clicca sulla X
    closeModalButton.onclick = function() {
        modal.style.display = "none";
    }

    // Chiudi il modulo se l'utente clicca al di fuori del modulo
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

