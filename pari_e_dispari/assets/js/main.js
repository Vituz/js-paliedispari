// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var even_odd = true;

var ifNumber = true;

while(even_odd){
    
    var userChoise = prompt("Scegli pari o dispari");
    
    if(userChoise != "pari" && userChoise != "dispari"){
    
        confirm("puoi scegliere solo pari o dispari");
    
        even_odd = true;
        
    } else {   
        even_odd = false;
    }

}


while(ifNumber){
    var numberChoise = prompt("Inserisci un numero da 1 a 5");
    
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
    var number = Math.ceil(Math.random() *5);
    console.log(number);
    return number;
}

var pcNumber = randomNumber();



// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto