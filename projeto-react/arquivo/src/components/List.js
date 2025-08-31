// React fragments
import Item from "./Item";

/**
 * @module List
 * @description Este componente renderiza uma lista de itens.
 */
function List() {
    return (
        <> 
            <h1>Uma Lista</h1>   
            <ul>    
                <Item marca="NVIDIA" ano_lancamento={1980} />
                <Item marca="AMD" ano_lancamento={1970} />
                <Item marca="INTEL" ano_lancamento={1960} />
                <Item />
            </ul>
        </>
    )
}

export default List;

// Em React, um componente precisa retornar apenas um elemento pai.