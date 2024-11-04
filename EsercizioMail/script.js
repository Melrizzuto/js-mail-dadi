/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email

*/

"use strict"
console.clear()


/* Soluzione 1

 let RegistredEmails = ["email-1@gmail.com", "email-2@gmail.com", "email-3@gmail.com", "email-4@gmail.com", "email-5@gmail.com"]
 let UserMail= prompt ("Inserisci la tua mail di accesso");

 if(RegistredEmails.includes(UserMail)){
     console.log("Utente registrato, accesso consentito")

 } else {
     console.log("Utente non registrato, non è consentito l'accesso.")
 }

 */


// Soluzione 1 con validazione

let RegistredEmails = ["email-1@gmail.com", "email-2@gmail.com", "email-3@gmail.com", "email-4@gmail.com", "email-5@gmail.com"]
let UserMail= prompt ("Inserisci la tua mail di accesso");

if (UserMail && UserMail.includes("@")) {
    if (RegistredEmails.includes(UserMail)) {
        console.log("Utente registrato");
    } else {
        console.log("Utente non registrato");
    }
} else {
    console.log("Email non valida. Assicurati di inserire una email contenente '@'.");
}


