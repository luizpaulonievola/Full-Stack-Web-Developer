import { useState } from 'react';
import Compform from '@/components/CampForm';
import Tabelaimc from './Tabelaimc';

function Calcimc() {
  const [peso, setPeso] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [imc, setImc] = useState<number>(0);

  function calcular() {
    let resultado = peso / altura ** 2;

    setImc(resultado);
  }

  return (
    <div className="flex flex-col border border-black w-[300px] gap-5">
      <p className="w-full text-center bg-zinc-400 font-bold text-lg">
        Cálculo do IMC
      </p>
      <Compform label="peso" state={peso} funcState={setPeso} />
      <Compform label="altura" state={altura} funcState={setAltura} />
      <button
        className="rounded-lg p-1 bg-blue-600 text-white mx-2 cursor-pointer
      "
        onClick={calcular}
      >
        Calcular
      </button>
      <p className="bg-zinc-100 p-1">Resultado: {imc.toFixed(2)}</p>
      <Tabelaimc imc={imc}/>
    </div>
  );
}

export default Calcimc;
