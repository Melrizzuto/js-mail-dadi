/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

"use strict";
console.clear();

let numberpc = Math.floor(Math.random() * 6) + 1;
let userInput = prompt("Inserisci un numero da 1 a 6.");
let usernumber = parseInt(userInput);


console.log("Numero del computer: " + numberpc);
console.log("Numero del giocatore: " + usernumber);

if (numberpc > usernumber) {
    console.log("Mi dispiace, hai perso! Ritenta, sarai più fortunato!");
} else if (numberpc < usernumber) {
    console.log("Congratulazione! Hai vinto!");
} else {
    console.log("È un pareggio!");
}