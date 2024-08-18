

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

