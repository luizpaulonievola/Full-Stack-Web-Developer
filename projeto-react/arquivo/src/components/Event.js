import Button from "./evento/Button";

/**
 * @module Event
 * @description Este componente renderiza um botão que dispara um evento.
 * @param {object} props - As propriedades do componente.
 * @param {number} props.numero - Um número a ser exibido no console quando o botão é clicado.
 */

function Event() {
  /**
   * @function meuEvento
   * @description Esta função é chamada quando o botão é clicado e exibe uma mensagem no console.
   */

  function meuEvento() {
    console.log(`Ativando primeiro evento!`);
  }

  function segundoEvento() {
    console.log(`Ativando segundo evento!`);
  }


  return (
    <div>
      <p>Clique para disparar o evento!</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
}

export default Event;
