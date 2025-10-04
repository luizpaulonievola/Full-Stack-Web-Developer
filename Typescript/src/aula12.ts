function logar(user: string, pass: string): void {
  console.log(`Usuario: ${user}, 
    senha: ${pass}`);
}

logar('Luiz', '123456');
logar('Paulo', '123456');

function multiplicar(n1: number, n2: number): number {
  return n1 * n2;
}

console.log(`Resultado da multiplicação: ${multiplicar(250, 850).toFixed(2)}`);
