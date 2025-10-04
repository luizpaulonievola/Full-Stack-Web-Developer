/**
 * Soma um número indefinido de valores numéricos.
 * @param numeros - Uma sequência de números a serem somados.
 * @returns A soma total dos números fornecidos.
 */
const somar = (...numeros: number[]): number => {
  /**
   * O método `reduce` executa uma função redutora para cada elemento do array, resultando em um único valor de retorno.
   * @param total - O acumulador, que acumula o valor de retorno da função. Inicia com o valor 0.
   * @param numero - O elemento atual do array que está sendo processado.
   * @returns O valor total acumulado após todas as iterações.
   */
  return numeros.reduce((total, numero) => total + numero, 0);
};

console.log('--- Exemplo com Rest Parameters ---');
// O rest parameter (...numeros) permite que a função `somar` receba múltiplos argumentos.
console.log('Somando 1, 2, 3, 4, 5:', somar(1, 2, 3, 4, 5)); // Saída: 15
console.log('Somando 10, 20, 30:', somar(10, 20, 30)); // Saída: 60

console.log('\n--- Exemplo com Spread Operator ---');

// Usando o spread operator para combinar arrays.
const numeros_parte1 = [1, 2, 3];
const numeros_parte2 = [4, 5, 6];

/**
 * @const numeros_completos - Um novo array contendo todos os elementos de `numeros_parte1` e `numeros_parte2`.
 */
const numeros_completos = [...numeros_parte1, ...numeros_parte2];

console.log('Array completo:', numeros_completos); // Saída: [1, 2, 3, 4, 5, 6]

// Usando o spread operator para passar elementos de um array como argumentos para uma função.
console.log('Soma do array completo:', somar(...numeros_completos)); // Saída: 21

// Usando o spread operator para copiar e estender objetos.
const pessoa = {
  nome: 'Carlos',
  idade: 30,
};

/**
 * @const pessoa_com_profissao - Um novo objeto contendo todas as propriedades de `pessoa` e uma nova propriedade `profissao`.
 */
const pessoa_com_profissao = {
  ...pessoa,
  profissao: 'Desenvolvedor',
};

console.log('\nObjeto original:', pessoa);
console.log('Objeto com adição de propriedade:', pessoa_com_profissao);
