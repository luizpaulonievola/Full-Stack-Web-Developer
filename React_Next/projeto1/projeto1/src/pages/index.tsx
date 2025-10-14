import Produtos from './produtos/produtos';
import Tarefas from '@/components/Tarefas';

const name = 'Luiz Paulo Nievola';

export default function Home() {
  return (
    <div>
      <Produtos />
      <Tarefas />
    </div>
  );
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgoundColor: '#eee',
  fontSize: '20px',
};
