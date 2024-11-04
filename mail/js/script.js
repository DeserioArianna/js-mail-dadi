// Lista di email che posso accedere
const listaEmail = ["demi@gmail.com", "cristian@gmail.com", "sukuna@gmail.com"];

// Chiedo all'utente la sua email
const emailUtente = prompt("Inserisci la tua email");

// Controllo se l'email fornita è nella lista
let accessoConsentito = false;
for (let i = 0; i < listaEmail.length; i++) {
    const curEmail = listaEmail[i];
    if (curEmail === emailUtente) {
        accessoConsentito = true;
        break;
    }
}

// Stampare un messaggio
if (accessoConsentito) {
    console.log("Accesso consentito. Benvenuto!");
} else {
    console.log("Accesso negato. Riprova.")
}