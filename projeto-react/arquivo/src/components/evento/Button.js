/**
 * @param {object} props - As propriedades do componente.
 * @param {Function} props.event - A função a ser chamada quando o botão é clicado.
 * @param {string} props.text - O texto a ser exibido no botão.
 */
function Button(props) {
  return <button onClick={props.event}>{props.text}</button>;
}

export default Button
