/* Scrivi una funzione che accetti un array di nomi e restituisca di nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.

/**
 *
 * @param {Array} listNames lista di nomi
 * @returns {Array} nuovo array con iniziali dei nomi dell'altro array
 */
function ListNames(listNames) {
  const firstLetterName = [];
  for (let i = 0; i < listNames.length; i++) {
    const currentName = listNames[i];
    firstLetterName.push(currentName[0]);
  }
  return firstLetterName;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(ListNames(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
