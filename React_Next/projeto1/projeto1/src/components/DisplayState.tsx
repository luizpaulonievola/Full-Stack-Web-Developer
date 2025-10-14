interface DisplayStateProps {
  valor: number;
  fvalor: any;
}

function DisplayState(props: DisplayStateProps) {
  function operacao(op: number) {
    let c = props.valor;
    c += op;
    props.fvalor(c);
  }

  function contador() {
    let c = props.valor;
    c++;
    props.fvalor(c);
  }

  function subtrair() {
    let c = props.valor;
    c--;
    props.fvalor(c);
  }

  return (
    <div className="flex flex-col p-5 rounded-md bg-zinc-300 justify-center items-center gap-5 w-[300px]">
      <div className="flex bg-zinc-700 text-green-500 justify-center items-center w-[200px] m-b-3">
        {props.valor}
      </div>
      <div>
        <div className="flex gap-5">
          <button className="btn" onClick={() => operacao(1)}>
            Contar
          </button>

          <button className="btn" onClick={() => operacao(-1)}>
            Descontar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayState;
