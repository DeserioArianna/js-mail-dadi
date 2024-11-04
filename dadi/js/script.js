// Generiamo un numero random per il giocatore
const dadoGiocatore = Math.floor(Math.random() * 6) + 1;

// Generiamo un numero random per il Computer
const dadoComputer = Math.floor(Math.random() * 6) + 1;

// Stabiliamo il vincitore
let risultato;
if (dadoGiocatore > dadoComputer) {
    risultato = "Hai Vinto!";
} else if (dadoGiocatore < dadoComputer) {
    risultato = "Hai Perso!";
} else {
    risultato = "Pareggio!";
}

// Stampare il risultato
console.log(`Giocatore: ${dadoGiocatore}, Computer: ${dadoComputer}`);
console.log(risultato);