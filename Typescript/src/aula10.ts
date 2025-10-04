/*
null: ausência intencional.
undefined: não definido/inicializado.
unknown: valor desconhecido em tempo de compilação, obriga checagem.
*/

// Operador ? (Optional Chaining)
// O operador ? permite acessar propriedades de objetos que podem ser null ou undefined
// sem causar um erro. Se o valor for null ou undefined, a expressão retorna undefined.

// Operador ?? (Nullish Coalescing)
// O operador ?? retorna o valor da direita quando o valor da esquerda é null ou undefined.
// É diferente do || porque o || também considera valores falsy como 0, "", false, etc.

// Exemplo combinando ambos:
// s?.length ?? 0
// 1. s?.length - usa optional chaining para acessar length apenas se s não for null/undefined
// 2. ?? 0 - se o resultado anterior for null/undefined, retorna 0

// Tipo union com null
// Permite que a variável seja uma string ou null
let vnome: string | null;
vnome = null;

console.log(vnome); // Imprime: null

// Tipo any
// Variável pode ter qualquer tipo, desabilita verificação de tipo
// vnome2 será undefined pois não foi inicializada
let vnome2: any;
console.log(vnome2); // Imprime: undefined

// Tipo union com undefined
// Permite que a variável seja um número ou undefined
let x: number | undefined;

// Função que pode retornar string ou null
function findUser(id: number): string | null {
  if (id === 1) return 'Alice';
  return null; // usuário não existe
}

// Verificando valor null retornado pela função
const user = findUser(2);
if (user === null) console.log('Usuário não encontrado');

// Função que demonstra o uso de ? e ??
// O parâmetro s é opcional (devido ao ?) e pode ser string ou undefined
function getLength(s?: string): number {
  // s?.length - Optional Chaining: acessa length apenas se s não for null/undefined
  // ?? 0 - Nullish Coalescing: se s?.length for null/undefined, retorna 0
  return s?.length ?? 0; // se undefined, retorna 0
}

console.log(getLength()); // 0 - chamada sem argumento, s é undefined
console.log(getLength("teste")); // 5 - chamada com string

// Função que retorna unknown
// unknown é mais seguro que any porque requer verificação de tipo antes do uso
function parseJson(str: string): unknown {
  return JSON.parse(str);
}

// Variável do tipo unknown requer verificação antes do uso
const data_2: unknown = parseJson('{"a": 42}');

// Verificação de tipo necessária antes de usar valor unknown
// 1. Verifica se é um objeto
// 2. Verifica se não é null
// 3. Verifica se tem a propriedade 'a'
if (typeof data_2 === 'object' && data_2 !== null && 'a' in data_2) {
  // Type assertion para acessar a propriedade
  console.log((data_2 as { a: number }).a);
}
