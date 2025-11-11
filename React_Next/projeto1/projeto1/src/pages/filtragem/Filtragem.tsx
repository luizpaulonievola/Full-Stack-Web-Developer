import { useEffect, useState } from 'react';

type Carro = {
  id: number;
  categ: string;
  valor: string;
  modelo: string;
};

function Filtragem() {
  const [categ, setCateg] = useState('');
  const [carrosData, setCarrosData] = useState<Carro[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('/api/carros')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setCarrosData(data);
          setErro('');
        } else {
          setCarrosData([]);
          setErro('Resposta da API não é um array.');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        if (error instanceof TypeError && error.message === 'Failed to fetch') {
          setErro(
            'Não foi possível conectar ao servidor. Verifique se a API está rodando.',
          );
        } else {
          setErro(`Erro ao buscar dados da API: ${error.message}`);
        }
        setLoading(false);
        setCarrosData([]);
      });
  }, []);

  const categorias = Array.from(
    new Set(carrosData.map((carro) => carro.categ)),
  );

  const carrosFiltrados = categ
    ? carrosData.filter((carro) => carro.categ === categ)
    : [];

  return (
    <div>
      <label>Selecione a categoria: </label>
      <select
        value={categ}
        onChange={(e) => setCateg(e.target.value)}
        disabled={loading || categorias.length === 0}
      >
        {loading && <option>Carregando...</option>}
        {!loading && categorias.length === 0 && (
          <option>Nenhuma categoria encontrada</option>
        )}
        <option value="">Nenhum</option>
        {categorias.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {erro && <div style={{ color: 'red' }}>{erro}</div>}

      {categ && carrosFiltrados.length > 0 && (
        <div className="mt-4 flex flex-col">
          <div className="flex w-[500px] flex-row font-bold">
            <div className="w-full">Categoria</div>
            <div className="w-full">Valor</div>
            <div className="w-full">Modelo</div>
          </div>
          {carrosFiltrados.map((carro) => (
            <div key={carro.id} className="flex w-[500px] flex-row">
              <div className="w-full">{carro.categ}</div>
              <div className="w-full">{carro.valor}</div>
              <div className="w-full">{carro.modelo}</div>
            </div>
          ))}
        </div>
      )}

      {categ && carrosFiltrados.length === 0 && !loading && (
        <div>Nenhum carro encontrado para esta categoria.</div>
      )}
    </div>
  );
}

export default Filtragem;
