const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";




const arrayNumero = [3, 6, 5, 7]
const arrayString = ["arroz", "macarrão", "salada"]
const arrayMistu = ["arroz", 3, true]


console.log(arrayNumero.length, arrayNumero)
console.log(arrayString.length, arrayString )
console.log(arrayMistu.length, arrayMistu)

const pos1 = arrayNumero[0]
console.log(pos1)

const pos2 = arrayString[1]
console.log(pos2)

const pos3 = arrayMistu[2]
console.log(pos3)

console.log(`${arrayNumero.includes(3)} ${arrayMistu.includes(2)}`)






// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.