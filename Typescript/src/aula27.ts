interface curso {
  titulo: string;
  descricao: string;
  aula: number;
  numAlunos?: number;
  inciarCurso(): void;
}

interface cursoProg extends curso {
  aulas: number;
  maxAlunos?: number;
}

interface cursoArtes extends curso {
  aulas: number;
  maxAlunos?: number;
}


let curso1: cursoProg;
let curso2: curso;

curso1 = {
  titulo: 'java',
  descricao: 'Cuso de java',
  aula: 50,
  numAlunos: 80,
  inciarCurso() {},
  aulas:25,
  maxAlunos:100
};

curso2 = {
  titulo: 'java',
  descricao: 'Cuso de java',
  aula: 50,
  inciarCurso() {},
};

console.log(curso1);
console.log(curso2);
