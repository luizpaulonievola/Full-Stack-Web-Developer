function soma(n1: number = 0, n2: number = 0): number {
  return n1 + n2;
}

console.log(soma(15, 50));

function novoUser(user: string, pass: string, nome?: string): void {
  console.log(`Usuario: ${user}`);
  console.log(`Senha: ${pass}`);
  console.log(`Nome: ${nome}`);
}

novoUser('Luiz', '123456'); //Nome: undefine
novoUser('Paulo', '123456', 'Luiz Paulo');