function f_teste<T, M>(v: T): T {
  return v;
}

console.log(f_teste<number, string>(5));
console.log(f_teste<string, boolean>('5'));

function primeiro<T>(data: T[]): T {
  return data[data.length - 1];
}

console.log(primeiro<string>(['Lua', 'Sol', 'Mercurio']));

function identityAny(arg: any): any {
  return arg;
}

let name_ = identityAny('João'); // name_ é do tipo 'any'. Perde a segurança.
name_.toUpperCase(); // OK
//name_.toFixed(2); // Vai quebrar em runtime! 😱

function identity<T>(arg: T): T {
  return arg;
}

// 1. Chamada explícita (raro):
let texto_ = identity<string>('Olá, TypeScript'); // 'texto' é garantidamente 'string'

// 2. Chamada com inferência (mais comum):
let numero = identity(38); // TypeScript infere: 'T' é 'number', 'numero' é 'number'.

// 3. Uso em arrays:
let listaNomes = identity(['Alice', 'Bob']); // TypeScript infere: 'T' é 'string[]'.

interface Lengthwise {
    length: number;
}

interface Comprimentavel {
    length: number;
}

function registrarComprimento<T extends Comprimentavel>(arg: T): T {
    console.log(arg.length); // Agora o TypeScript sabe que .length existe
    return arg;
}

registrarComprimento("olá"); // Funciona, pois string tem .length
registrarComprimento([1, 2, 3]); 