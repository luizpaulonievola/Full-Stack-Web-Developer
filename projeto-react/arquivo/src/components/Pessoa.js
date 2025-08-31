/**
 * @module Pessoa
 * @description Este componente renderiza as informações de uma pessoa.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.nome - O nome da pessoa.
 * @param {number} props.idade - A idade da pessoa.
 * @param {string} props.profissao - A profissão da pessoa.
 * @param {string} props.foto - A URL da foto da pessoa.
 */
function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;