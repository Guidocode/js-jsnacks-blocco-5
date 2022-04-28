/*
  Jsnack 2
  Crea 10 oggetti che rappresentano una zucchina.
  Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine.
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

const zucchinePiccole = [];
const zucchineGrandi = [];

let pesoTotZucchinePiccole = 0;
let pesoTotZucchineGrandi = 0;

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
for (let zucchina of zucchine) {

  if(zucchina.lunghezza < 15){
    zucchinePiccole.push(zucchina)
  }else{
    zucchineGrandi.push(zucchina)
  }
}

console.log(zucchinePiccole);
console.log(zucchineGrandi);


for (const zucchina of zucchinePiccole) {

  pesoTotZucchinePiccole += zucchina.peso;
}

for (const zucchina of zucchineGrandi) {

  pesoTotZucchineGrandi += zucchina.peso;;
}

console.log('grammi zucchine piccole', pesoTotZucchinePiccole);
console.log('grammi zucchine grandi', pesoTotZucchineGrandi);


output.innerHTML = 
`Peso zucchine < 15cm: ${pesoTotZucchinePiccole / 1000} chili <br>
 Peso zucchine > 15cm: ${pesoTotZucchineGrandi / 1000} chili
`;

