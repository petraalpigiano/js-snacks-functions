/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.

/**
 *
 * @param {string} name contiene un nome utente
 * @returns {string} saluto + nome utente
 */
function stringPlusName(name) {
  return "Ciao" + " " + name;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(stringPlusName(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

// Arrow function
const stringPlusName2 = (name) => "Ciao" + " " + name;
console.log(stringPlusName2(userName));
