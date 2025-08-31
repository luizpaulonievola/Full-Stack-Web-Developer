/**
 * @module IMC
 * @description Este componente calcula e renderiza o Índice de Massa Corporal (IMC).
 * @param {object} props - As propriedades do componente.
 * @param {number} props.peso - O peso da pessoa.
 * @param {number} props.altura - A altura da pessoa.
 */
function IMC(props) {
    return (
        <p>Seu peso é: {props.peso}, altura é: {props.altura} e IMC: {props.peso / (props.altura * props.altura)}</p>
    )
}

export default IMC;