function Saudacao({ nome }) {
    function gerarSaudacao(nome) {
        return `Olá ${nome}, tudo bem?`;
    }

    return (
        <>
            <p>{nome.length > 0 ? gerarSaudacao(nome) : ''}</p>
        </>
    );
}

export default Saudacao;
