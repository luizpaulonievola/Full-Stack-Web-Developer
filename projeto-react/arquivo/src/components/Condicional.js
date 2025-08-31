import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState("");
  const [userEmail, setUserEmail] = useState("");

  /**
   * @function EnviarEmail
   * @description Esta função é acionada pelo evento de clique do botão "Enviar Email".
   * Ela previne o comportamento padrão do formulário, que seria recarregar a página,
   * e atualiza o estado `userEmail` com o valor do estado `email`.
   * @param {Event} e - O evento de clique.
   */
  function EnviarEmail(e) {
    e.preventDefault();
    console.log("Email enviado");
    setUserEmail(email);
    console.log(userEmail);
  }

  /**
   * @function limparEmail
   * @description Esta função é acionada pelo evento de clique do botão "Limpar Email".
   * Ela limpa o estado `userEmail`, definindo-o como uma string vazia.
   */
  function limparEmail() {
    setUserEmail('');
    console.log("Email limpo");
    console.log(userEmail);
  }

  return (
    <div>
      <h2>Cadastre o seu E-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <button type="submit" onClick={EnviarEmail}>
          Enviar Email
        </button>

        {userEmail && (
          <div>
            <p> O email do usuário é: <strong>{userEmail}</strong></p>
            <button 
            onClick={limparEmail}>Limpar Email
            </button>
          </div>
        )}

      </form>
    </div>
  );
}

export default Condicional;

//