namespace Veiculos {
  enum Cores {
    'Preto',
    'Branco',
    'Vermelho',
    'Amarelo',
    'Azul',
  }
  export abstract class Carro {
    private cor: string;

    constructor(
      private nome: string,
      private motor: Motores.Motor,
      cor: Cores,
    ) {
      this.cor = Cores[cor];
    }

    public ligar() {
      this.motor.liga = true;
    }

    public desligar() {
      this.motor.liga = false;
    }

    get minhaCor(): string {
      return this.cor;
    }

    get nomeCarro(): string {
      return this.nome;
    }

    get potenciaCarro(): number {
      return this.motor.pot;
    }
  }

  export class CarroEsportivo extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(6, 300, new Motores.Turbo(100)), cor);
    }
  }

  export class CarroPopular extends Carro {
    constructor(nome: string, cor: Cores) {
      super(nome, new Motores.Motor(3, 100), cor);
    }
  }
}

namespace Motores {
  export class Turbo {
    constructor(private potencia: number) {}

    get pot() {
      return this.potencia;
    }
  }

  export class Motor {
    private ligado: boolean;

    constructor(
      private cilindros: number,
      private potencia: number,
      turbo?: Turbo,
    ) {
      this.ligado = false;
      this.potencia = potencia + (turbo ? turbo.pot : 0);
    }

    set liga(ligado: boolean) {
      this.ligado = ligado;
    }

    get liga() {
      return this.ligado;
    }

    get pot() {
      return this.potencia;
    }
  }
}

const carro1 = new Veiculos.CarroEsportivo('Ferrari', 1);
carro1.ligar();
carro1.desligar();
const carro2 = new Veiculos.CarroPopular('Fusca', 3);
const carro3 = new Veiculos.CarroPopular('Brasilia', 0);
console.log(
  `Nome: ${carro1.nomeCarro} Cor: ${carro1.minhaCor} Potência: ${carro1.potenciaCarro}`
);
console.log(
  `Nome: ${carro2.nomeCarro} Cor: ${carro2.minhaCor} Potência: ${carro2.potenciaCarro}`
);
console.log(
  `Nome: ${carro3.nomeCarro} Cor: ${carro3.minhaCor} Potência: ${carro3.potenciaCarro}`
);

/*
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export class ZipCodeValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.length === 8 && /^[0-9]+$/.test(s);
    }
  }

  export class LettersOnlyValidator implements StringValidator {
    isValid(s: string): boolean {
      return /^[A-Za-z]+$/.test(s);
    }
  }
}

// Como usar o namespace
let validators: { [s: string]: Validation.StringValidator } = {};
validators['CEP'] = new Validation.ZipCodeValidator();
validators['Apenas Letras'] = new Validation.LettersOnlyValidator();

console.log(validators['CEP'].isValid('12345-678')); // Saída: true (considerando 8 dígitos)
console.log(validators['Apenas Letras'].isValid('OláMundo')); // Saída: true
*/