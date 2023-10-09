// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.




// punto 1

let mainDiv =  document.getElementById("mainbox")
console.log(mainDiv)

let chilometri = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(chilometri)


let etàPasseggero = parseInt(prompt("Quanti anni hai?"));
console.log(etàPasseggero)

if (isNaN(chilometri) || isNaN(etàPasseggero)){
    mainDiv.innerHTML = "Devi inserire dei numeri!";
    window.location.reload();
}

// punto 2