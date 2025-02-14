document.addEventListener("DOMContentLoaded", function() {
    // Selectăm toate întrebările
    let questions = document.querySelectorAll(".question");

    questions.forEach(question => {
        let greenButton = question.querySelector(".correct"); // Găsim butonul corect
        let allButtons = question.querySelectorAll(".answer"); // Toate butoanele din întrebare

        allButtons.forEach(button => {button.addEventListener("click",function(){this.style.backgroundColor="darkred";})})

        greenButton.addEventListener("click", function() {
            this.style.backgroundColor = "green"; // Schimbă culoarea doar pentru butonul corect

            // Ascunde doar butoanele greșite
            allButtons.forEach(button => {
                if (button !== greenButton) { // Dacă NU este butonul corect
                    button.style.display = "none";
                }
            });
        });
    });
});




function showMessage(button) {
    button.style.display = "none"; // Ascunde butonul apăsat

    // Selectăm toate butoanele încă vizibile
    let remainingButtons = document.querySelectorAll(".answer:not([style*='display: none'])");

    // Dacă nu mai sunt butoane, afișăm mesajul
    if (remainingButtons.length === 0) {
        document.getElementById("button-text").style.display = "block";
    }
}


//timer
function updateTimer() {
    const now = new Date();
    const startDate = new Date("2023-09-18T22:00:00");
    const elapsedTime = now - startDate; // Diferența în milisecunde

    // Calculăm zile, ore, minute, secunde
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    // Afișăm rezultatul
    document.getElementById("countup-timer").innerText =
        `${days} zile, ${hours} ore, ${minutes} minute, ${seconds} secunde`;
}

// Actualizare timer la fiecare secundă
setInterval(updateTimer, 1000);

// Inițializăm timer-ul la încărcarea paginii
updateTimer();