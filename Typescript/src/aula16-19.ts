class Computador {
  public nome: string;
  private ram: number;
  private cpu: number;
  private ligado: boolean;

  constructor(nome: string, ram: number, cpu: number) {
    this.nome = nome;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }

  info(): void {
    console.log(`Nome..: ${this.nome}`);
    console.log(`RAM...: ${this.ram}GB`);
    console.log(`CPU...: ${this.cpu}GHz`);
    console.log(`Ligado: ${this.ligado ? 'Sim' : 'Não'}`);
    console.log('--------------------');
  }

  ligar(): void {
    this.ligado = true;
    console.log(`${this.nome} foi ligado.`);
  }

  desligar(): void {
    this.ligado = false;
    console.log(`${this.nome} foi desligado.`);
  }

  // Getters - para acessar as propriedades privadas
  getRam(): number {
    return this.ram;
  }

  getCpu(): number {
    return this.cpu;
  }

  isLigado(): boolean {
    return this.ligado;
  }

  // Setters - para modificar as propriedades privadas com validação
  setRam(novaRam: number): void {
    if (novaRam >= 4 && novaRam <= 128) {
      this.ram = novaRam;
      console.log(`${this.nome} teve a RAM atualizada para ${novaRam}GB.`);
    } else {
      console.log(
        `Não é possível definir RAM para ${novaRam}GB. Valor deve ser entre 4 e 128.`
      );
    }
  }

  setCpu(novaCpu: number): void {
    if (novaCpu >= 1 && novaCpu <= 32) {
      this.cpu = novaCpu;
      console.log(`${this.nome} teve a CPU atualizada para ${novaCpu}GHz.`);
    } else {
      console.log(
        `Não é possível definir CPU para ${novaCpu}GHz. Valor deve ser entre 1 e 32.`
      );
    }
  }

  setLigado(estado: boolean): void {
    if (estado) {
      this.ligar();
    } else {
      this.desligar();
    }
  }
}

// Exemplos de uso
const c1 = new Computador('PC', 32, 8);
const c2 = new Computador('Notebook', 64, 16);
const c3 = new Computador('Tablet', 8, 4);

c1.info();
c1.ligar();
c1.desligar();
c1.setRam(64);
c1.setCpu(12);

// Agora não é mais possível acessar diretamente: c1.ligado = true;
// É necessário usar o método setter:
c1.setLigado(true);

// Para ler os valores privados, use os getters:
console.log(`RAM atual: ${c1.getRam()}GB`);
console.log(`CPU atual: ${c1.getCpu()}GHz`);
console.log(`Está ligado? ${c1.isLigado() ? 'Sim' : 'Não'}`);
