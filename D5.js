/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish']
/*
for(i = 0; i < pets.length; i++) {
  console.log(pets[i])
}


/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let alphabeticalOrderPets

for(i = 0; i < pets.length; i++) {
  if (pets[i] > pets[1] || pets[i] > pets[2] || pets[i] > pets[3]) {
    
    
    
  }
}

console.log(pets)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

/*Primo metodo

for(i = pets.length - 1; i > -1; i--) {
  console.log(pets[i])
}
*/
/*Secondo metodo

let invertedpets = []

for(i = pets.length - 1; i > -1; i--) {
  invertedpets.push(pets[i])
}

console.log(invertedpets)
*/
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
/*
let elementoSpostato = pets[0]
pets.splice(0,1)
pets.push(elementoSpostato)

console.log(pets)




/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
/*
console.log(cars)
console.log(cars[2])
console.log(cars[2].model)

let licensePlate = ""
cars[0].(licensePlate)
/*
let licensePlate = ""

for (i = 0; i < cars.length; i++) {
  cars[i].push(licensePlate)
  cars.licensePlate = "[i]"
}

console.log(cars)

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
/*
const justTrims = []

for (i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0])
}

console.log(justTrims)
*/
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
/*
console.log("ciao"[0])

for (i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === "b") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
  
} 
*/

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
/* Primo metodo

const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let num = 0

while (num < numericArray.length) {
  if (numericArray[num] !== 32) {
    console.log(numericArray[num])
    num++
  } else {
    console.log(numericArray[num])
    break
  }
  
  
}
*/
/* Secondo metodo

let num = 0

while (num < numericArray.length) {
  if (numericArray[num] !== 66) {
    console.log(numericArray[num])
    num++
  } else {
    break
  }
  
  
}
*/
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
/*
const charactersArray = ["g", "n", "u", "z", "d"]

let charactersPosition = []

for (i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      charactersPosition.push("1");
      break;
    case "b":
      charactersPosition.push("2");
      break
    case "c":
      charactersPosition.push("3");
      break
    case "d":
      charactersPosition.push("4");
      break
    case "e":
      charactersPosition.push("5");
      break
    case "f":
      charactersPosition.push("6");
      break;
    case "g":
      charactersPosition.push("7");
      break
    case "h":
      charactersPosition.push("8");
      break
    case "i":
      charactersPosition.push("9");
      break
    case "l":
      charactersPosition.push("10");
      break
    case "m":
      charactersPosition.push("11");
      break;
    case "n":
      charactersPosition.push("12");
      break
    case "o":
      charactersPosition.push("13");
      break
    case "p":
      charactersPosition.push("14");
      break
    case "q":
      charactersPosition.push("15");
      break
    case "r":
      charactersPosition.push("16");
      break;
    case "s":
      charactersPosition.push("17");
      break
    case "t":
      charactersPosition.push("18");
      break
    case "u":
      charactersPosition.push("19");
      break
    case "v":
      charactersPosition.push("20");
      break
    case "z":
      charactersPosition.push("21");
      break


  }
}
console.log(charactersPosition)
*/
