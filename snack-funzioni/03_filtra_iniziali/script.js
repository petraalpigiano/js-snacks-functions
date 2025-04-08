/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const onlyLetterName = [];
// Dichiara la funzione qui.
/**
 *
 * @param {Array} listNames lista di nomi
 * @param {string} letter lettera
 * @returns {Array} nuovo array con parole che iniziano con quella lettera
 */
function ListNames(listNames, letter) {
  for (let i = 0; i < listNames.length; i++) {
    const currentName = listNames[i];
    if (currentName[0] === letter) {
      onlyLetterName.push(currentName);
    }
  }
  return onlyLetterName;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(ListNames(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// ESPERIMENTO DI USARE UNA FUNZIONE COME PARAMETRO DI UN ALTRA
// const firstLetterName = [];
// const letterName = [];

// Funzione che prende le iniziali delle parole
// /**
//  *
//  * @param {Array} listNames lista di nomi
//  * @returns {Array} nuovo array con iniziali dei nomi dell'altro array
//  */
// function ListNames(listNames) {
//   for (let i = 0; i < listNames.length; i++) {
//     const currentName = listNames[i];
//     firstLetterName.push(currentName[0]);
//   }
//   return firstLetterName;
// }

// Funzione che controlla quelle iniziali e mette quelle specificate in un nuovo array
// /**
//  *
//  * @param {Array} listNames funzione che mi restituisce le iniziali di ogni parola
//  * @param {string} letter lettera
//  * @returns {Array} nuovo array con parole che iniziano con quella lettera
//  */
// function ListNames2(listNames, letter) {
//     for (let i = 0; i < listNames.length; i++) {
//       const currentName = listNames[i];
//       if (currentName === letter) {
//         letterName.push(currentName);
//       }
//     }
//     return letterName;
//   }

//   // Invoca la funzione qui e stampa il risultato in console
//   console.log(ListNames2(ListNames(names), "A"));
