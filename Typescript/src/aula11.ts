// Demonstração de Type Assertions em TypeScript
// Type Assertion é uma forma de informar ao compilador o tipo de uma variável
// quando você tem mais informação sobre o tipo do que o TypeScript consegue inferir.

// Declaração de variáveis com tipos diferentes
let nvalor: number; // Variável que deve armazenar um número
let svalor: string; // Variável que deve armazenar uma string
let uvalor: unknown; // Variável que pode armazenar qualquer tipo (mais seguro que 'any')

// Atribuindo um valor numérico à variável unknown
uvalor = 10;

// Verificando os tipos e valores após as operações
console.log('Tipo de uvalor:', typeof uvalor);
console.log('Valor de uvalor:', uvalor);

// Type Assertions - Convertendo o tipo de 'uvalor' para outros tipos
// Sintaxe: <tipo>variavel ou variavel as tipo

// Convertendo uvalor (que contém o número 10) para number
nvalor = <number>uvalor;

console.log('Tipo de nvalor:', typeof nvalor);
console.log('Valor de nvalor:', nvalor);

// Convertendo uvalor (que contém o número 10) para string
// Isso não converte o valor real, apenas diz ao TypeScript para tratá-lo como string
svalor = <string>uvalor;

// Tentando adicionar 10 a svalor (que o TypeScript acha que é string, mas na verdade é número)
// Isso vai resultar em comportamento inesperado
svalor += 10;

console.log('Tipo de svalor:', typeof svalor);
console.log('Valor de svalor:', svalor);

const texto = '10';
const numero_2: number = 200;
console.log(typeof texto);
console.log(typeof Number(texto));
console.log(typeof numero_2.toString());

// CONCEITOS IMPORTANTES:
//
// 1. TYPE ASSERTION vs TYPE CONVERSION:
//    - Type assertion (<tipo>variavel) apenas informa ao TypeScript o tipo,
//      não converte o valor real em memória
//    - Type conversion realmente muda o valor para outro tipo
//
// 2. SINTAXES DE TYPE ASSERTION:
//    - Sintaxe de ângulo: <tipo>variavel (menos usada em React)
//    - Sintaxe de "as": variavel as tipo (recomendada)
//
// 3. EXEMPLO COM SINTAXE "as":
//    nvalor = uvalor as number;
//    svalor = uvalor as string;
//
// 4. QUANDO USAR TYPE ASSERTION:
//    - Quando você tem certeza sobre o tipo de uma variável do tipo unknown ou any
//    - Ao trabalhar com DOM elements (document.getElementById('id') as HTMLInputElement)
//    - Ao lidar com APIs que retornam any, mas você sabe o formato real
//
// 5. CUIDADOS:
//    - Type assertion pode causar erros em tempo de execução se usado incorretamente
//    - Prefira type guards (typeof, instanceof) para verificações seguras
//    - Use type assertion apenas quando você tem certeza do tipo
