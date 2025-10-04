import Pessoa, { Obj, Coisas } from './Classes'; // Elementos que não são padrão, ficam dentro de chaves
//import Pessoa from './Classes';

const p1 = new Pessoa('Luiz', 38);
const pers = new Obj('Luiz');

console.log(p1);
console.log(pers);
console.log(Coisas);
