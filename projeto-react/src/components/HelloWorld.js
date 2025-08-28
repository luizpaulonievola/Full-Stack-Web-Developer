import Frase from "./Frase";

/**
 * @module HelloWorld
 * @description Este componente renderiza o componente Frase e um parágrafo.
 */
// Componente
function HelloWorld() {

    // div envolve componente que vai ser retornado
    return (
        <div> 
            <Frase />
            <p>Componente Importado</p>
        </div>
        
    )
}

export default HelloWorld;