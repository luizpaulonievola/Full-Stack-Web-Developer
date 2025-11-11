import type { ReactNode } from 'react';

interface ICardProps {
  produto: string;
  valor: number;
  desconto: number; // opcional
  funcao?: (valor: number, desconto: number) => number;
  children: ReactNode;
}

export default function Card(props: ICardProps) {
  const { valor, desconto = 0 } = props;
  const valorFinal = valor * (1 - desconto / 100);

  return (
    <div
      className={`flex flex-col items-center justify-center border-2 ${
        desconto > 0 ? 'border-yellow-500' : 'border-blue-500'
      } rounded-lg bg-gray-100 p-4 text-gray-800 shadow-md`}
    >
      <div className="mb-2 text-xl font-bold">{props.produto}</div>
      <div className="text-lg">Valor: R$ {valor.toFixed(2)}</div>
      {desconto > 0 && props.funcao ? (
        <>
          <div className="text-md">Desconto: {desconto}%</div>
          <div className="mt-2 text-lg font-extrabold">
            Valor Final: R$ {valorFinal.toFixed(2)}
          </div>
          <div className="mt-2 text-sm">
            Valor final usando função R$
            {props.funcao(props.valor, props.desconto).toFixed(2)}
          </div>
        </>
      ) : (
        <div className="text-md mt-2 font-bold">
          Sem desconto nesse produto.
        </div>
      )}
      {props.children}
    </div>
  );
}
