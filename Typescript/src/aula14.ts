const velocidade_media = (va: number, a: number, t: number): number => {
  return va + a * t;
};

const velocidade_inicial = 0; // Carro partindo do repouso
const aceleracao = 5; // m/s²
const tempo = 10; // segundos

const velocidade_final = velocidade_media(
  velocidade_inicial,
  aceleracao,
  tempo
);

console.log(
  `A velocidade final do carro após ${tempo} segundos é de ${velocidade_final} m/s.`
);

const somando = (n: number[]): number => {
  let s: number = 0;

  n.forEach((x) => {
    s+=x;
  });
  return s;
};

let lista_soma: number[] = [10, 20, 30, 40, 50];

console.log(somando(lista_soma));
