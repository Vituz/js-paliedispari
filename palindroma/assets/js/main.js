var play = true;

while(play){
    
    // Chiedere all’utente di inserire una parola
    var parola_inserita = prompt("Inserisci una parola");
    
    document.getElementById("palindroma").innerHTML = ifPalindroma(parola_inserita);
        
    // Creare una funzione per capire se la parola inserita è palindroma
    
    /**
     * ### Controlla se una parola è palindroma
     * Questa funzione accetta una stringa e la trasforma in un array, la inverte e la riunisce
     * e controlla se la nuova parola è identica a quella di partenza.
     * @param {string} parola - la parola da controllare
     * @returns {string} restituisce se la parola è palindroma o no
     */

    function ifPalindroma(parola){
    
        var parola = parola.toLowerCase();  
    
        var parola_divisa = parola.split("");
    
        var parola_reverse = parola_divisa.reverse();
    
        var palindroma = parola_reverse.join("");
    
        if (parola === palindroma){
            result =`${parola} è una parola palindroma`;
            console.log(`${parola} è una parola palindroma`);
            return result;
            
    
        } else {
            result =`${parola} non è una parola palindroma`;
            console.log(`${parola} non è una parola palindroma`);
            return result;
        }
    
    }
    play = confirm("Vuoi inserire una nuova parola?")
}



