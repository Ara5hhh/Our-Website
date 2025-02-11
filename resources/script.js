document.addEventListener("DOMContentLoaded", function() {
    // Selectăm toate butoanele cu clasele greenButton și hideButton
    let greenButtons = document.querySelectorAll(".correct");
    let hideButtons = document.querySelectorAll(".false");


    // Parcurgem fiecare pereche de butoane
    greenButtons.forEach((greenButton, index) => {
        let hideButton = hideButtons[index]; // Găsim butonul corespunzător

        if (hideButton) {
            greenButton.addEventListener("click", function() {
                this.style.backgroundColor = "green"; // Schimbă culoarea doar pentru butonul apăsat
                hideButton.style.display = "none";   // Ascunde doar butonul pereche
            });
        }
    });
});
