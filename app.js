let secretNumber;
const attempts = []; // Array para almacenar los intentos
let guessed = false;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Generar un nuevo número secreto
    attempts.length = 0; // Reiniciar los intentos
    guessed = false; // Reiniciar el estado de adivinado
    displayMessage("¡El juego ha comenzado! Adivina el número secreto (1-100).");
    askForNumber(); // Comenzar a pedir números
}

function askForNumber() {
    let userInput = prompt("Adivina el número secreto (1-100):");
    let guessedNumber = Number(userInput);

    // Validar la entrada
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        displayMessage("Por favor, ingresa un número válido entre 1 y 100.");
        askForNumber();
        return;
    }

    attempts.push(guessedNumber);

    if (guessedNumber === secretNumber) {
        displayMessage("Felicidades, adivinaste el número secreto.");
        displayAttempts();
        guessed = true; // Cambiar el estado de adivinado
    } else {
        displayMessage("Número incorrecto, vuelve a intentarlo.");
        askForNumber(); // Volver a preguntar
    }
}

function displayMessage(message) {
    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = message; // Mostrar el mensaje en el DOM
    console.log(message); // Mostrar el mensaje en la consola
}

function displayAttempts() {
    console.log("Tus intentos: ", attempts.join(", "));
}

document.getElementById("startButton").addEventListener("click", startGame);
