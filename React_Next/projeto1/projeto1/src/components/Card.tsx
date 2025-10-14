interface ICardProps {
  produto: string;
  valor: number;
  desconto?: number; // opcional
  funcao?: any;
  children: any;
}

export default function Card(props: ICardProps) {
  const { valor, desconto = 0 } = props;
  const valorFinal = valor * (1 - desconto / 100);

  return (
    <div
      className={`flex justify-center items-center flex-col border-2 ${
        desconto > 0 ? 'border-yellow-500' : 'border-blue-500'
      } rounded-lg p-4 shadow-md bg-gray-100 text-gray-800`}
    >
      <div className="text-xl font-bold mb-2">{props.produto}</div>
      <div className="text-lg">Valor: R$ {valor.toFixed(2)}</div>
      {desconto > 0 ? (
        <>
          <div className="text-md">Desconto: {desconto}%</div>
          <div className="text-lg font-extrabold mt-2">
            Valor Final: R$ {valorFinal.toFixed(2)}
          </div>
          <div className="text-sm mt-2">
            Valor final usando função R$
            {props.funcao(props.valor, props.desconto)}
          </div>
        </>
      ) : (
        <div className="text-md font-bold mt-2">
          Sem desconto nesse produto.
        </div>
      )}
      <div>{props.children[0]}</div>
    </div>
  );
}
