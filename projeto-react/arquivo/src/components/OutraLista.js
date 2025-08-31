import PropTypes from "prop-types";

/**
 * @module OutraLista
 * @description Este componente renderiza uma lista de itens a partir de um array.
 * @param {object} props - As propriedades do componente.
 * @param {string[]} props.itens - Um array de strings a ser renderizado como uma lista.
 * @returns {JSX.Element} Um fragmento React contendo um título e uma lista de parágrafos, ou uma mensagem se a lista estiver vazia.
 */


function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas:</h3>

      {itens.length > 0 ? (
        itens.map((item, index) => (
          // Usar o índice como chave é aceitável para listas estáticas.
          // Para listas dinâmicas (onde itens podem ser adicionados/removidos/reordenados),
          // é preferível usar um ID único para cada item, se disponível.
          <p key={index}>{index+1} - {item}</p>
        ))
      ) : (

        <p>Não há itens na lista!</p>

      )}
    </>
  );
}

OutraLista.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.string),
};

export default OutraLista;
