/**
 * @file aula35.ts
 * @author: Luiz Paulo Nievola
 * @date: 04/10/2025
 * @brief: Desestruturação em Typescript.
 * @description: Este arquivo contém exemplos de desestruturação em Typescript.
 * A desestruturação é uma expressão JavaScript que torna possível descompactar
 * valores de arrays, ou propriedades de objetos, em variáveis distintas.
 */

// A linha comentada abaixo mostra um exemplo de desestruturação de um array chamado 'av'.
// let [aa, bb, cc, dd] = av;

/**
 * @description
 * Exemplo de desestruturação de um objeto.
 * As propriedades do objeto 'obj' são atribuídas às variáveis cor1, cor2, cor3 e cor4.
 */
const obj = {
  cor1: 'Verde',
  cor2: 'Amarelo',
  cor3: 'Azul',
  cor4: 'Branco',
};

let { cor1, cor2, cor3, cor4 } = obj;

console.log(cor1);
console.log(cor2);
console.log(cor3);
console.log(cor4);

/**
 * @description
 * Exemplo de desestruturação de um array.
 * Os valores do array são atribuídos às variáveis a, b e c.
 */
let [a, b, c] = ['Array1', 'Array2', 'Array3'];
console.log(a);
console.log(b);
console.log(c);

/**
 * @description
 * Exemplo de desestruturação de um array de números.
 * Os valores do array são atribuídos às variáveis n1, n2, n3, n4 e n5.
 */
let [n1, n2, n3, n4, n5, ...n6] = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);

/**
 * @description
 * Exemplo de desestruturação de um objeto com alias.
 * As propriedades do objeto 'num' são atribuídas às variáveis vn1, vn2 e vn3.
 */
let num = {
  n1: 10,
  n2: 20,
  n3: 30,
};

let { n1: vn1, n2: vn2, n3: vn3 } = num;

console.log(vn1);
console.log(vn2);
console.log(vn3);

let conto = 'Amanhã vai chover muito';
let [...t] = conto.split(' ');
console.log(t);
