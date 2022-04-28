/*
 Jsnack 1
  Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
  Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [
  {
    varietà: 1,
    peso: 100,
    lunghezza: 10,
  },
  {
    varietà: 2,
    peso: 200,
    lunghezza: 11,
  },
  {
    varietà: 3,
    peso: 300,
    lunghezza: 12,
  },
  {
    varietà: 4,
    peso: 400,
    lunghezza: 13,
  },
  {
    varietà: 5,
    peso: 500,
    lunghezza: 14,
  },
  {
    varietà: 6,
    peso: 600,
    lunghezza: 15,
  },
  {
    varietà: 7,
    peso: 700,
    lunghezza: 16,
  },
  {
    varietà: 8,
    peso: 800,
    lunghezza: 17,
  },
  {
    varietà: 9,
    peso: 900,
    lunghezza: 18,
  },
  {
    varietà: 10,
    peso: 1000,
    lunghezza: 19,
  },
]


const output = document.getElementById('output-peso');

let pesoTot = 0;

for (let zucchina of zucchine) {

  console.log(zucchina.peso);

  pesoTot += zucchina.peso
}

console.log('grammi totali', pesoTot);


output.innerHTML = `Il peso totale delle zucchine è di ${pesoTot / 1000} chili`;

