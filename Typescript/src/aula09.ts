// Enumeração de dias
enum dias {
  domingo,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,

  /*domingo = 0,
  segunda = 1,
  terca = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,*/
}

// Enumeração de cores em formato hexadecimal
enum cores {
  vermelho = '#FF0000', // Red
  verde = '#00FF00', // Green
  azul = '#0000FF', // Blue
  amarelo = '#FFFF00', // Yellow
  roxo = '#800080', // Purple
  laranja = '#FFA500', // Orange
  rosa = '#FFC0CB', // Pink
  marrom = '#A52A2A', // Brown
  preto = '#000000', // Black
  branco = '#FFFFFF', // White
}

console.log(
  `Primeiro dia de trabalho na semana: ${dias[1]}${dias[1].endsWith('a') ? '-feira' : ''}`
);
console.log(
  `Segundo dia da semana: ${dias[2]}${dias[2].endsWith('a') ? '-feira' : ''}`
);

const data = new Date();

console.log(data);
console.log(`Dia do mês: ${data.getDate()}`);
console.log(`Dia da semana: ${data.getDay()}`);

const diaSemana = dias[data.getDay()];

// Mostra "feira" apenas para os dias que terminam com "a"
console.log(`${diaSemana}${diaSemana.endsWith('a') ? '-feira' : ''}`);

// Corrigido: Usar diaSemana que já contém o nome do dia
console.log(
  `Dia da semana: ${dias[data.getDay()]}
  ${dias[data.getDay()].endsWith('a') ? '-feira' : ''}`
);

// Exemplos de uso das cores
console.log(`Cor vermelha: ${cores.vermelho}`);
console.log(`Cor verde: ${cores.verde}`);
console.log(`Cor azul: ${cores.azul}`);

// Função para obter uma cor aleatória
function corAleatoria(): string {
  const todasAsCores = Object.values(cores);
  const indiceAleatorio = Math.floor(Math.random() * todasAsCores.length);
  return todasAsCores[indiceAleatorio];
}

console.log(`Cor aleatória: ${corAleatoria()}`);

enum tipoUsuario {
  USER = 10,
  ADMIN = 100,
  SUPER = 1000,
}

const tp: tipoUsuario = tipoUsuario.SUPER;
console.log(tp);

console.log(tipoUsuario.ADMIN);
console.log(Math.floor(Math.random() * 50));
