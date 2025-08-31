/**
 * @module SayMyName
 * @description Este componente renderiza o nome passado como propriedade.
 * @param {object} props - As propriedades do componente.
 * @param {string} props.nome - O nome a ser exibido.
 */
function SayMyName(props) { //properties
  
    return (
    <div>
        <p>Props: {props.nome}</p>
    </div>
  )

}

export default SayMyName;