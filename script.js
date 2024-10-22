function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function solicitarNumero() {
    let numero;
    do {
        numero = prompt("Por favor, introduce un número entero no negativo:");
        numero = Number(numero); // Convertir a número
        if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
            alert("Entrada no válida. Debes ingresar un número entero no negativo.");
        }
    } while (isNaN(numero) || numero < 0 || !Number.isInteger(numero));
    
    return numero;
}

const numero = solicitarNumero();
const resultado = calcularFactorial(numero);
document.getElementById("resultado").innerText = `El factorial de ${numero} es ${resultado}.`;