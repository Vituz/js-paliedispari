// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var even_odd = true;

var ifNumber = true;

while(even_odd){
    
    var userChoise = prompt("Scegli pari o dispari");
    
    if(userChoise != "pari" && userChoise != "dispari"){
    
        confirm("Devi scrivere pari o dispari");
    
        even_odd = true;
        
    } else {   
        even_odd = false;
    }

}


while(ifNumber){
    var numberChoise = Number(prompt("Inserisci un numero da 1 a 5"));
    
    if (isNaN(numberChoise) || numberChoise < 1 || numberChoise > 5){
    
        console.log("devi inserire un numero da 1 a 5");

        ifNumber = true;
    } else {
        ifNumber = false;
        console.log("Sei nell'else");
    }
}

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

/**
 * ### Generatore di numeri random
 * @param {number} number - genera un numero random
 * @returns {number} restituisce un numero random da 1 a 5
 */

function randomNumber (){
    number = Math.ceil(Math.random() *5);
    return number;
}

var pcNumber = randomNumber();
console.log(pcNumber);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/**
 * ### Controlla se un numero è pari o dispari
 * Questa funzione accetta due numeri in ingresso,
 * li somma e controlla se il risultato è pari o dispari
 * @param {number} num1 - il primo numero da sommare
 * @param {number} num2 - il secondo numero da sommare
 * @returns {string} - restituisce una stringa contenente la parola Pari o Dispari
 */

function resultEvenOdd (num1, num2){
    var somma = num1 + num2;

    var somma = somma % 2;

    console.log(somma);
    
    if (somma == 0) {
        var result = "Pari";
        
    } else {
        var result = "Dispari";
    }
    return result;
}

// Dichiariamo chi ha vinto

var result = resultEvenOdd(numberChoise, pcNumber);

var userChoise = userChoise.charAt(0).toUpperCase() + userChoise.slice(1);

var message = document.getElementById("result_even_odd");

if (userChoise === result){
    message.innerHTML = `Hai scelto ${userChoise} è uscito ${numberChoise + pcNumber}. Hai Vinto!`;
} else {
    message.innerHTML = `Hai scelto ${userChoise} è uscito ${numberChoise + pcNumber}. Hai Perso!`;
}