import { useEffect, useState } from 'react';

import Globais from '@/components/Globais';

function Useeffect() {
  //const [cont, setCont] = useState<number>(0);
  const [aux, setAux] = useState<number>(0);

  useEffect(() => {
    alert(`UserEffect disparado`);
    Globais.canal = '20hz';
    Globais.ano = '2026';
    Globais.curso = 'React';
  }, []);

  function add() {
    let a = aux;
    a++;
    setAux(a);
  }

  return (
    <div>
      <div>
        <p>{`Valor de cont: ${aux}`}</p>
        <button
          onClick={add}
          className="`bg-blue-500 rounded` px-4 py-2 font-bold text-black hover:bg-blue-700"
        >
          Adicionar 1
        </button>
      </div>
      <div>
        <p>{Globais.ano}</p>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
      </div>
    </div>
  );
}

export default Useeffect;
