import { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btntext, projectData }) {
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        async function loadCategories() {
            try {
                const res = await fetch('/categories');
                const data = await res.json(); //converte JSON para um objeto JavaScript
                setCategories(data);
            } catch (err) {
                console.error(err);
            }
        }
        loadCategories();
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    };

    function handChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value });
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto."
                handOnChange={handChange}
                value={project.name || ''}
            />

            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento do projeto."
                handOnChange={handChange}
                value={project.budget || ''}
            />

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''}
            />

            <SubmitButton text={btntext} />
        </form>
    );
}

export default ProjectForm;

/**
 * @file /home/ubuntu/Full-Stack-Web-Developer/projeto-react/costs/src/components/project/ProjectForm.js
 * @module ProjectForm
 * @description Formulário para criação e edição de projetos.
 * Este componente demonstra o uso de hooks do React (`useState`, `useEffect`)
 * para gerenciar o estado do formulário e carregar dados de uma API.
 *
 * @param {Object} props - As propriedades do componente.
 * @param {Function} props.handleSubmit - Função a ser executada na submissão do formulário.
 * @param {string} props.btntext - O texto a ser exibido no botão de submissão.
 * @param {Object} [props.projectData={}] - Os dados do projeto, caso seja uma edição.
 * @returns {JSX.Element} O formulário de projeto renderizado.
 *
 * @see {@link useState}
 * O hook `useState` é usado para criar e gerenciar o estado do componente.
 * - `categories`: Armazena a lista de categorias carregadas da API.
 * - `project`: Armazena os dados do projeto que estão sendo preenchidos no formulário.
 *
 * `useState([])` inicializa `categories` como um array vazio.
 * `useState(projectData || {})` inicializa `project` com os dados recebidos
 * via `projectData` (para edição) ou com um objeto vazio (para criação).
 *
 * @see {@link useEffect}
 * O hook `useEffect` é usado para executar "efeitos colaterais" em componentes funcionais.
 * Efeitos colaterais podem ser: busca de dados, manipulação do DOM, etc.
 *
 * Este `useEffect` é executado apenas uma vez, quando o componente é montado,
 * devido ao array de dependências vazio `[]` no final.
 *
 * A função `loadCategories` busca as categorias da API e as armazena no estado.
 * O uso de `async/await` com `try/catch` é uma forma moderna e limpa de lidar
 * com requisições assíncronas e tratamento de erros.
 *
 * @function submit
 * @description Função executada na submissão do formulário.
 * @param {Event} e - O evento de submissão do formulário.
 * `e.preventDefault()` impede o comportamento padrão do formulário (recarregar a página).
 * Chama a função `handleSubmit` recebida por props, passando os dados do projeto.
 *
 * @function handChange
 * @description Atualiza o estado `project` a cada mudança nos campos de texto do formulário.
 * Esta função cria um "componente controlado".
 * @param {Event} e - O evento de mudança do campo.
 * `setProject({ ...project, [e.target.name]: e.target.value })`
 * - `{ ...project }`: Cria uma cópia do objeto `project` atual (imutabilidade).
 * - `[e.target.name]`: Usa o `name` do input como chave do objeto.
 * - `e.target.value`: Atribui o novo valor a essa chave.
 * Isso permite que a mesma função `handChange` seja usada para todos os inputs de texto.
 *
 * @function handleCategory
 * @description Atualiza o estado `project` quando a categoria é selecionada.
 * @param {Event} e - O evento de mudança do campo de seleção.
 * Atualiza o estado com o ID e o nome da categoria selecionada.
 * `e.target.options[e.target.selectedIndex].text` obtém o texto da opção selecionada.
 *
 * @returns {JSX.Element}
 * Reutilização dos componentes de formulário `Input`, `Select` e `SubmitButton`.
 * As props `value` e `handOnChange`/`handleCategory` garantem que estes
 * sejam "controlled components", com seu estado gerenciado pelo React.
 */
