import './App.css';
import minhaImagem from './665370.jpg';


function App() {
  const name = 'Luiz Paulo Nievola'
  const name2 = name.toUpperCase()

  function sum(a, b) {
    return a + b;
  };

  const somado = (a, b) => a+b;

  
  return (
    <div className="App">
      <h2>Alternando o JSX</h2>
      <p>Olá, {name2}!</p>
      <p>Soma: 2+2 = {2+2}</p>
      <p>Somando: 2+2: {sum(2, 2)}</p>
      <p>Somado: {somado(100,500)}</p>

      <img 
        src={minhaImagem} 
        alt="Minha imagem" 
        style={{ 
          width: '850px', 
          height: '500px',
          objectFit: 'cover'
        }} 
      />
    </div>
  );
}

export default App;
