import React from 'react';

interface ITabelaImcProps {
  imc: number;
}

const faixasDeImc = [
  { classificacao: 'Abaixo do Peso', valor: 'Abaixo de 18.5', min: 0.01, max: 18.49, cor: 'bg-yellow-400' },
  { classificacao: 'Peso Normal', valor: 'Entre 18.5 e 24.9', min: 18.5, max: 24.99, cor: 'bg-green-400' },
  { classificacao: 'Sobrepeso', valor: 'Entre 25 e 29.9', min: 25, max: 29.99, cor: 'bg-red-200' },
  { classificacao: 'Obesidade Grau I', valor: 'Entre 30 e 34.9', min: 30, max: 34.99, cor: 'bg-red-300' },
  { classificacao: 'Obesidade Grau II', valor: 'Entre 35 e 39.9', min: 35, max: 39.99, cor: 'bg-red-400' },
  { classificacao: 'Obesidade Grau III', valor: 'Acima de 40', min: 40, max: Infinity, cor: 'bg-red-600' },
];

function Tabelaimc({ imc }: ITabelaImcProps) { 
  return (
    <div className="mx-2 mb-2 text-center font-bold">
      <div className="flex">
        <div className="w-1/2 border">Classificação</div>
        <div className="w-1/2 border">IMC</div>
      </div>

      {faixasDeImc.map((faixa) => {
        const isAtivo = imc >= faixa.min && imc <= faixa.max;

        return (
          <div
            key={faixa.classificacao}
            className={`flex ${isAtivo ? faixa.cor : ''}`}
          >
            <div className="w-1/2 border p-2">{faixa.classificacao}</div>
            <div className="w-1/2 border p-2">{faixa.valor}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Tabelaimc;


/*interface ITabelaImcProps {
  imc: number;
}

function Tabelaimc(props: ITabelaImcProps) {
  const imc = props.imc;
  return (
    <div className="mx-2 mb-2">
      <div className="flex">
        <div className="w-1/2 border text-center font-bold">Classificação</div>
        <div className="w-1/2 border text-center font-bold">IMC</div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 0 && imc < 18.5 ? 'bg-yellow-400' : ''}`}
        >
          Abaixo do Peso
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 0 && imc < 18.5 ? 'bg-yellow-400' : ''}`}
        >
          Abaixo de 18.5
        </div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 18.5 && imc < 24.99 ? 'bg-green-400' : ''}`}
        >
          Peso Normal
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 18.5 && imc < 24.99 ? 'bg-green-400' : ''}`}
        >
          Entre 18.5 e 24.9
        </div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 25 && imc < 29.9 ? 'bg-red-200' : ''}`}
        >
          Sobrepeso
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 25 && imc < 29.9 ? 'bg-red-200' : ''}`}
        >
          Entre 25 e 29.9
        </div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 30 && imc < 34.9 ? 'bg-red-300' : ''}`}
        >
          Obesidade Grau I
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 30 && imc < 34.9 ? 'bg-red-300' : ''}`}
        >
          Entre 30 e 34.9
        </div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 35 && imc < 39.99 ? 'bg-red-400' : ''}`}
        >
          Obesidade Grau II
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 35 && imc < 39.99 ? 'bg-red-400' : ''}`}
        >
          Entre 35 e 39.9
        </div>
      </div>

      <div className="flex">
        <div
          className={`w-1/2 border text-center font-bold ${imc > 40 ? 'bg-red-600' : ''}`}
        >
          Obesidade Grau III
        </div>
        <div
          className={`w-1/2 border text-center font-bold ${imc > 40 ? 'bg-red-600' : ''}`}
        >
          Acima de 40
        </div>
      </div>
    </div>
  );
}

export default Tabelaimc;

*/
