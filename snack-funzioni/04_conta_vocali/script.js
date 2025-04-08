/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
/**
 *
 * @param {string} chosenWord parola/e
 * @returns {number} numero delle vocali presenti nella parola/E
 */
function wordVowels(chosenWord) {
  let howManyVowels = 0;
  for (let i = 0; i < chosenWord.length; i++) {
    const currentChar = chosenWord[i];
    if (
      currentChar === "a" ||
      currentChar === "e" ||
      currentChar === "i" ||
      currentChar === "o" ||
      currentChar === "u"
    ) {
      howManyVowels += 1;
    }
  }

  return howManyVowels;
}
// Invoca la funzione qui e stampa il risultato in console
console.log(wordVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
