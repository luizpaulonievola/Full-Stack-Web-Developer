import Tarefas from '@/components/Tarefas';

import Produtos from './produtos/Produtos';

export default function Home() {
  return (
    <div>
      <Produtos />
      <Tarefas />
    </div>
  );
}

/*const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgoundColor: '#eee',
  fontSize: '20px',
};*/
