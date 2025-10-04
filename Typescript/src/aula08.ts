// Objetos em TypeScript
// Um objeto é uma coleção de propriedades, onde cada propriedade tem um nome e um valor
// Em TypeScript, podemos definir objetos de várias formas, incluindo inferência de tipo ou tipagem explícita
let PessoaHumano = {
  nome: 'Luiz', // Propriedade do tipo string
  idade: 38, // Propriedade do tipo number
  status: 'A', // Propriedade do tipo string
  // O TypeScript infere automaticamente o tipo do objeto com base nos valores das propriedades
  peso: 75,
  altura: 171,
  IMC: function () {
    return this.peso / (this.altura / 100) ** 2;
  },
};

console.log(PessoaHumano);
console.log(typeof PessoaHumano); // typeof retorna "object" para objetos
// Acessando propriedades do objeto usando notação de ponto
console.log(`Nome: ${PessoaHumano.nome}, idade: ${PessoaHumano.idade} anos`);
console.log(`IMC: ${PessoaHumano.IMC().toFixed(2)}`);
