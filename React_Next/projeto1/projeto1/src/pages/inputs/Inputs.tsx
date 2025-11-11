import cursosData from '@/data/cursos.json'; // objeto com os dados de
import { useEffect, useState } from 'react';

import Globais from '@/components/Globais';

interface Curso {
  id: number;
  nome: string;
}

function Inputs() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    altura: 0,
    peso: 0,
    curso: '',
  });

  useEffect(()=>{
    Globais.curso='Typescript'
  },[])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'peso' || name === 'altura' ? Number(value) : value,
    }));
  };

  const imc = form.altura > 0 ? form.peso / form.altura ** 2 : 0;

  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <div className="campoForm">
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={form.nome}
          onChange={handleChange}
          className="input-form"
        />
      </div>

      <div className="campoForm">
        <label htmlFor="sobrenome">Sobrenome:</label>
        <input
          id="sobrenome"
          name="sobrenome"
          type="text"
          value={form.sobrenome}
          onChange={handleChange}
          className="input-form"
        />
      </div>

      <div className="campoForm">
        <label htmlFor="peso">Peso (kg):</label>
        <input
          id="peso"
          name="peso"
          type="number"
          step="0.1"
          value={form.peso || ''}
          onChange={handleChange}
          className="input-form"
        />
      </div>

      <div className="campoForm">
        <label htmlFor="altura">Altura (ex: 1.70 m):</label>
        <input
          id="altura"
          name="altura"
          type="number"
          step="0.01"
          value={form.altura || ''}
          onChange={handleChange}
          className="input-form"
        />
      </div>

      {form.altura > 0 && form.peso > 0 && (
        <div>
          <strong>IMC:</strong> {imc.toFixed(2)}
        </div>
      )}

      <div className="text-2xl font-bold">
        Nome completo: {form.nome} {form.sobrenome}
      </div>

      <div className="campoForm">
        <label htmlFor="curso">Curso:</label>
        <select
          id="curso"
          name="curso"
          value={form.curso}
          onChange={handleChange}
          className="input-form"
        >
          <option value="">Selecione...</option>

          {cursosData.cursos.map((curso: Curso) => (
            <option key={curso.id} value={curso.nome}>
              {curso.nome}
            </option>
          ))}
        </select>
      </div>

      {form.curso && <div>Curso selecionado: {form.curso}</div>}
      <div>
        <p>{Globais.ano}</p>
        <p>{Globais.canal}</p>
        <p>{Globais.curso}</p>
      </div>
    </div>
  );
}

export default Inputs;
