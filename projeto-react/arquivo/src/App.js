import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
    return (
        // 1. O componente Router envolve toda a aplicação para habilitar o roteamento.
        <Router>
            {/* 2. O componente Navbar contém os links de navegação da aplicação. */}
            <Navbar />

            {/* 3. O componente Routes envolve todas as definições de rota. Ele substitui o antigo componente Switch. */}
            <Routes>
                {/* 
                  4. Cada Route define uma rota.
                     - 'path' especifica o caminho da URL.
                     - 'element' especifica o componente a ser renderizado quando a URL corresponder.
                */}
                <Route path="/" element={<Home />} />
                <Route path="/empresa" element={<Empresa />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

/*
### Mudanças do React Router DOM v5 para v6 ###

A versão 6 do React Router DOM introduziu mudanças significativas para tornar o roteamento mais simples e poderoso.

1.  **`Switch` -> `Routes`**: O componente `Switch` foi substituído pelo `Routes`. A funcionalidade é a mesma: garantir que apenas uma rota seja renderizada por vez.

2.  **Sintaxe do `<Route>`**: Esta é a mudança mais importante que causou o erro.
    -   **v5**: Os componentes eram passados como filhos do `<Route>`.
        ```jsx
        <Route path="/empresa">
            <Empresa />
        </Route>
        ```
    -   **v6**: O componente a ser renderizado é passado para a prop `element`. O `<Route>` agora é "self-closing".
        ```jsx
        <Route path="/empresa" element={<Empresa />} />
        ```

3.  **`exact` não é mais necessário**: Na v5, era comum usar a prop `exact` para garantir que uma rota como `/` não correspondesse a `/empresa`. Na v6, o algoritmo de correspondência de rotas foi aprimorado e ele sempre busca a correspondência mais específica, tornando a prop `exact` obsoleta na maioria dos casos.

*/
