// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




// punto 1

let mainDiv =  document.getElementById("mainbox")

let chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(chilometri)


let etàPasseggero = parseInt(prompt("Quanti anni hai?"));
console.log(etàPasseggero)

if (isNaN(chilometri) || isNaN(etàPasseggero)){
    mainDiv.innerHTML = "Devi inserire dei numeri!";
    window.location.reload();
}

// punto 2

let prezzoBiglietto = (0.21 * chilometri);
let prezzoFinale = prezzoBiglietto.toFixed(2)



if (etàPasseggero < 18) {
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.2)
    console.log(prezzoBiglietto)

} else if (etàPasseggero > 65){
    prezzoFinale = prezzoBiglietto - (prezzoBiglietto * 0.4)
    console.log(prezzoBiglietto)
} else {
    prezzoBiglietto;
}



