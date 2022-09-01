




const arrayNumero1 = [3, 6, 5, 7]
const arrayString1 = ["arroz", "macarrão", "salada"]
const arrayMistu1 = ["arroz", 3, true]

const copia1 = arrayNumero1.slice() 
 arrayNumero1.push(1)
console.log(arrayNumero1, copia1)

const copia2 = arrayString1.slice() 
arrayString1.pop()
console.log(arrayString1, copia2)

const copia3 = arrayMistu1.slice()
arrayMistu1.splice(1,1)
console.log(arrayMistu1, copia3)



// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays,
// chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
