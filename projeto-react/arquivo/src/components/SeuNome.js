/**
 * @module SeuNome
 * @description Um componente que renderiza um campo de input para o usuário digitar seu nome.
 * Este é um exemplo de "controlled component" (componente controlado), onde o estado do input
 * é gerenciado pelo componente pai (`App.js`) através do padrão "State Lift".
 * @param {object} props - As propriedades do componente.
 * @param {string} props.nome - O valor atual do nome, vindo do estado do componente pai.
 * @param {function} props.setNome - A função para atualizar o estado do nome no componente pai.
 * @returns {JSX.Element} Um elemento div contendo um parágrafo e um input.
 */
function SeuNome({ nome, setNome }) {
    return (
        <div>
            <p>Digite seu nome:</p>
            <input
                type="text"
                placeholder="Digite seu nome..."
                // O valor do input é controlado pelo estado 'nome' do componente pai.
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    );
}

export default SeuNome;
