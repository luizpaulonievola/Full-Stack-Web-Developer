import { useLocation } from 'react-router-dom';
import Message from '../layout/Message';
import styles from './Projects.module.css';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';

function Projects() {
    const [projects, setProject] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [projectMessage, setProjectMessage] = useState('');

    const location = useLocation();
    let message = '';
    if (location.state) {
        // Verifica se algum estado foi passado. Se sim, a message é extraída dele
        message = location.state.message;
    }

    useEffect(() => {
        //para simular o loading
        setTimeout(
            () =>
                fetch('/projects', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((resp) => resp.json())
                    .then((data) => {
                        console.log(data);
                        setProject(data);
                        setRemoveLoading(true);
                    })
                    .catch((err) => console.log(err)),
            500, // 0.5 segundos para simular algo mais realista
        );
    }, []);

    function removeProject(id) {
        fetch(`/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then(() => {
                // Com setProjects set apenas projetos que não são o id
                setProject(projects.filter((project) => project.id !== id));
                setProjectMessage('Projeto removido com sucesso!');
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Projects</h1>
                <LinkButton to="/newproject" text="Criar Projeto" />
            </div>

            {message && <Message type="sucess" msg={message} />}
            {projectMessage && <Message type="sucess" msg={projectMessage} />}

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                {
                    // Se estiver esperando a promisse carrega o Loading
                    !removeLoading && <Loading />
                }
                {removeLoading && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </div>
    );
}

export default Projects;
