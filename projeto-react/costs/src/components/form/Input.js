import styles from './Input.module.css';

/**
 * @description Componente de entrada de dados reutilizável.
 * Este é um exemplo de um "Functional Component" em React. Componentes funcionais
 * são funções JavaScript que retornam JSX, permitindo a criação de UI de forma
 * modular e reutilizável.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.type - O tipo do campo de entrada (ex: 'text', 'password', 'number').
 * @param {string} props.text - O texto que será exibido na label do campo.
 * @param {string} props.name - O nome do campo, usado para identificação no formulário.
 * @param {string} props.placeholder - O texto de placeholder do campo.
 * @param {Function} props.handOnChange - A função a ser executada quando o valor do campo mudar.
 * @param {string} props.value - O valor atual do campo.
 * @returns {JSX.Element} O componente de entrada de dados renderizado.
 */
function Input({ type, text, name, placeholder, handOnChange, value }) {
    /*
     * A sintaxe de desestruturação ({ type, text, ... }) é usada para extrair
     * as propriedades do objeto `props`. Isso torna o código mais limpo e legível.
     */
    return (
        <div className={styles.form_control}>
            {/*
             * A `label` é importante para a acessibilidade. O atributo `htmlFor`
             * associa a label ao campo de entrada com o `id` correspondente.
             */}
            <label htmlFor={name}>{text}:</label>
            {/*
             * O componente `input` é um elemento HTML padrão. Em React, ele se torna
             * um "controlled component" (componente controlado) quando usamos as props
             * `value` e `onChange`.
             *
             * - `value={value}`: O valor do input é controlado pelo estado do componente pai.
             * - `onChange={handOnChange}`: A cada mudança no input, a função `handOnChange`
             *   é chamada, permitindo que o componente pai atualize o estado.
             */}
            <input
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onChange={handOnChange}
                value={value}
            />
        </div>
    );
}

export default Input;
