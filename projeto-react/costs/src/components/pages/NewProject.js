import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    const navigate = useNavigate(); //useHistory está obsoleto

    function createPost(project) {
        // initialize costs and services
        project.costs = 0;
        project.services = [];

        fetch('/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project), // backend espera normalmente um JSON
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                // redirect})
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto; para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btntext="Criar projeto" />
        </div>
    );
}

export default NewProject;
