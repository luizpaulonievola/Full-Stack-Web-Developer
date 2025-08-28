
/**
 * @module Event
 * @description Este componente renderiza um botão que dispara um evento.
 * @param {object} props - As propriedades do componente.
 * @param {number} props.numero - Um número a ser exibido no console quando o botão é clicado.
 */
function Event({numero}) {

    /**
     * @function meuEvento
     * @description Esta função é chamada quando o botão é clicado e exibe uma mensagem no console.
     */
    function meuEvento() {

        console.log(`Clicou! ${numero}`)
    }
    
    return (
        <div>
            <p>Clique para disparar o evento!</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Event;