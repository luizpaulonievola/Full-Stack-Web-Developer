import { useState } from "react";
/**
 * @module Form
 * @description Este componente renderiza um formulário de cadastro de usuário.
 */

function Form() {
  /**
   * @function cadastrarUsuario
   * @description Esta função é chamada quando o formulário é submetido.
   * @param {Event} e - O evento de submissão do formulário.
   */
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuario ${name} cadastrado com sucesso! Senha: ${password}`);
    console.log("Cadastrou o usuário");
    console.log(`Tipo de evento: ${e.type}`);
  }

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    // Deve retornar um unico elemento
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
        </div>

        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
