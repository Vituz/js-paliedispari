var play = true;s

while(play){
    
    // Chiedere all’utente di inserire una parola
    var parola_inserita = prompt("Inserisci una parola");
    
    console.log(ifPalindroma(parola_inserita));
    
    
    // console.log(palindroma);
    
    // Creare una funzione per capire se la parola inserita è palindroma
    
    function ifPalindroma(parola){
    
        var parola = parola.toLowerCase();  
    
        var parola_divisa = parola.split("");
    
        var parola_reverse = parola_divisa.reverse();
    
        var palindroma = parola_reverse.join("");
    
        if (parola === palindroma){
            console.log(`${parola} è una parola palindroma`);
            return true;
            
    
        } else {
            console.log(`${parola} non è una parola palindroma`);
            return false;
        }
    
    }
    play = confirm("Vuoi inserire una nuova parola?")
}



