// let numeros: number[] = [10, 20, 30];
// let numeros: (number|string)[] = ["Luiz", 38];
let numeros: Array<number | string> = ['Luiz', 38];
let numeros_ro: ReadonlyArray<number> = [100, 200, 300];
// metodos de mudança não aparecem com numeros_ro.

numeros.push(1.71);
numeros.unshift(75); // insere no inicio
// numeros.shift(); remove elemento do inicio e guarda em variavel

console.log(numeros[numeros.length - 1]);
// imc
console.log(
  /**
   * Array que armazena os dados de uma pessoa.
   * @property {string} nome - O nome da pessoa.
   * @property {number} idade - A idade da pessoa.
   */

  `IMC: ${(Number(numeros[0]) / Math.pow(Number(numeros[3]), 2)).toFixed(2)}`
);

console.log(numeros);
numeros_ro.map((x) => console.log(x * x));

/*
  Comparativo: shift() vs unshift()

  shift():
  - Ação: Remove o primeiro elemento.
  - Posição: Início do array.
  - Retorno: O elemento removido.
  - Mutabilidade: Sim, altera o array original.

  unshift():
  - Ação: Adiciona um ou mais elementos ao início.
  - Posição: Início do array.
  - Retorno: O novo tamanho do array.
  - Mutabilidade: Sim, altera o array original.
*/

/*
  Modificador Readonly para Arrays

  O TypeScript fornece o tipo `ReadonlyArray<T>` ou a sintaxe `readonly T[]`
  para criar arrays imutáveis (apenas para leitura).

  Uma vez que um array é declarado como readonly, você não pode mais
  modificá-lo usando métodos que alteram o array original.

  Exemplo:
  let numeros_ro: ReadonlyArray<number> = [100, 200, 300];
  // ou
  // let numeros_ro: readonly number[] = [100, 200, 300];

  // As seguintes operações causarão um erro de compilação:
  // numeros_ro.push(400); // Erro!
  // numeros_ro.pop();     // Erro!
  // numeros_ro.splice(0, 1); // Erro!

  Isso é útil para garantir que uma função não modifique um array que
  foi passado para ela como argumento, promovendo a programação funcional
  e a imutabilidade.
*/
