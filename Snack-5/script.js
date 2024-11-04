/*
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

let oddnumber = [];

for (let i = 0; i < 6; i++) {
    let userInput = prompt("Inserisci un numero"); 
    let userNumber = parseInt(userInput);

   
    if (!isNaN(userNumber) && userNumber % 2 !== 0) {
        oddnumber.push(userNumber); 
    }

    if(isNaN(userNumber)){
        alert("Inserisci un valore valido!")
        i--;
    }
}
console.log("Numeri dispari inseriti:", oddnumber);