// Declarando array tipo string
let cursos: string[] = ['JS', 'Dados'];
let valores = [1, 2, 3];
let vtest: (string | number)[] = [10];

cursos.push('Nome');

// cursos.push(15) // Unknown compiler option 'noUncheckedSideEffectImports'.
cursos.pop();
console.log(cursos);
console.log(valores);
console.log(typeof vtest);
