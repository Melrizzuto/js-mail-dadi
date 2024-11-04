/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

"use strict"
console.clear()

// Mail

// Soluzione 1
let RegistredEmails = ["email-1@gmail.com", "email-2@gmail.com", "email-3@gmail.com", "email-4@gmail.com", "email-5@gmail.com"]
let UserMail= prompt ("Inserisci la tua mail di accesso");

if(RegistredEmails.includes(UserMail)){
    console.log("Utente registrato, accesso consentito")

} else {
    console.log("Utente non registrato, non è consentito l'accesso.")

}


