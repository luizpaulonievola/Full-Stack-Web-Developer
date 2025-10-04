enum TipoConta {
  PESSOA_FISICA = 'Pessoa Física',
  PESSOA_JURIDICA = 'Pessoa Jurídica',
}

interface IContaBancaria {
  deposito(valor: number): void;
  saque(valor: number): void;
  transferencia(valor: number, contaDestino: Conta): void;
  get saldo(): number;
  infoGeral(): void;
}

// Interface para cálculo de tributos
interface Tributos {
  calcularTributo(taxa: number): number;
}

// CLASSE ABSTRATA
// Implementando as duas interfaces
abstract class Conta implements IContaBancaria, Tributos {
  protected readonly numero: string;
  private _saldo: number = 0;
  private _historico: string[] = [];

  constructor(
    protected titular: string,
    protected tipo: TipoConta
  ) {
    this.numero = this.gerarNumeroConta();
    this.registrarNoHistorico(`Conta criada - ${this.titular}`);
  }

  private gerarNumeroConta(): string {
    const numero = Math.floor(Math.random() * 100000000) + 1;
    return numero.toString().padStart(8, '0');
  }

  private registrarNoHistorico(operacao: string): void {
    const data = new Date().toISOString();
    this._historico.push(`[${data}] ${operacao}`);
  }

  public get saldo(): number {
    return this._saldo;
  }

  public get historico(): readonly string[] {
    return [...this._historico];
  }

  public deposito(valor: number): void {
    this.validarValor(valor, 'depósito');

    this._saldo += valor;
    this.registrarNoHistorico(`Depósito: +R$ ${valor.toFixed(2)}`);
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
  }

  public saque(valor: number): void {
    this.validarValor(valor, 'saque');

    if (this._saldo < valor) {
      throw new Error('Saldo insuficiente para realizar o saque');
    }

    this._saldo -= valor;
    this.registrarNoHistorico(`Saque: -R$ ${valor.toFixed(2)}`);
    console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
  }

  public transferencia(valor: number, contaDestino: Conta): void {
    this.validarValor(valor, 'transferência');
    this.saque(valor);
    contaDestino.deposito(valor);
    this.registrarNoHistorico(
      `Transferência para ${contaDestino.numero}: -R$ ${valor.toFixed(2)}`
    );
  }

  private validarValor(valor: number, operacao: string): void {
    if (!Number.isFinite(valor)) {
      throw new Error(`Valor de ${operacao} deve ser um número válido`);
    }
    if (valor <= 0) {
      throw new Error(`Valor de ${operacao} deve ser positivo`);
    }
  }

  protected infoBasica(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Número: ${this.numero}`);
    console.log(`Tipo: ${this.tipo}`);
    console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
  }

  // Métodos abstratos que as classes filhas devem implementar
  public abstract infoGeral(): void;
  public abstract calcularTributo(taxa: number): number;
}

// CLASSES CONCRETAS
class ContaPessoaFisica extends Conta {
  constructor(
    private readonly cpf: string,
    titular: string
  ) {
    super(titular, TipoConta.PESSOA_FISICA);
    this.validarCPF(cpf);
  }

  private validarCPF(cpf: string): void {
    const cpfLimpo = cpf.replace(/\D/g, '');
    if (cpfLimpo.length !== 11) {
      throw new Error('CPF deve conter 11 dígitos');
    }
  }

  // Implementação específica para PF
  public calcularTributo(taxa: number): number {
    const tributo = this.saldo * (taxa / 100);
    console.log(
      `Tributo para Pessoa Física (CPF) sobre saldo de R$ ${this.saldo.toFixed(
        2
      )} com taxa de ${taxa}%: R$ ${tributo.toFixed(2)}`
    );
    return tributo;
  }

  public infoGeral(): void {
    console.log('=== CONTA PESSOA FÍSICA ===');
    super.infoBasica();
    console.log(`CPF: ${this.cpf}`);
    console.log('========================');
  }
}

class ContaPessoaJuridica extends Conta {
  constructor(
    private readonly cnpj: string,
    titular: string
  ) {
    super(titular, TipoConta.PESSOA_JURIDICA);
    this.validarCNPJ(cnpj);
  }

  private validarCNPJ(cnpj: string): void {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    if (cnpjLimpo.length !== 14) {
      throw new Error('CNPJ deve conter 14 dígitos');
    }
  }

  // Implementação específica para PJ
  public calcularTributo(taxa: number): number {
    const tributo = this.saldo * (taxa / 100);
    console.log(
      `Tributo para Pessoa Jurídica (CNPJ) sobre saldo de R$ ${this.saldo.toFixed(
        2
      )} com taxa de ${taxa}%: R$ ${tributo.toFixed(2)}`
    );
    return tributo;
  }

  public infoGeral(): void {
    console.log('=== CONTA PESSOA JURÍDICA ===');
    super.infoBasica();
    console.log(`CNPJ: ${this.cnpj}`);
    console.log('==========================');
  }
}

try {
  const contaPF = new ContaPessoaFisica('123.456.789-00', 'Paulo Silva');
  const contaPJ = new ContaPessoaJuridica(
    '12.345.678/0001-99',
    'Alvorada Comércio'
  );

  contaPF.deposito(1000);
  contaPJ.deposito(5000);
  contaPF.transferencia(300, contaPJ);

  console.log('\n--- Informações das Contas ---\n');
  contaPF.infoGeral();
  contaPJ.infoGeral();

  console.log('\n--- Cálculo de Tributos ---\n');
  contaPF.calcularTributo(5); // Tributo de 5% para PF
  contaPJ.calcularTributo(10); // Tributo de 10% para PJ

  console.log('\n--- Históricos ---\n');
  console.log('Histórico PF:', contaPF.historico);
  console.log('Histórico PJ:', contaPJ.historico);
} catch (error) {
  if (error instanceof Error) {
    console.error('Erro:', error.message);
  }
}
