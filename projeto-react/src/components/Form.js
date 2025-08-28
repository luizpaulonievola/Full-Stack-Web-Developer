/**
 * @module Form
 * @description Este componente renderiza um formulário de cadastro de usuário.
 */

function Form() {

    /**
     * @function cadastrarUser
     * @description Esta função é chamada quando o formulário é submetido.
     * @param {Event} e - O evento de submissão do formulário.
     */
    function cadastrarUser(e) {
        
        e.preventDefault();
        console.log("Cadastrou o usuário")

    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
                <div>
                </div>
            </form>
        </div>
    )

}

export default Form;