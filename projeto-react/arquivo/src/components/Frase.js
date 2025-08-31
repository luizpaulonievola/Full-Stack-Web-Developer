import styles from './Frase.module.css'

/**
 * @module Frase
 * @description Este componente renderiza uma frase com estilos CSS.
 */
function Frase() {
    return (
        <div className={styles.fraseContainer}>

            <p className={styles.fraseContent}>
                Componente com frase.
            </p>
        </div>
    )
}

export default Frase;