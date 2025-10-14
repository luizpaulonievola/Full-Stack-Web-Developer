import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// interface
interface ITarefa {
  id: string;
  texto: string;
}

function Tarefas() {

  const [tarefas, setTarefas] = useState<ITarefa[]>([]);

  const adicionarTarefa = () => {
    const novaTarefa: ITarefa = {
      id: uuidv4(),
      texto: `Tarefa ${tarefas.length + 1}`,
    };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Lista de Tarefas</h1>
      <button
        onClick={adicionarTarefa}
        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Adicionar tarefa
      </button>
      <ul className="mt-4 space-y-2">
        {tarefas.map((tarefa) => (
          <li
            key={tarefa.id}
            className="p-3 bg-white rounded-lg shadow flex items-center"
          >
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
