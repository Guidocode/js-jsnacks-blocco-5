/*
  Jsnack 3
  Scrivi una funzione che accetti una stringa come argomento 
  e la ritorni girata (es. Ciao -> oaiC)
*/


const output = document.getElementById('output-parola');

// Non funziona...
// const reversStr = (str) => str.split(' ').reverse().join(' ');

function reversStr(str){
  let reverseString = '';

  reverseString = str.split('').reverse().join('') 

  return reverseString;
}

console.log(reversStr('ciao'));

const str = (prompt('Scrivi una parola'));

output.innerHTML = `Parola inserita: ${str} <br> Parola girata: ${reversStr(str)}`;