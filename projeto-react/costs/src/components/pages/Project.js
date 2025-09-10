import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layout/Loading';
import Container from '../layout/Container';

function Project() {
    const { id } = useParams(); //Assim o react entende que se deseja obter o id
    //console.log(id);
    const [project, setProject] = useState([]);
    const [showPojectForm, setshowPojectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data);
                })
                .catch((err) => console.log(err));
        }, 500);
    }, [id]);

    function toggleProjectForm() {
        setshowPojectForm(!showPojectForm);
    }

    return (
        <>
            {project.name ? (
                <div>
                    <Container customClass="column">
                        <div>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm}>
                                {!showPojectForm ? 'Editar projeto' : 'Fechar'}
                                {!showPojectForm ? (
                                    <div>
                                        <p>Project form</p>
                                    </div>
                                ) : (
                                    <p>detalhes do projeto</p>
                                )}
                            </button>
                        </div>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}

export default Project;
