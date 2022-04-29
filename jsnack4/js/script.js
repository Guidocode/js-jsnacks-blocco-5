/*
  Jsnack 4
  Crea un array di oggetti, in cui ogni oggetto descrive una bici da 
  corsa con le seguenti proprietà: nome e peso.
  Stampa a schermo la bici con peso minore utilizzando destructuring 
  e template literal
*/

const bicicles = [
  {
    name: 'Bianchi Infinito CV Shimano Ultegra YNB24',
    kg: 25
  },
  {
    name: 'Savadeck Herd 6.0 700C T800 Fibra di Carbonio',
    kg: 7
  },
  {
    name: 'Savadeck carbonio, Warwind3.0 700C',
    kg: 19
  },
  {
    name: 'NA ZGGYA da 26 pollici',
    kg: 9
  }
]

let lighterWeight = bicicles[0].kg;

let lighterBike = {};

for(let bike of bicicles){

  const {kg} = bike;
  console.log(kg);

  if(lighterWeight > bike.kg){
    lighterWeight = kg;
    lighterBike = bike;
  }
}

printBike(lighterBike);

console.log('peso minore', lighterWeight);

function printBike(bike) {
  const {name, kg} = bike;
  document.querySelector('#output-bici').innerHTML = `La bici con il peso minore è: "${name}" <br>
  Il suo peso è di: "${kg}" kg`
}