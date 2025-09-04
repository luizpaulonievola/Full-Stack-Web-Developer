import styles from './Container.module.css';

/**
 * Componente para agrupar e estilizar o conteúdo principal da aplicação.
 *
 * @param {object} props - As propriedades do componente.
 * @param {React.ReactNode} props.children - O conteúdo a ser renderizado dentro do container.
 * @param {string} props.customClass - Uma classe CSS customizada para aplicar estilos adicionais.
 * @returns {JSX.Element} O componente Container renderizado.
 */
function Container(props) {
    return (
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    );
}

export default Container;
