class Pessoa {
  nome: string;
  age: number;

  constructor(nome: string, age: number) {
    this.nome = nome;
    this.age = age;
  }
}

class Obj {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const Coisas = ['Lapis', 'Pilha', 'Borracha', 'Caderno'];

export default Pessoa;
export { Obj, Coisas };
