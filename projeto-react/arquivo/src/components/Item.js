import PropTypes from "prop-types";


/**
 * @module Item
 * @description Este componente renderiza um item de uma lista com marca e ano de lançamento.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.marca - A marca do item.
 * @param {number} props.ano_lancamento - O ano de lançamento do item.
 */
function Item({marca, ano_lancamento}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// Para acessar a propriedade se usa p minusculo
// Validar os dados (props) 

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

/*Item.defaultProps = {
    marca: 'Faltou a referencia da marca',
    ano_lancamento: 0,
}*/


export default Item;

// Em React, um componente precisa retornar apenas um elemento pai.